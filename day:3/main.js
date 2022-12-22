import fs, { stat } from 'fs';
import { pipe, take, from, filter, max, takeLast, toArray } from 'rxjs';

main();

function main() {
    console.log("Day-3")

    const alpha = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    // reads file as string
    let fileContent = readFile();
    let input = fileContent.split("\n");

    const alphabet = alpha.map(e => e.toLowerCase()).concat(alpha);

    let result = 0;

    // iterate over 3 lines
    for (let i = 0; i < input.length; i += 3) {
        const elf1 = [...input[i]];
        const elf2 = [...input[i + 1]];
        const elf3 = [...input[i + 2]];


        for (let j = 0; j < elf1.length; j++) {
            const item = elf1[j];
            if (elf2.includes(item) && elf3.includes(item)) {
                let index = alphabet.findIndex(a => a == item) + 1;
                result += index;
                j = elf1.length;
            }
        }
    }

    // input.forEach(x => {
    //     let first = x.substring(0, x.length / 2);
    //     let second = x.substring(x.length / 2, x.length);

    //     first = [...first];
    //     second = [...second];



    //     for (let i = 0; i < first.length; i++) {
    //         const e = first[i];
    //         if (second.includes(e)) {
    //             console.log(e)
    //             let index = alphabet.findIndex(a => a == e) + 1;
    //             result = result + index;
    //             i = first.length
    //         }
    //     }

    // });



    console.log(result);


}


function readFile() {
    const buffer = fs.readFileSync('input.txt');
    const fileContent = buffer.toString();
    return fileContent;
}
