// Values verified against the DigiWage v3 chain params
// (qtum-v25.1-clean/src/kernel/chainparams.cpp): CMainParams for
// `digiwage`, CForkTestParams (inherits CRegTestParams' base58Prefixes,
// unoverridden) for `digiwage_forktest`.
module.exports = {
    digiwage: {
        messagePrefix: '\x15DigiWage Signed Message:\n',
        bech32: 'dw',
        bip32: {
            public: 0x022D2533,
            private: 0x0221312B
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x5a,
        wif: 0x59
    },
    digiwage_forktest: {
        messagePrefix: '\x15DigiWage Signed Message:\n',
        bech32: 'qcrt',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
