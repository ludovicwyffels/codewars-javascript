# Codewars Katas

![](https://www.codewars.com/users/ludovicwyffels/badges/large)

## Global Index

This index will help you find all katas ordered alphabetically with a link to the kata folder.

- [8 Kyu - Index](./lib/index/8-kyu.md)
- [7 Kyu - Index](./lib/index/7-kyu.md)
- [6 Kyu - Index](./lib/index/6-kyu.md)
- [5 Kyu - Index](./lib/index/5-kyu.md)
- [4 Kyu - Index](./lib/index/4-kyu.md)
- [3 Kyu - Index](./lib/index/3-kyu.md)

To update the global index run

```bash
npm run update-index
```

## Create a new Kata

The kata generator uses some dependencies so you should install those first

```bash
npm run install-generator-deps
```

To generate a new folder with an `index.js` and `index.test.js` run

```bash
npm run create-kata [kata link].
```

For example

```bash
npm run create-kata https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
```

Since this is a 5-kyu kata, it will appear under this folder with its title "RGB To Hex Conversion".

## Test

If you want to test in watch mode uncommitted files

```bash
npm run test-watch
```
