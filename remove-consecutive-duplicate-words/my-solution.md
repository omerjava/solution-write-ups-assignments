# [My Solution](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/javascript)

I solved the challenge with my current knowledge, but later I improved it with the inspiration
of [Imahori's solution](https://www.codewars.com/kata/reviews/5b39e927e7a2c103300018b5/groups/5b3a6472615a90b74d000e04). Basically, I was assuming that I can't 
check `arr[i]!==arr[i-1]` when `i=0`, because it would be `arr[-1]` and undefined.
But from his solution, I see that it is possible. When you check `if(arr[0]!==arr[-1])`
, it results true. It means that `arr[0]!==undefined` is true. Then, I refactored my solution.
My solution becomes shorter and cleaner than my previous solution.

```js
const removeConsecutiveDuplicates = sentence => {
    const arr=sentence.split(" ");
    const result=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i-1]) {
          result.push(arr[i]);
        }
    }
    return result.join(" ");
}

```

## Strategy

I created words of array from given string. Then, with the help of `for` loop I
eliminated unwanted array elements. Lastly, I combined all array elements
as a string in `return`.

## Implementation

**`split()` method**: Using split method, I created an array of words from
given string. Really useful method.

**empty array**: I created an empty array to push filtered array elements later.

**`for` loop**: To filter array elements I chose to use `for` loop. I could
have used `filter()` also but `arr[-1]` issue which I mentioned above
led me to use for loop. I like this loop also. Very powerful.

**`if` statement**: `if` statement is used to find and eliminate repeating words.

**`push()` method**: Push method is used to send non-repeating words to a new
empty array which created before `for` loop.

**`join()` method**: At the end, in `return`, I used join method to combine
non-repeating words as a string.

## Possible Refactors

- curly brackets of `if` statement can be removed
- ternary operator can be used instead of `if`
- `filter()` method can be used instead of `for` loop

## References

I can recommend some references for array methods which are very useful in problem solving.
[Javascript.info](https://javascript.info/array-methods),
[W3schools](https://www.w3schools.com/js/js_array_methods.asp),
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
