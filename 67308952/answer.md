Maybe your tutorial is out of date. In `bip39`'s [document][1], we have 2 kinds of `mnemonicToSeed`:

- `mnemonicToSeed`: Async function which returns Promise
- `mnemonicToSeedSync`: Sync function which returns Buffer


As your example, we have 2 ways to solve it following 2 above functions.

`mnemonicToSeedSync`

```js
...
const seed = bip39.mnemonicToSeedSync(mnemonic); // creates seed buffer
...
```

`mnemonicToSeed`

```js
(async () => { // wrap logic into a async function
  const mnemonic = bip39.generateMnemonic(); // generates a 12 word mnemonic

  // wait until seed finished to get seed Buffer
  const seed = await bip39.mnemonicToSeed(mnemonic); // creates seed buffer

  const root = hdkey.fromMasterSeed(seed); // should not be passing a promise into here
  //const masterPrivateKey = root.privateKey.toString('hex');

  const addrnode = root.derive("m/44'/60'/0'/0/0");
  console.log(seed);
})();
```


  [1]: https://www.npmjs.com/package/bip39
