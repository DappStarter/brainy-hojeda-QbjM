require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name reflect sad erosion good another army ghost'; 
let testAccounts = [
"0x12d8eab885ebb35d2253215801430876c790d59eb0e923339125ffbaf0c9e569",
"0x4979321c2c9e904f826d1326df5a7a77f0aee8ca7d2890db354294845651f7e7",
"0x158642b90a505b32e32eeb71516b37b1381ed4dde27c5aab72a0ad289a52c902",
"0xa24a5ce1b5c2c27218e3a71db37af8b25da884eb66945b05e1582a122cdfa469",
"0x612dccad857a701739340d23eb94701d5b8c00b8b3bef1338d0ffa6bdbcda53e",
"0x7a0d61d8fab80d90c326a490bb135452da51b7c9cd417cbff4fc6d2d3e7aa293",
"0x002b49df8762f3c50398ea4d8015d64eea43b4b3a2947b8ce6fed516bd4870c6",
"0xa69011104ab8e28eba8c21b9b2828abf3829256d043f3847ef0e6633f24baf39",
"0x0b8860d216bf3b4703239e4277064a66256e0941b15fbcd07f1656a7f529d456",
"0x68f05e9a43e50d0de5576a60687245bba7275ddd6ca6ad2face75e1ff9967a30"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

