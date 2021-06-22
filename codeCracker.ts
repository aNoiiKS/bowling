let text : string = 'le hive bar meilleur bar gaming de france';

function getIndexOfAbc(char : string) : number {
    let abc : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
    let k : number = 0;
    while (char != abc[k]) {
        k++;
    }
    return k;
}

function codeCracker():string {
    let textSplitted : string[] = text.split('');
    let textCrypted : string = '';
    let key : string[] = ['!', ')', '"', '(', '£', '*', '%', '&', '>', '<', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', ' '];
    for (let i : number = 0; i < textSplitted.length; i++) {
        textCrypted += key[getIndexOfAbc(textSplitted[i])];
    } 
    return textCrypted
}

console.log(codeCracker());