# crypto-collectable-wallet

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Tech Stack

用 Vue / Nuxt / Axios 完成，並且從 metamsk 獲取地址。

本來有試著用 web3，但後來發現如果只是要從 metamask 拿地址，可以檢查 `window.ethereum` 存在與否並且從那邊取得即可。
