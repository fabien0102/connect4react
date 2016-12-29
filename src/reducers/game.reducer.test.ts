import gameReducer, { initialState } from './game.reducer';
import * as actions from '../actions/actions';

describe('Game reducer', () => {
  describe('initial state', () => {
    it('should have correct board on init', () => {
      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };
      expect(initialState).toEqual(expected);
    });
  });

  describe('add disc', () => {


    it('should add player disc on first column', () => {
      const expected = {
        board: [
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      expect(gameReducer(undefined, actions.addDisc({ column: 0 }))).toEqual(expected);
    });

    it('should add player disc on second column', () => {
      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      expect(gameReducer(undefined, actions.addDisc({ column: 1 }))).toEqual(expected);
    });

    it('should do nothing if column is overboard', () => {
      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };

      expect(gameReducer(undefined, actions.addDisc({ column: 6 }))).toEqual(expected);
    });

    it('should add player 2 a disc on second column', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };

      expect(gameReducer(state, actions.addDisc({ column: 1 }))).toEqual(expected);
    });

    it('should add player 1 a disc on third column', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      expect(gameReducer(state, actions.addDisc({ column: 2 }))).toEqual(expected);
    });

    it('should trigger win with a fulfill column', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 0,
        winner: 1
      };

      expect(gameReducer(state, actions.addDisc({ column: 4 }))).toEqual(expected);
    });

    it('should trigger win with a fulfill row', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 0,
        winner: 1
      };

      expect(gameReducer(state, actions.addDisc({ column: 3 }))).toEqual(expected);
    });

    it('should trigger win with a fulfill diagonal up', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [1, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 0, 0, 0, 0, 0],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 1, 0, 0, 0, 0],
          [1, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 0,
        winner: 1
      };

      expect(gameReducer(state, actions.addDisc({ column: 3 }))).toEqual(expected);
    });

    it('should trigger win with a fulfill diagonal down', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 0, 0, 0],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 0, 0, 0],
          [2, 1, 2, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 0,
        winner: 2
      };

      expect(gameReducer(state, actions.addDisc({ column: 2 }))).toEqual(expected);
    });

    it('should trigger draw if no more cell', () => {
      const state = {
        currentPlayer: 1,
        board: [
          [1, 1, 2, 1, 1, 2, 2],
          [1, 2, 2, 2, 1, 1, 1],
          [2, 1, 1, 2, 2, 1, 2],
          [1, 1, 2, 1, 1, 1, 2],
          [2, 1, 2, 2, 1, 2, 0],
          [2, 2, 1, 1, 2, 2, 2]
        ]
      };

      const expected = {
        currentPlayer: 0,
        winner: 0,
        board: [
          [1, 1, 2, 1, 1, 2, 2],
          [1, 2, 2, 2, 1, 1, 1],
          [2, 1, 1, 2, 2, 1, 2],
          [1, 1, 2, 1, 1, 1, 2],
          [2, 1, 2, 2, 1, 2, 1],
          [2, 2, 1, 1, 2, 2, 2]
        ]
      };

      expect(gameReducer(state, actions.addDisc({ column: 4 }))).toEqual(expected);
    });
  });

  describe('project next move', () => {
    it('should set nextCell if find', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 0, 0, 0],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 0, 0, 0],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        nextCell: { column: 3, row: 2 },
        currentPlayer: 2
      };

      expect(gameReducer(state, actions.projectNextMove({ column: 3 }))).toEqual(expected);
    });

    it('should do nothing if no next cell in column', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 1, 1, 1],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 1, 1, 1],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      expect(gameReducer(state, actions.projectNextMove({ column: 1 }))).toEqual(expected);
    });

    it('should remove nextCell data if no next cell in column', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 1, 1, 1],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2,
        nextCell: {column: 1, row: 1}
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 1, 1, 1],
          [2, 1, 0, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 2
      };

      expect(gameReducer(state, actions.projectNextMove({ column: 1 }))).toEqual(expected);
    });
  });

  describe('new game', () => {
    it('should reset board', () => {
      const state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 2, 1, 2, 0, 0, 0],
          [2, 1, 2, 0, 0, 0, 0],
          [2, 2, 0, 0, 0, 0, 0],
          [2, 1, 2, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 0,
        winner: 2
      };

      const expected = {
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1,
      };

      expect(gameReducer(state, actions.newGame())).toEqual(expected);
    });
  });
});