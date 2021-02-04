'use strict';

// process は nodeを実行したときに最初から生成される
const number = process.argv[2] || 0; // 選択的代入
let sum = 0; //初期値

for (let i = 1; i <= number ; i++){
    sum += i;
}

console.log(sum);

