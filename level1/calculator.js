const { argv } = require('node:process');

function calculate(nums) {
    let res = 0;
    nums.forEach(item => {
        res += item;
    });
    return res;
}

const input = [];
for (let i = 2; i < argv.length; i++) {
    input.push(Number(argv[i]));
}

console.log(calculate(input));