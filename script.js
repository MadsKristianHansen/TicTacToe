let fields = [];
let currentShape = 'cross';
let gameover = false;

function fillShape(id) {
    if (!fields[id] && !gameover) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }

        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;


    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_row0').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line_row3').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line_row6').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_column0').style.transform = 'scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line_column1').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_column2').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line_diagonal0').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line_diagonal2').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (winner) {
        console.log('GEWONNEN:', winner);
        gameover = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000);

    }
}

function restart() {
    gameover = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    document.getElementById('line_row0').style.transform = 'scaleX(0)';
    document.getElementById('line_row3').style.transform = 'scaleX(0)';
    document.getElementById('line_row6').style.transform = 'scaleX(0)';
    document.getElementById('line_column0').style.transform = 'scaleX(0)';
    document.getElementById('line_column1').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line_column2').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line_diagonal0').style.transform = 'rotate(45deg) scaleX(0)';
    document.getElementById('line_diagonal2').style.transform = 'rotate(-45deg) scaleX(0)';

    for (i=0; i<9; i++) {
        document.getElementById('circle-' + i ).classList.add('d-none');
        document.getElementById('cross-' + i ).classList.add('d-none');
    }
    
}