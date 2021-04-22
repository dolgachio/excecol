# Excecol

Simple set of functions for generating letter based excel like column names.

## Usage

It support both `ES` and `CommonJS` modules.

## Functions

### getLetterColName(colNum, upperCase)

`colNum` - `number` from 0 to 25. `NaN, Infinity, -Infinity` - are ignored, and function returns empty string.

`upperCase` - `boolean`, optional parameter. By default `upperCase === true`. If `true` - result in upper case, if `false` - in lower.

Usage
```
import { getLetterColName } from 'execol';

getLetterColName(0); // 'A'
getLetterColName(NaN); // ''
getLetterColName(25); // 'Z'

// upperCase === false
getLetterColName(0, false); // 'a'
getLetterColName(25, false); // 'z'
```



