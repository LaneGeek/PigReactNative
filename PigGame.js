export default class PigGame {
    constructor(player1Score, player2Score, turnPoints, currentPlayer) {
        this.player1Score = player1Score;
        this.player2Score = player2Score;
        this.turnPoints = turnPoints;
        this.currentPlayer = currentPlayer;
    }

    WINNING_SCORE = 20;

    show() {
        console.log(this.WINNING_SCORE);
    }

    rollDie() {
        const roll = Math.floor(Math.random() * 6) + 1;
        if (roll !== 1) {
            this.turnPoints += roll;
        } else {
            this.turnPoints = 0;
            this.changeTurn();
        }
        return roll;
    }

    changeTurn() {
        if (this.currentPlayer === 1) {
            this.player1Score += this.turnPoints;
            this.currentPlayer = 2
        } else {
            this.player2Score += this.turnPoints;
            this.currentPlayer = 1
        }
        this.turnPoints = 0
    }

    checkForWinner() {
        // returns the player number or 0 for a tie and -1 if no winner or tie
        if (this.player1Score >= this.WINNING_SCORE || this.player2Score >= this.WINNING_SCORE) {
            if (this.player2Score > this.player1Score)
                return 2;
            if (this.player1Score > this.player2Score && this.currentPlayer === 1)
                return 1;
            if (this.player1Score === this.player2Score)
                return 0;
        }
        return -1;
    }
}
