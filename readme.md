# capture-tweet

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/capture-tweet.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/akameco/capture-tweet.svg?branch=master)](https://travis-ci.org/akameco/capture-tweet)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Caputre tweet


## Install

```
$ npm install capture-tweet
```


## Usage

```js
const fs = require('fs');
const captureTweet = require('capture-tweet');

const tweet = 'https://twitter.com/akameco/status/903892994998153216'

captureTweet(tweet).then(img => {
  fs.writeFileSync('tweet.png', img)
})
```

tweet.png

<img src="media/result.png" />

## API

### captureTweet(url)

#### url

Type: `string`

Tweet url


## License

MIT © [akameco](http://akameco.github.io)
