# Lyric Finder

> Library to easily find song lyrics and other information about songs.

[![NPM Version][npm-image]][npm-url]

## Install

```bash
npm install @joehoel/lyric-finder

// or

yarn add @joehoel/lyric-finder
```

## Usage

```javascript
import search from '@joehoel/lyric-finder';

async function main() {
  const { lyrics } = search('Wrecked');

  console.log(lyrics);
}
```

## License

[MIT](http://vjpr.mit-license.org)
