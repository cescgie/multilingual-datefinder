# Datefinder

## Description

It finds dates in your text with Node.js and returns extracted strings, start and end indices, and the date object. It works for English, German, Russian, and Ukrainian languages in the date range from 1900 to 2099.

## Parameters

Method can be called by `datefinder(text)`, where `text` is your text.

## Installation

```bash
npm install multilingual-datefinder --save
```

## Usage

```js
const dateFinder = require('multilingual-datefinder')

let text = 'Це трапилося 2 січня 2001 року. Я отримав листа, на якому була зазначена дата 12.12.2004. Das Meeting findet am 15. März 2023 statt.'

console.log(dateFinder(text))
```

Expected outcome:

<pre>
[ { startIndex: 12,
    endIndex: 30,
    string: ' 2 січня 2001 року',
    date: 2001-01-02T00:00:00.000Z },
  { startIndex: 78,
    endIndex: 88,
    string: '12.12.2004',
    date: 2004-12-12T00:00:00.000Z },
  { startIndex: 90,
    endIndex: 114,
    string: ' Das Meeting findet am 15. März 2023 statt.',
    date: 2023-03-15T00:00:00.000Z } ]
</pre>

## Features

- Multi-language support: English, German, Russian, and Ukrainian
- Various date formats detection
- Relative dates support (yesterday, tomorrow, etc.)
- Verbal number detection
- Time intervals recognition

## Changes from Original

This package is based on the original [datefinder](https://github.com/Amice13/datefinder) by Kyrylo Zakharov, with the following enhancements:
- Added German language support
- Improved patterns for better date detection
- Updated documentation

## License

MIT
