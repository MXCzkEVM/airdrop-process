import * as chains from './chains'

const addresses = {
  [chains.geneva.id]: {
    MXCMarketPlace: '0xe596cc861d0406ce9a9bd4bd9c4367469019d790',
    MNS: '0xCE5e3c318BFC7c2dee486cF7c62Ba95feFd6d2bD',
    MEP1002NamingToken: '0xe5f46E29D91BeBa5C58a83f8558d912820FaC267',
    MXCSwapRouter: '0x96adb4c80F6c934a20303d4b88f935F967299d5e',
    MEP1004Token: '0x0D589F5EeDF70e17F053CBb93760Db7E418603F6',
    MXCAAVEPool: '0x5985a5028596B0345451D2680b75672248c0fe08',
    MOONToken: '0x13d65548C25A7448fDBb95ae1CC48266DfE0fc51',
    MEP2542: '0xf01eceed6319423bCC953889CB8F35E7084df1dF',
    MXCERC20L2Bridge: '0x5F850D2E95076077B4677e6d8cB8a0BCFFB2D26a',
    NFTCollection: '0xB0284981a50Aa2e5A4135E25dcE687d1E300bF3a',
    XSDToken: '0xd28fce81516dcc53d2e320fd1c78e8449556c4f0',
    SensorToken: '0x727A7734afBB01C20681Cdd4F68b98F53ddD521b',
    MEP1002Token: '0x1964F08f56b79051fB3AE9a2C4d8D92A059b1237',
  },
  [chains.moonchain.id]: {
    LPWAN: '0x2000777700000000000000000000000000000001',
    XMXCToken: '0xD9465eF5f7DF27Ac960D90d1d796c66C9234a264',
    XMigrationToken: '0xBc86b9AA8598fe1FDAd73cE1cE098cdbfB684cF6',
    SensorToken: '0x9760aB142eA2237A047A2f46Ac3AD916e7aABd52',
    MEP2542: '0xBF717fCD0FD99238998d90D3fAA8C015530e85F4',
    MEP1002Token: '0x068234de9429FaeF2585A6eD9A52695cDa78aFE1',
    MEP1002NamingToken: '0x7407459464741c17F8341D7EAFED5a4A5d9303b4',
    MEP1004Token: '0x8Ff08F39B1F4Ad7dc42E6D63fd25AeE47EA801Ce',
    ERC6551Registry: '0x4c802AFb54Ef4e27429b6Ab87e6C2Da6991Fd4B9',
    ERC6551AccountImpl: '0xaafd9fF2225c8FEa0c616a219a78eD1d9B4CBeF7',
    MXCERC20L2Bridge: '0x153f143dC8FED1A07eAf1482c0277012CFC77937',
    MXCMarketPlace: '0xe031013A7B7Caf05FC20Bdc49B731E3F2f0cAfFd',
    MNS: '0xD1B70f92b310c3Fa95b83dB436E00a53e1f1f5d5',
    MXCSwapRouter: '0x757e5af94fC9b3d4035C2e6Cb1fD304F43c0A1A4',
    MXCAAVEPool: '0x225F9Bb949cF79CEa914C63A80fD15AE880c82F6',
    XSDToken: '0x7d2016B09BF46A7CAABD3b45f9e1D6C485A2c729',
    NFTCollection: '0x99c8905e91e92d7ba45056ca3d183f70a40b581d',
    CrabToken: '0x432DA7aC74e83417d4c683ff283bBB8F7E8B09b8',
    ERC20Factory: '0x2b8546F1E9B59eF499Acb6969D8B455DeAC6CE1B',
  },
  [chains.ethereum.id]: {
    MXCERC20L1Bridge: '0x7C954170305b11572522313b6AD514070ce0339c',
    MXCTOKEN: '0x5ca381bbfb58f0092df149bd3d243b08b9a8386e',
    MXCL1BridgeEOA: '0x989f0b8CC00D420141593211f37050Fa38713666',
  },
  [chains.sepolia.id]: {
    MXCERC20L1Bridge: '0x9Da359b2BA6611dDF4bd73Ae1e67f877981a0535',
    MXCTOKEN: '0x52F72a3C94A6fFCA3f8CAF769E14015FD040B0cD',
    MXCL1BridgeEOA: '0x0Dddb933b82083eaAd388154C9eE1845Ec3d8741',
  },
}

export default addresses
