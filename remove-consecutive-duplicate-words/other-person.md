# [Imahori](https://www.codewars.com/users/Imahori)

```js
const solution = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
```

## Strategy

He started with splitting given string to an array of words. Then, he eliminated words in the array which are the same with previous words. And lastly, he combined remaining words as a string in return.

## Implementation

**`=>` function**: Arrow function is used in the solution probably because of its simplicity. Since there is only one argument, parentheses are not used for it. Since, there is only one expression in the code block, braces are not used. Also `return` keyword is not required, since if there is only one expression in an arrow function, return is implied.

**`split()` method**: The given string has been converted to a words array using `split(" ")` method with a space
between quotation marks.

**`filter()` method**: `filter()` method is used with value, index, array (x,i,arr) parameters to check whether
certain array element is same with previous array element. If so, they are removed.

**`=>` function in `filter()` method**: Since there are 3 argument, parentheses are used. Since, there is only one expression in the code block, braces and `return` are not used.

**`join()` method**: Lastly, `join(" ")` method is used with a space between quotation marks to combine all remaining words in the array and to get a string in return.

## Possible Refactors

This solution doesn't need any refactoring, I think.
But, if wanted, traditional function instead of arrow function or `for` loop instead of `filter()` can be used.

## References

[Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)