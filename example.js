// @flow
'use strict'
const fs = require('fs')
const cap = require('.')

cap('https://twitter.com/akameco/status/903892994998153216').then(buffer => {
  fs.writeFile('result.png', buffer, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Successs!!!')
  })
})
