import fs, { stat } from 'fs';
import { pipe, take, from, filter, max, takeLast, toArray } from 'rxjs';

main();

function main() {
    console.log("Day-2")

    // reads file as string
    let fileContent = readFile();
    const input = fileContent.split("\n");



    // endresult
    let result = 0;
    input.forEach(e => {
        const temp = e.split(" ");
        result += play2(temp[0], temp[1])
    });
    console.log(result)


    // 2 star


}
function win(opponent) {
    switch (opponent) {
        case "A": return "B";
        case "B": return "C";
        case "C": return "A";
    }
}
function lose(opponent) {
    switch (opponent) {
        case "A": return "C";
        case "B": return "A";
        case "C": return "B";
    }
}

function play2(opponent, me) {
    me = convert(me);

    if (me == "A") {
        // lose
        return play(opponent, lose(opponent))
    } else if (me == "B") {
        // draw
        return play(opponent, opponent)
    } else if (me == "C") {
        // win
        return play(opponent, win(opponent))
    }
}


function play(opponent, me) {
    me = convert(me);
    const signScore = getSignScore(me)

    if (opponent == me) {
        return signScore + 3;
    } else if (me == "A") {
        // if Rock
        if (opponent == "B") {
            // opponent won 
            return signScore;
        } else {
            // me won
            return signScore + 6;
        }
    } else if (me == "B") {
        // if paper
        if (opponent == "C") {
            // opponent won
            return signScore;
        } else {
            return signScore + 6;
        }
    } else if (me == "C") {
        // if Scissors
        if (opponent == "A") {
            // opponent won 
            return signScore;
        } else {
            return signScore + 6;
        }
    }
}
function getSignScore(sign) {
    switch (sign) {
        case "A":
            return 1;
        case "B":
            return 2;
        case "C":
            return 3;
    }
}

function convert(text) {
    switch (text) {
        case "X":
            return "A";
        case "Y":
            return "B";
        case "Z":
            return "C";
        default: return text;
    }
}


function readFile() {
    const buffer = fs.readFileSync('input.txt');
    const fileContent = buffer.toString();
    return fileContent;
}
