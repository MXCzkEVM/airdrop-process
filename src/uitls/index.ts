export async function* generateBlockRanges(startBlock: number, endBlock: number, step: number = 10000) {
    let fromBlock = startBlock;
    let toBlock = fromBlock + step;

    while(fromBlock < endBlock) {
        yield { fromBlock, toBlock: Math.min(toBlock, endBlock) };
        fromBlock = toBlock + 1;
        toBlock += step;
    }
}