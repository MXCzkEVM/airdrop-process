

import {MEP1002NamingToken__factory} from "../../typechain-types";
import {generateBlockRanges} from "../uitls";
import {Provider} from "@ethersproject/providers";
import {Logx} from "../log";
import {TransferEvent} from "../../typechain-types/contracts/token/MEP1002NamingToken.sol/MEP1002NamingToken";

export async function getHexagonAddresses(addr: string, provider: Provider) {
    const contract = MEP1002NamingToken__factory.connect(addr, provider);
    const addresses: string[] = [];
    await (async () => {
        const endBlock = await provider.getBlockNumber();

        for await (const {fromBlock, toBlock} of generateBlockRanges(1, endBlock)) {
            try {
                const events = await contract.queryFilter(
                    contract.filters.Transfer(),
                    fromBlock,
                    toBlock
                );
                events.forEach((e) => {
                    addresses.push(e.args.to)
                })

                Logx.info(`Process Events from block ${fromBlock} to ${toBlock}`);
            } catch (error) {
                Logx.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message);
            }
        }
    })();
    return addresses;
}
export async function processHexagonBalance(addr: string, provider: Provider, owner: string) {
    const contract = MEP1002NamingToken__factory.connect(addr, provider);
    return Number(contract.balanceOf(owner));
}