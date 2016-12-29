import { handleActions, Action } from 'redux-actions';
import { AppStore } from '../store';
import { MAX_ROWS, MAX_COLUMNS, MAX_ALIGN_DISCS } from '../constants';
import { cloneDeep } from 'lodash';
import {
  ADD_DISC,
  AddDiscPayload,
  NEW_GAME
} from '../actions/actions';

enum Cell { Empty = 0, Player1 = 1, Player2 = 2 }; // dublicate because of strange compilation error…
const emptyBoard = Array.apply(null, Array(MAX_ROWS)).map(() => Array(MAX_COLUMNS).fill(Cell.Empty));

export const initialState: AppStore.Game = {
  board: emptyBoard,
  currentPlayer: 1
};

export default handleActions<AppStore.Game | AddDiscPayload>({
  [ADD_DISC]: (state: AppStore.Game, action: Action<AddDiscPayload>) => {
    if (action.payload.column >= MAX_COLUMNS - 1) return state;

    let board = cloneDeep(state.board);

    // Add disc on top
    const index = board[action.payload.column].findIndex(cell => cell === Cell.Empty);
    if (index !== -1) {
      board[action.payload.column][index] = state.currentPlayer;
      // Find if have winner
      let winString = Array.apply(null, Array(MAX_ALIGN_DISCS).fill(state.currentPlayer)).join(',');
      // 1. column
      let haveColumnWin = board[action.payload.column].join(',').includes(winString);
      // 2. row
      let haveRowWin = board.map(column => column[index]).join(',').includes(winString);
      // 3. diagonal up
      let haveDiagonalUp = board.map((column, i) => column[index + (i - action.payload.column)]).join(',').includes(winString);
      // 3. diagonal down
      let haveDiagnalDown = board.map((column, i) => column[index - (i - action.payload.column)]).join(',').includes(winString);

      if (haveColumnWin || haveRowWin || haveDiagonalUp || haveDiagnalDown) {
        return { board, currentPlayer: 0, winner: state.currentPlayer };
      }

      return { currentPlayer: state.currentPlayer % 2 + 1, board };
    }

    // Default
    return state;
  },
  [NEW_GAME]: (state: AppStore.Game, action: Action<void>) => {
    return cloneDeep(initialState);
  }
}, initialState);