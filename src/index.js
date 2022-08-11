const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BIN_TABLE = {
    '10': '.',
    '11': '-',
}

function decode(expr) {
    let string = expr;
    let pass = '';
    let pars = '';
    let convert = '';
    let word = '';
    for(let i = 0; i < (expr.length/10); i++){
        pars = string.slice(0, 10);
        if(pars[4] === '*'){
            pass = pass + (word + ' ');
            convert = '';
            word = '';
        }else{
        for (let j = 9; j > 0; j=j-2){
            if(pars[j-1] != 0){
            convert = (BIN_TABLE[pars[j-1] + pars[j]]) + convert;
            }
        }
        word = word + MORSE_TABLE[convert];
        convert = '';
        }
        string = string.slice(10)
    }
return(pass + word);
}

module.exports = {
    decode
}