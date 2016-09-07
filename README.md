# EtherCare

### Dependencies

- [MetaMask](https://metamask.io/)
- [IPFS](https://ipfs.io)

### MetaMask Setup

- [Install the chrome extension](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)

### IPFS Setup

You will need to configure your IPFS node to support CORS.

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"http://localhost:3000\"]"
```


```
$ npm install && bower install && tsd install
$ gulp serve
$ gulp build
$ gulp gh-deploy
```

### Roadmap

