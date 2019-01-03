import * as Actions from './actions';

describe("Aurual Update", ()=>{
    it('Should return the action', () => {
        const test = 'TEST';
        const action = Actions.generateAuralUpdate(test);
        expect(action.type).toEqual(Actions.GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {    
    it('Should return the action', () => {
        const correctAnswer = 10;
        const action = Actions.restartGame(correctAnswer);
        expect(action.type).toEqual(Actions.RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 10;
        const action = Actions.makeGuess(guess);
        expect(action.type).toEqual(Actions.MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});




