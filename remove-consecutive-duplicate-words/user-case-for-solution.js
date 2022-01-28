
'use strict';
const solution = sentence => {
    const arr=sentence.split(" ");
    const result=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i-1]) result.push(arr[i]);
    }
    return result.join(" ");
}

const userInput = prompt('Enter your question please?');
const isAnyTypo = solution(userInput);
if(isAnyTypo!==userInput){ 
    confirm(`Did you mean "${isAnyTypo}"`);
}
else{
    const message = "Thanks! We received your message and will return you as soon as possible.";
    alert(message);
}

const userEssay = prompt('Enter your essay here..');
const revisedEssay = solution(userEssay);
alert(revisedEssay);



