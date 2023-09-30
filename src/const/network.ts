import {ethers} from "ethers";

const MXC_L2_RPC_URL = "https://rpc.mxc.com"

const Ethereum_RPC_URL = "https://lingering-blissful-ensemble.quiknode.pro/5363f59e6577b507039b7ad2159b9fe46d9a534b/"

export const ETHProvider = new ethers.providers.StaticJsonRpcProvider(Ethereum_RPC_URL);
export const MXCL2Provider = new ethers.providers.StaticJsonRpcProvider(MXC_L2_RPC_URL);
export enum ContractType {
    MEP2542 = "MEP2542",
    MEP1002Token = "MEP1002Token",
    MEP1002NamingToken = "MEP1002NamingToken",
    MEP1004Token = "MEP1004Token",
    XMXCToken = "XMXCToken",
    XMigrationToken = "XMigrationToken",
    SensorToken = "SensorToken",
    ERC6551Registry = "ERC6551Registry",
    ERC6551AccountImpl = "ERC6551AccountImpl",
    LPWAN = "LPWAN",
    ERC20Bridge = "ERC20Bridge",
    MXCTOKEN = "MXCToken",
    MNS = "MNS",
    XSDToken = "XSDToken",
    MOONToken = "MOONToken"
}

export const ContractAddr = {
    ArbL1Mainnet: {
    },
    MXCL2Mainnet: {
        [ContractType.LPWAN]: "0x2000777700000000000000000000000000000001",
        [ContractType.XMXCToken]: "0xD9465eF5f7DF27Ac960D90d1d796c66C9234a264",
        [ContractType.XMigrationToken]: "0xBc86b9AA8598fe1FDAd73cE1cE098cdbfB684cF6",
        [ContractType.SensorToken]: "0x9760aB142eA2237A047A2f46Ac3AD916e7aABd52",
        [ContractType.MEP2542]: "0xBF717fCD0FD99238998d90D3fAA8C015530e85F4",
        [ContractType.MEP1002Token]: "0x068234de9429FaeF2585A6eD9A52695cDa78aFE1",
        [ContractType.MEP1002NamingToken]: "",
        [ContractType.MEP1004Token]: "0x8Ff08F39B1F4Ad7dc42E6D63fd25AeE47EA801Ce",
        [ContractType.ERC6551Registry]: "0x4c802AFb54Ef4e27429b6Ab87e6C2Da6991Fd4B9",
        [ContractType.ERC6551AccountImpl]: "0xaafd9fF2225c8FEa0c616a219a78eD1d9B4CBeF7",
        [ContractType.ERC20Bridge]: "0x153f143dC8FED1A07eAf1482c0277012CFC77937",
        [ContractType.XSDToken]: "",
        [ContractType.MOONToken]: "",
    },
    Ethereum: {
        [ContractType.ERC20Bridge]: "0x7C954170305b11572522313b6AD514070ce0339c",
        [ContractType.MXCTOKEN]: "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e"
    }
}