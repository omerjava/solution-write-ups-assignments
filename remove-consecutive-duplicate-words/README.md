# [Remove Consecutive Duplicate Words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript)

This function removes all consecutively repeating words in a given string. For example, if parameter is `Hello, my name is is John. His name is Jack.`, it will return `Hello, my name is John. His name is Jack.` The function will remove the consecutively repeating `is` but not the word of `name` which repeats 2 times. Because, `name` didn't repeat consecutively.

The function could be useful for any kind of application to check writing typos. 

## Syntax

> removeConsecutiveDuplicates(`string`) -> `string`

### Parameters

**sentence**: `string`

- A group of words will be given as a string.

### Return Value: `string`

- After removing consecutively repeating words, the function will return remaining words as a string without changing orders of words.

## Test Cases

- Codewars test:
  
```js
describe('Example tests', () => {
  it('should handle example case', () => {
    Test.assertEquals(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');
  });
});
```

- My tests:
  
```js
    describe('Example tests', () => {
      it('it should handle repeating words-test1', () => {
        expect(solution("alpha alpha beta beta gamma gamma delta alpha beta beta gamma gamma delta"))
        .toEqual("alpha beta gamma delta alpha beta gamma delta");
      });
      it('it should handle repeating words-test2', () => {
        expect(solution("gap gap new red red red yes yes"))
        .toEqual("gap new red yes");
      });
      it('it should handle repeating words-test3', () => {
        expect(solution("Hello, my name is is John. His name is Jack."))
        .toEqual("Hello, my name is John. His name is Jack.");
      });
    }); 
```

## Use Cases

The function can be useful for revising writing mistakes of user input in web or software applications. Though,
its capacity to correct such mistakes is limited, since the code itself has limited behavior.

In collecting user data, inquiries, demands:

```js
const userInput = prompt('Enter your question please?');
const isAnyTypo = solution(userInput);
if(isAnyTypo!==userInput){ 
    confirm(`Did you mean "${isAnyTypo}"`);
}
else{
    const message = "Thanks! We received your message and will return you as soon as possible.";
    alert(message);
}
```

For text or essay revision:

```js
const userEssay = prompt('Enter your essay here..');
const revisedEssay = solution(userEssay);
alert(revisedEssay);
```

## Retrospective

When you check `if(arr[0]!==arr[-1])`, it results true. It means that `arr[0]!==undefined` is true. It is good to remember :)

### Continue Doing

Continue solving code challenges. It is much more useful than restudying theory again an again.
Keep going on checking and studying other solutions. Really helpful to enhance knowledge and vision.

### Start Doing

Get used to terminal using.

### Stop Doing

Being pessimistic. 
