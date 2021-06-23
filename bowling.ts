let partie : number[][] = [[9,0],[9,1],[6,0],[10,0],[8,2],[6,3],[0,10],[4,4],[3,0],[8,2],[4,0]];
                        // [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0]]; // Strike max pts
                        // [[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[0,0]]; // 10 frame of 9
                        // [[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,0]]; // Spare 

let score : number[] = [];
let scoreNumber : number = 0;
let scoreAnnotation : string = '';

/** This function calculate the score of a normal turn.
 * The bowler fails to knock them all down in two tries
 * @param i number of turn
 */

function normal(i : number) {
    score.push(partie[i][0]+partie[i][1]);
    scoreAnnotation  += (partie[i][0]+partie[i][1]).toString() + '- ';
}

/** This function calculate the score of a spare for the i turn.
 * The bowler succeeds to knock them all down in two tries called a spare, score equal 10 + first next roll
 * @param i number of turn
 */

function spare(i : number) { 
    score.push(10 + partie[i+1][0]);
    scoreAnnotation += partie[i][0].toString() + "/ ";
    if (i == 9) {
        scoreAnnotation += partie[i+1][0].toString();
    }
}

/** This function calculate the score of a strike for the i turn.
 * The bowler succeeds to know them all down in one try called a strike, score equal 10 + both next roll
 * @param i number of turn
 */

function strike(i : number) { 
    scoreAnnotation += "X ";
    if (partie[i+1][0] == 10) {
       if (i == 9) {
            score.push(20 + partie[i+1][0] + partie[i+1][1]);
            scoreAnnotation += (partie[i+1][0] + partie[i+1][1]).toString();
        } else {
            score.push(20 + partie[i+2][0]);
        }
    } else {
        score.push(10 + partie[i+1][0] + partie[i+1][1]);
    }
}

/** This function evaluate the score of an entire game of bowling
 * 
 * @returns Result + score of the bowler as a string
 */

function bowling() : string {
    for (let i : number = 0; i < partie.length - 1; i++) {
        if (partie[i][0] + partie[i][1] < 10) { // Trou
            normal(i);
        }

        if ((partie[i][0] + partie[i][1] == 10 && partie[i][0] != 10) ) { // Spare
            spare(i);
        }

        if (partie[i][0] == 10) { // Strike
           strike(i);
        }
        scoreNumber += score[i];
    }
   return `Resultats : ${scoreAnnotation} \nVotre score est de ${scoreNumber}`;
}

console.log(bowling());