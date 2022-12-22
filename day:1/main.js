import fs from 'fs';
import { pipe, take, from, filter, max, takeLast, toArray } from 'rxjs';

main();

function main() {
    console.log("Day-1")

    // reads file as string

    let fileContent = readFile();

    //console.log(fileContent)
    const input = fileContent.split("\n");
    let result = [];
    let value = 0;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element != "") {
            value += parseInt(element);
        } else {
            result.push(value)
            value = 0;
        }
    }
    result.sort(function (a, b) { return a - b; });
    from(result).pipe(takeLast(3), toArray()).subscribe(final => console.log(final.reduce((a, b) => a + b, 0)));


}
function readFile() {
    const buffer = fs.readFileSync('input.txt');
    const fileContent = buffer.toString();
    return fileContent;
}
