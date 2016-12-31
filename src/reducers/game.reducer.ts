import { handleActions, Action } from 'redux-actions';
import { AppStore } from '../store';
import { MAX_ROWS, MAX_COLUMNS, MAX_ALIGN_DISCS } from '../constants';
import { cloneDeep, omit } from 'lodash';
import {
  ADD_DISC,
  AddDiscPayload,
  PROJECT_NEXT_MOVE,
  ProjectNextMovePayload,
  NEW_GAME
} from '../actions/actions';

enum Cell { Empty = 0, Player1 = 1, Player2 = 2 }; // dublicate because of strange compilation error…
const emptyBoard = Array.apply(null, Array(MAX_ROWS)).map(() => Array(MAX_COLUMNS).fill(Cell.Empty));

export const initialState: AppStore.Game = {
  board: emptyBoard,
  currentPlayer: 1,
  score: [0, 0]
};

export default handleActions<AppStore.Game | AddDiscPayload>({
  [ADD_DISC]: (state: AppStore.Game, action: Action<AddDiscPayload>) => {
    if (action.payload.column >= MAX_COLUMNS - 1 || action.payload.column < 0) return state;
    if (state.currentPlayer === 0) return state;

    let board = cloneDeep(state.board);

    // Add disc on top
    const index = board[action.payload.column].findIndex(cell => cell === Cell.Empty);
    if (index !== -1) {
      board[action.payload.column][index] = state.currentPlayer;
      // Find if have winner
      let winString = Array.apply(null, Array(MAX_ALIGN_DISCS).fill(state.currentPlayer)).join(',');
      let haveColumnWin = board[action.payload.column].join(',').includes(winString);
      let haveRowWin = board.map(column => column[index]).join(',').includes(winString);
      let haveDiagonalUp = board.map((column, i) => column[index + (i - action.payload.column)]).join(',').includes(winString);
      let haveDiagnalDown = board.map((column, i) => column[index - (i - action.payload.column)]).join(',').includes(winString);

      if (haveColumnWin || haveRowWin || haveDiagonalUp || haveDiagnalDown) {
        let score = state.score.map((points, i) => (i === state.currentPlayer - 1) ? points + 1 : points);
        return { board, currentPlayer: 0, winner: state.currentPlayer, score };
      }

      // Find draw case
      let noMoreEmptyCell = !board.map(col => col.join(',')).join(',').includes('0');
      if (noMoreEmptyCell) {
        return { score: state.score, board, currentPlayer: 0, winner: 0 };
      }

      return { currentPlayer: state.currentPlayer % 2 + 1, board, score: state.score };
    }

    // Default
    return state;
  },

  [PROJECT_NEXT_MOVE]: (state: AppStore.Game, action: Action<ProjectNextMovePayload>) => {
    if (action.payload.column >= MAX_COLUMNS - 1 || action.payload.column < 0) return omit(state, 'nextCell');

    const row = state.board[action.payload.column].findIndex(cell => cell === Cell.Empty);
    if (row !== -1) {
      return { ...state, nextCell: { column: action.payload.column, row } };
    }

    return omit(state, 'nextCell');
  },

  [NEW_GAME]: (state: AppStore.Game, action: Action<void>) => {
    return {...cloneDeep(initialState), score: state.score};
  }
}, initialState);