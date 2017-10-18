import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from 'redux-actions';
import * as ReactDOM from 'react-dom';
import * as styles from './App.scss';
import Cell from '../Cell/Cell';
import { addDisc, newGame, projectNextMove } from '../../actions/actions';
import { AppStore } from '../../store';
import { isNumber, get } from 'lodash';

interface AppProps {
  game: AppStore.Game;
  dispatch: Dispatch<any>;
}

export class App extends React.Component<AppProps, void> {
  render() {
    const { game, dispatch } = this.props;

    const board = game.board.map((column, columnIndex) => {
      const cells = column.map((cell, rowIndex) => {
        const isProjection = (columnIndex === get(game, 'nextCell.column') && rowIndex === get(game, 'nextCell.row'));
        return (
          <Cell
            key={`${columnIndex}-${rowIndex}`}
            className={`cell-${columnIndex}-${rowIndex}`}
            isProjection={isProjection}
            column={columnIndex}
            value={isProjection ? game.currentPlayer : cell}
            onClick={col => dispatch(addDisc({ column: col }))}
            onMouseEnter={col => dispatch(projectNextMove({ column: col }))}
            />
        );
      });
      return (<div className={`${styles.column} column-${columnIndex}`} key={columnIndex}>{cells}</div>);
    });

    let playerState = (<div className={styles.score}>
      <i className={styles.red + ' ' + (game.currentPlayer === 1 ? styles.current : '')}>●</i>
      {game.score[0]} - {game.score[1]}
      <i className={styles.yellow + ' ' + (game.currentPlayer === 2 ? styles.current : '')}>●</i>
    </div>);

    // End modal construction
    let modalContent;
    if (game.winner === 0) {
      modalContent = (<h2>Draw!</h2>);
    } else if (isNumber(game.winner)) {
      modalContent = (<h2> {game.winner === 1 ? 'Red' : 'Yellow'} player wins!</h2>);
    }
    let endModal = (
      <div className={styles.endModal}>
        {modalContent}
        <button onClick={() => dispatch(newGame())}>New game</button>
      </div>
    );

    let overlay = (<div className={`${styles.overlay} overlay`}></div>);

    return (
      <div className={styles.app}>
        <h1>Connect 4 react</h1>
        {playerState}
        <div className={styles.board} onMouseLeave={() => dispatch(projectNextMove({ column: -1 }))}>{board}</div>
        {isNumber(game.winner) ? endModal : ''}
        {isNumber(game.winner) ? overlay : ''}
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(mapStateToProps)(App);