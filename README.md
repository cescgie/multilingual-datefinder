# Datefinder

## Description

It finds dates in your text with Node.js and returns extracted strings, start and end indices, and the date object. It works for English, German, Russian, Ukrainian, Italian, Portuguese, Spanish, Indonesian, Hindi, French, and Arabic languages in the date range from 1900 to 2099.

## Parameters

Method can be called by `datefinder(text)`, where `text` is your text.

## Installation

```bash
npm install multilingual-datefinder --save
```

## Usage

### CommonJS (Node.js)

```js
const dateFinder = require('multilingual-datefinder');

let text = `Це трапилося 2 січня 2001 року.
Das Meeting findet am 15. März 2023 statt.
La réunion aura lieu le 15 avril 2024.
La reunión es el 15 de abril de 2024.
A reunião será em 15 de abril de 2024.
La riunione è il 15 aprile 2024.
Rapat pada tanggal 15 April 2024.
बैठक 15 अप्रैल 2024 को है।
الاجتماع في 15 أبريل 2024.`;

console.log(dateFinder(text));
```

### ES Modules (Modern JavaScript)

```js
import dateFinder from 'multilingual-datefinder';

let text = `Це трапилося 2 січня 2001 року.
Das Meeting findet am 15. März 2023 statt.
La réunion aura lieu le 15 avril 2024.
La reunión es el 15 de abril de 2024.
A reunião será em 15 de abril de 2024.
La riunione è il 15 aprile 2024.
Rapat pada tanggal 15 April 2024.
बैठक 15 अप्रैल 2024 को है।
الاجتماع في 15 أبريل 2024.`;

console.log(dateFinder(text));
```

Expected outcome:

<pre>
[ { startIndex: 12,
    endIndex: 30,
    string: ' 2 січня 2001 року',
    date: 2001-01-02T00:00:00.000Z },
  { startIndex: 32,
    endIndex: 69,
    string: ' Das Meeting findet am 15. März 2023 statt.',
    date: 2023-03-15T00:00:00.000Z },
  { startIndex: 71,
    endIndex: 103,
    string: ' La réunion aura lieu le 15 avril 2024',
    date: 2024-04-15T00:00:00.000Z },
  // ... additional dates detected in other languages ... ]
</pre>

## Features

- Multi-language support:
  - European: English, German, Russian, Ukrainian, Italian, French, Spanish, Portuguese
  - Middle Eastern: Arabic
  - South Asian: Hindi
  - Southeast Asian: Indonesian
- Various date formats detection
- Relative dates support (yesterday, tomorrow, etc.) in all supported languages
- Verbal number detection in multiple scripts and languages
- Time intervals recognition
- Support for different calendar systems and date formats
- Right-to-left (RTL) text support for Arabic

## Changes from Original

This package is based on the original [datefinder](https://github.com/Amice13/datefinder) by Kyrylo Zakharov, with the following enhancements:
- Added support for multiple new languages:
  - German language support
  - Romance languages (Italian, French, Spanish, Portuguese)
  - Arabic language with RTL support
  - Hindi language support
  - Indonesian language support
- Improved patterns for better date detection
- Enhanced support for relative dates and time expressions
- Added support for various cultural date formats
- Updated documentation with multilingual examples
- Expanded test coverage for all supported languages

## License

MIT
