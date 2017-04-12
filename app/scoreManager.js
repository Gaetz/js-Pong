/**
 * Manage game score
 */
export default class ScoreManager {

    constructor() {
        this.playerScore = 0;
        this.opponentScore = 0;
    }

    /**
     * Player gains a point
     */
    playerMarks() {
        this.playerScore++;
    }

    /**
     * Opponent gains a point
     */
    opponentMarks() {
        this.opponentScore++;
    }

}