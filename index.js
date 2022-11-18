let alphabet = [];

for (let i = 0; i < 12; i++) {
    alphabet.push('E');
};

for (let i = 0; i < 9; i++) {
    alphabet.push('T');
};

for (let i = 0; i < 8; i++) {
    alphabet.push('A');
    alphabet.push('I');
    alphabet.push('N');
    alphabet.push('O');
    alphabet.push('S');
};

for (let i = 0; i < 6; i++) {
    alphabet.push('H');
    alphabet.push('R');
};

for (let i = 0; i < 4; i++) {
    alphabet.push('D');
    alphabet.push('L');
};

for (let i = 0; i < 3; i++) {
    alphabet.push('U');
    alphabet.push('C');
    alphabet.push('M');
    alphabet.push('F');
};

for (let i = 0; i < 2; i++) {
    alphabet.push('W');
    alphabet.push('Y');
    alphabet.push('G');
    alphabet.push('P');
    alphabet.push('B');
};

alphabet.push('V');
alphabet.push('K');
alphabet.push('Q');
alphabet.push('J');
alphabet.push('X');
alphabet.push('Z');

const gameCells = document.querySelectorAll('.game-cell');

document.querySelector('#start').addEventListener('click', () => {
    gameCells.forEach(item => {
        const i = Math.floor(Math.random() * 109);
        item.textContent = alphabet[i];
    });
    countdown ();
})

// document.querySelector('#stop').addEventListener('click', () => {
//     clearInterval(toCount);
//     document.querySelector('#counter').textContent = '180';
//     document.querySelector('#counter').removeAttribute('style');
// })

function countdown () {    
    
    let s = 180;
    const toCount = setInterval(() => {
        if (s === 180) {
            document.querySelector('#stop').addEventListener('click', () => {
                clearInterval(toCount);
                document.querySelector('#counter').textContent = '180';
                document.querySelector('#counter').removeAttribute('style');
            })
        }
        if (s === 0) {
            document.querySelector('#counter').removeAttribute('style');
            document.querySelector('#counter').textContent = 'Time is up! Stop Game!';            
            clearInterval(toCount);            
        } else {            
            document.querySelector('#counter').textContent = s;
            s = s - 1;            
        }
        if (s === 119) {
            document.querySelector('#counter').setAttribute('style', 'color: darkgoldenrod')
        }
        if (s === 59) {
            document.querySelector('#counter').setAttribute('style', 'color: red')
        }
    }, 1000);    
}


