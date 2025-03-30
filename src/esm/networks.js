/**
 * Represents the Bitcoin network configuration.
 */
export const bitcoin = {
  /**
   * The message prefix used for signing Bitcoin messages.
   */
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  /**
   * The Bech32 prefix used for Bitcoin addresses.
   */
  bech32: 'bc',
  /**
   * The BIP32 key prefixes for Bitcoin.
   */
  bip32: {
    /**
     * The public key prefix for BIP32 extended public keys.
     */
    public: 0x0488b21e,
    /**
     * The private key prefix for BIP32 extended private keys.
     */
    private: 0x0488ade4,
  },
  /**
   * The prefix for Bitcoin public key hashes.
   */
  pubKeyHash: 0x00,
  /**
   * The prefix for Bitcoin script hashes.
   */
  scriptHash: 0x05,
  /**
   * The prefix for Bitcoin Wallet Import Format (WIF) private keys.
   */
  wif: 0x80,
};

/**
 * Represents the regtest network configuration.
 */
export const regtest = {
  /**
   * The message prefix used for signing Bitcoin messages.
   */
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  /**
   * The Bech32 prefix used for regtest addresses.
   */
  bech32: 'bcrt',
  /**
   * The BIP32 key prefixes for regtest.
   */
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  /**
   * The prefix for regtest public key hashes.
   */
  pubKeyHash: 0x6f,
  /**
   * The prefix for regtest script hashes.
   */
  scriptHash: 0xc4,
  /**
   * The prefix for regtest WIF private keys.
   */
  wif: 0xef,
};

/**
 * Represents the testnet network configuration.
 */
export const testnet = {
  /**
   * The message prefix used for signing Bitcoin messages.
   */
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  /**
   * The Bech32 prefix used for testnet addresses.
   */
  bech32: 'tb',
  /**
   * The BIP32 key prefixes for testnet.
   */
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  /**
   * The prefix for testnet public key hashes.
   */
  pubKeyHash: 0x6f,
  /**
   * The prefix for testnet script hashes.
   */
  scriptHash: 0xc4,
  /**
   * The prefix for testnet WIF private keys.
   */
  wif: 0xef,
};

/**
 * Represents the Digiwage network configuration.
 */
export const digiwage = {
  /**
   * The message prefix used for signing Digiwage messages.
   */
  messagePrefix: '\x18Digiwage Signed Message:\n',
  /**
   * Digiwage does not use Bech32 addresses.
   */
  bech32: null,
  /**
   * The BIP32 key prefixes for Digiwage.
   */
  bip32: {
    /**
     * The public key prefix for BIP32 extended public keys.
     */
    public: 0x022D2533,
    /**
     * The private key prefix for BIP32 extended private keys.
     */
    private: 0x0221312B,
  },
  /**
   * The prefix for Digiwage public key hashes.
   */
  pubKeyHash: 0x1e,
  /**
   * The prefix for Digiwage script hashes.
   */
  scriptHash: 0x5a,
  /**
   * The prefix for Digiwage Wallet Import Format (WIF) private keys.
   */
  wif: 0x59,
};
