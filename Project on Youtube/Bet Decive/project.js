// function deposit (){
//     return 1;
// }

// const x = deposit();

const prompt = require("prompt-sync")();


const ROWS = 3;
const COlS = 3;

const SYMBILS_COUNT = {
    a: 2,
    b: 4,
    c: 6,
    d: 8
}

const SYMBILS_VALUES = {
    a: 5,
    b: 4,
    c: 3,
    d: 2
}



const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmuont = parseFloat(depositAmount);

        if (isNaN(numberDepositAmuont) || numberDepositAmuont <= 0) {
            console.log("invalid deposit amount , try again !"); // invalid deposit : số tiền không hợp lệ.
        } else {
            return numberDepositAmuont;
        }

    }

};


const getNUmberOfLines = () => {
    while (true) {
        const lines = prompt("Enter teh number of lines to bet on(1-3): ") // nhao vao so dòng muon dat cuoc
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid deposit amount , try again ! ");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet: ")
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again ! ");
        } else {
            return numberBet;
        }
    }
};


const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBILS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COlS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols]; // reel: cuộc ; Symbols :ký tự ; reelSymbols: cuộc ký tự ; 
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};


const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COlS; j++) {
            rows[i].push(reels[j][i]);
        }

    }

    return rows;
};


const printRows = (rows) => {
    for (const row of rows) {
        let rowString = " ";
        for (const [i, symbol] of row.entries()) {
            rowString = rowString + symbol;
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * SYMBILS_VALUES[symbols[0]];
        }

    }

    return winnings;
};


const game = () => {
    let balance = deposit(); // balance : tiền còn lại // winnings : số tiền đã thắng ; bet : tiền đặt cược ;

    while (true) {
        console.log("You have balance of $ " + balance);
        const numberOfLines = getNUmberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines; // Ví dụ, nếu balance ban đầu là 1000
        //, bet là 5, và numberOfLines là 10, thì sau đoạn mã trên, balance sẽ giảm xuống 950 (1000 - 5 * 10).
        const reels = spin(); // reel: cuộc phim ; symbel : ký tự 
        const rows = transpose(reels); // transpose : chuyển đổi 
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won , $" + winnings.toString());

        if (balance <= 0) {
            console.log("you ran out of money!");
            break;
        }
        const playAgain = prompt("Do you want play again! (y/n)");
        if (playAgain != "y") break;
    }
}


game();

