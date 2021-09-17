require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note machine upset grace hat army genre'; 
let testAccounts = [
"0x547578caf7df149c9768fd13ec337c64e4219995a82bd78fa6d0dc57e521b9c6",
"0xc45090bc485b0e71fde86c7dc7c558517b230cb3c76f876cb590d49daed66a46",
"0xc3f73e94bb407715906368712030b91741eeebe5e9676df403398553ea2ab8e4",
"0xa8d0a16c2c9bb5ef81171c3fae136a07779d9d302264bb30e5be1c6e851d71a4",
"0x5f5909da87b718783f94f64f89df83bb6bb4193a4b511e53aaa4d375ecb913c9",
"0x12c392609ed02b3fe7bc67595028ff000febab34db7b209cb481a7cb11e476f2",
"0xade040a65f01f270236bd3aeca55247435a888e796aa12dedfe127b8c52afc10",
"0xac4923f75f12dda118e850beaceed8c412e5274516b0f23bed230e62e8dbb2f3",
"0x4cfe66ac937394693de87362d03cda772fc1036d7db166a4f66e9999c018ef53",
"0x5f1ed31ff5a0361355d4da1b032d0d763ab89eb5135b8ef8c71b3a4dc1608112"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


