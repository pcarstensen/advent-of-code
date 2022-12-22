import fs, { stat } from 'fs';
import { pipe, take, from, filter, max, takeLast, toArray } from 'rxjs';

main();

function main() {
    console.log("Day-4");
    let fileContent = readFile();
    let input = fileContent.split("\n");
    let result = 0;

    input.forEach(group => {
        group = group.split(",");

        const one = convert(group[0]);
        const two = convert(group[1]);

        let count = compare(one, two);
        if (count != 1) {
            result += compare(two, one);
        }
        result += count;


    });
    console.log(result)
}
function compare(one, two) {
    if (two.length > 1) {
        if (one.includes(two.at(0)) || one.includes(two.at(-1))) {
            // overlap
            return 1;
        }
        return 0;
    } else {
        if (one.includes(two.at(0))) {
            // overlap
            return 1;
        }
        return 0;
    }
}
// function compare(one, two) {
//     if (two.length > 1) {
//         if (one.includes(two.at(0)) && one.includes(two.at(-1))) {
//             // overlap
//             return 1;
//         }
//         return 0;
//     } else {
//         if (one.includes(two.at(0))) {
//             // overlap
//             return 1;
//         }
//         return 0;
//     }
// }

function convert(input) {
    let nums = input.split("-");
    const START = parseInt(nums[0]);
    const END = parseInt(nums[1]);
    const arr = [...Array(END + 1).keys()].slice(START);
    return arr;
}

function readFile() {
    const buffer = fs.readFileSync('input.txt');
    const fileContent = buffer.toString();
    return fileContent;
}