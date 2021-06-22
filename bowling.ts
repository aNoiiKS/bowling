let partie : number[][] = [[9,0],[9,1],[6,0],[10,0],[8,2],[6,3],[0,10],[4,4],[3,0],[8,2],[4,0]];
                        // [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0]]; // Strike max pts
                        // [[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[0,0]]; // 10 frame of 9
                        // [[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,0]]; // Spare 


function bowling() : string {
    let score : number[] = [];
    let scoreNumber : number = 0;
    let scoreAnnotation : string = '';
    for (let i : number = 0; i < partie.length - 1; i++) {
    

        if (partie[i][0] + partie[i][1] < 10) { // Trou
            let temp : number = partie[i][0]+partie[i][1];
            score.push(temp);
            scoreAnnotation  += temp.toString() + '- ';
        }

        if ((partie[i][0] + partie[i][1] == 10 && partie[i][0] != 10) ) { // Spare
            score.push(10 + partie[i+1][0]);
            scoreAnnotation += partie[i][0].toString() + "/ ";
            if (i == 9) {
                scoreAnnotation += partie[i+1][0].toString();
            }
        }

        if (partie[i][0] == 10) { // Strike
            let temp2: number = partie[i+1][0] + partie[i+1][1];
            scoreAnnotation += "X ";
            if (partie[i+1][0] == 10) {
                if (i == 9) {
                    score.push(20 + temp2);
                    scoreAnnotation += temp2.toString();
                } else {
                    score.push(20 + partie[i+2][0]);
                }
            } else {
                score.push(10 + temp2);
            }
        }
        scoreNumber += score[i];
    }
   return `Resultats : ${scoreAnnotation} \nVotre score est de ${scoreNumber}`;
}

console.log(bowling());