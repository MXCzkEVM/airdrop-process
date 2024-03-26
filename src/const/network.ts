import {ethers} from "ethers";
import {MXCMarketplace} from "../../typechain-types/contracts/MXCMarketPlace.sol";

const MXC_L2_RPC_URL = "http://149.28.212.112:8545"

const MXC_Wannsee_RPC_URL = "http://localhost:28545"

const Ethereum_RPC_URL = "https://hardworking-blissful-violet.quiknode.pro/eee8dde277c23181e923a905e062f5dae1706624/"

const Sepolia_RPC_URL = "https://ultra-dark-telescope.ethereum-sepolia.quiknode.pro/8cea725dfaadfee9e8a3bc0e02af3732a04e3795/"
export const ETHProvider = new ethers.providers.StaticJsonRpcProvider(Ethereum_RPC_URL);

export const SepoliaProvider = new ethers.providers.StaticJsonRpcProvider(Sepolia_RPC_URL);
export const MXCL2Provider = new ethers.providers.StaticJsonRpcProvider(MXC_L2_RPC_URL);

// export const WannseeProvider = new ethers.providers.StaticJsonRpcProvider(MXC_Wannsee_RPC_URL)
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
    MXCERC20L1Bridge = "MXCERC20L1Bridge",
    MXCERC20L2Bridge = "MXCERC20L2Bridge",
    MXCTOKEN = "MXCToken",
    MNS = "MNS",
    XSDToken = "XSDToken",
    MOONToken = "MOONToken",
    MXCMarketPlace = "MXCMarketPlace",
    MXCSwapRouter = "MXCSwapRouter",
    MXCAAVEPool = "MXCAAVEPool"
}

export const ContractAddr = {
    MXCWannsee: {
      [ContractType.MXCMarketPlace]: "0x91fd2e13379dF87f752c82E8C16a1aE72601a9B2",
      [ContractType.MNS]: "0x2246EdAd0bc9212Bae82D43974619480A9D1f387",
      [ContractType.MEP1002NamingToken]: "0xad5a1855A383732f311241c1A4F9510da0Ad0743",
      [ContractType.MXCSwapRouter]: "0xCaf6FE52B3b2948EFe7EA72C1ffd0B49C5FB030E",
      [ContractType.MEP1004Token]: "0x5CE293229a794AF03Ec3c95Cfba6b1058D558026",
      [ContractType.MXCAAVEPool]: "0x5985a5028596B0345451D2680b75672248c0fe08",
      [ContractType.MOONToken]: "0x13d65548C25A7448fDBb95ae1CC48266DfE0fc51",
      [ContractType.MEP2542]: "0xc23832093cEC4306108775468FCCbcA84E19eAEa",
      [ContractType.MXCERC20L2Bridge]: "0x5F850D2E95076077B4677e6d8cB8a0BCFFB2D26a"
    },
    MXCL2Mainnet: {
        [ContractType.LPWAN]: "0x2000777700000000000000000000000000000001",
        [ContractType.XMXCToken]: "0xD9465eF5f7DF27Ac960D90d1d796c66C9234a264",
        [ContractType.XMigrationToken]: "0xBc86b9AA8598fe1FDAd73cE1cE098cdbfB684cF6",
        [ContractType.SensorToken]: "0x9760aB142eA2237A047A2f46Ac3AD916e7aABd52",
        [ContractType.MEP2542]: "0xBF717fCD0FD99238998d90D3fAA8C015530e85F4",
        [ContractType.MEP1002Token]: "0x068234de9429FaeF2585A6eD9A52695cDa78aFE1",
        [ContractType.MEP1002NamingToken]: "0x7407459464741c17F8341D7EAFED5a4A5d9303b4",
        [ContractType.MEP1004Token]: "0x8Ff08F39B1F4Ad7dc42E6D63fd25AeE47EA801Ce",
        [ContractType.ERC6551Registry]: "0x4c802AFb54Ef4e27429b6Ab87e6C2Da6991Fd4B9",
        [ContractType.ERC6551AccountImpl]: "0xaafd9fF2225c8FEa0c616a219a78eD1d9B4CBeF7",
        [ContractType.MXCERC20L2Bridge]: "0x153f143dC8FED1A07eAf1482c0277012CFC77937",
        [ContractType.MXCMarketPlace]: "0xe031013A7B7Caf05FC20Bdc49B731E3F2f0cAfFd",
        [ContractType.MNS]: "0xD1B70f92b310c3Fa95b83dB436E00a53e1f1f5d5",
        [ContractType.MXCSwapRouter]: "0x757e5af94fC9b3d4035C2e6Cb1fD304F43c0A1A4",
        [ContractType.MXCAAVEPool]: "0x225F9Bb949cF79CEa914C63A80fD15AE880c82F6",
        [ContractType.XSDToken]: "0x7d2016B09BF46A7CAABD3b45f9e1D6C485A2c729",
    },
    Ethereum: {
        [ContractType.MXCERC20L1Bridge]: "0x7C954170305b11572522313b6AD514070ce0339c",
        [ContractType.MXCTOKEN]: "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e",
        "MXCL1BridgeEOA": "0x989f0b8CC00D420141593211f37050Fa38713666"
    },
    Sepolia: {
        [ContractType.MXCERC20L1Bridge]: "0x9Da359b2BA6611dDF4bd73Ae1e67f877981a0535",
        [ContractType.MXCTOKEN]: "0x52F72a3C94A6fFCA3f8CAF769E14015FD040B0cD",
        "MXCL1BridgeEOA": "0x0Dddb933b82083eaAd388154C9eE1845Ec3d8741"
    }
}