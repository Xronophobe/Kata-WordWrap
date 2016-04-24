# **KataWordWrap**
[@codingdojo.com](http://codingdojo.org/cgi-bin/index.pl?KataWordWrap "KataWordWrap")

## Description
You write a class called Wrapper, that has a single static function named wrap that takes two arguments, a string, and a column number. The function returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number. You try to break lines at word boundaries.
Like a word processor, break the line by replacing the last space in a line with a newline.

## Wrapper.wrap(text, columns)

* it takes two arguments: a string **text** to split in a way that there would be no lines longer than the number **columns** 
* returns the original string with this new format

## TODOS

* [x] Return null when the column parameter is not a positive integer
* [x] Split at the last space character before reaching the given column
* [x] Split at the given column number when there is no space before
* [ ] do not copy spaces at the first or last position of each line

## Example

```js
var Wrapper = require('./src/wrapper.js');

//...
var splitThis = new Wrapper().wrap('0123456789', 5);
``` 
calling ``` splitThis``` will return:
```	
01234\n56789
```
## License

MIT
