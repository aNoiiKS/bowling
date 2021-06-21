/**
 * génère un entier aléatoirement entre 0 et max
 * 
 * @param max maximum
 * @returns un entier 
 */

function randInt(max?:number):number {
    return Math.floor(Math.random()*max);
}

/**
 * simule une partie de bowling en 10 frames
 * 
 * @returns le score de la partie de bowling
 */
function bowling():string {
    let score : number[] = [];
    const nbQuilles : number = 10; // nbquilles + 1 

    let spare : boolean = false; // 1er lancer après spare
    let strike : boolean = false; // 1er lancer après strike
    let strike2 : boolean = false; // 2nd lancer après strike
    let scoreStrike : number = nbQuilles;


    for (let i : number = 1; i < 11; i++) { // 10 tours d'affilé
        let score1 : number = randInt(nbQuilles+1);
        let score2 : number; 
        let score3 : number;

        if (spare) { // spare
            score.push(nbQuilles+score1); // ancien tour + 1 essai
            spare = false;
        }

        if (strike) {
            scoreStrike += score1;
            if (strike2 || typeof score2 != "undefined" || scoreStrike == 30) {
                score.push(scoreStrike);
                strike = false;
                strike2 = false;
                scoreStrike = nbQuilles;
            }
        }

        if (score1 != nbQuilles) {  // 1er essai pas de strike

            let nbQuilles2 = nbQuilles - score1;
            let score2 : number = randInt(nbQuilles2+1);

            if (strike) {
                scoreStrike += score2;
                score.push(scoreStrike);
                strike = false;
                strike2 = false;
                scoreStrike = nbQuilles;
            }
            if (score2 != nbQuilles2) { // 2nd essai pas de spare
                score.push(score1+score2); // 1 essai + 2 essai
            } else { // spare
                spare = true;
                if (i = 10) { // 10eme frame
                    let score3 : number = randInt(nbQuilles);
                    score.push(score1+score2+score3);
                }
            }

        } else { // strike
            if (strike) {
                strike2 = true;
            }
            strike = true;
            if (i = 10) {
                let score2 : number = randInt(nbQuilles);
                if (score2 != nbQuilles) {
                    score3 = randInt(nbQuilles-score2);
                } else {
                    score3 = randInt(nbQuilles);
                }
                score.push(nbQuilles+score2+score3);
            }
        }

    }
    let scoreTotal : number = 0;
    for (let j = 0; j < 11; j++) {
        scoreTotal += score[0];
    }

    return `Le score est de ${score}`;
}

console.log(bowling());