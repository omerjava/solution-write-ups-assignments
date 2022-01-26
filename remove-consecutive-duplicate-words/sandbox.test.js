'use strict';

const mySolution = s => {
  const arr=s.split(" ");
  const result=[];
  for(let i=0; i<arr.length; i++){
      if(arr[i]!==arr[i-1]) {
        result.push(arr[i]);
      }
  }
  return result.join(" ");
}

// [Imahori's solution](https://www.codewars.com/kata/reviews/5b39e927e7a2c103300018b5/groups/5b3a6472615a90b74d000e04)
// 1=>string is splitted and words array has been made
// 2=>filter() is used to eliminate undesired elements
// 3=>join() is used to combine array elements to get a string return
const solution1 = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

// [AlexLukas' solution](https://www.codewars.com/kata/reviews/5b39e927e7a2c103300018b5/groups/5fbbc1db6d9e8e0001d9a47c)
// 1=>string is splitted and words array has been made
// 2=> reduce() method is used to eliminate array elements when element is same with previous element
// 3=> non-repeating array elements concatenated with space " "
// 4=> string trim() method is used to remove space at the end
// first time I have seen trim() method
const solution2 = s => s.split(" ").reduce((acc, item, i, arr) => {
  item != arr[++i] ? acc += ` ${item}` : " ";
  return acc;
},"").trim();


for (const solution of [mySolution, solution1, solution2]) {
  describe(`${solution.name}: removeConsecutiveDuplicateWords`, () => {
    describe('word groups', () => {
      it('some repeating words', () => {
        expect(solution("alpha alpha beta beta gamma gamma delta alpha beta beta gamma gamma delta"))
        .toEqual("alpha beta gamma delta alpha beta gamma delta");
      });
      it('some repeating words', () => {
        expect(solution("gap gap new red red red yes yes"))
        .toEqual("gap new red yes");
      });
      it('some repeating words', () => {
        expect(solution("blue blue ca car car black car black blck"))
        .toEqual("blue ca car black car black blck");
      });
    });
  });
}
