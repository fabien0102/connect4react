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
            isProjection={isProjection}
            column={columnIndex}
            value={isProjection ? game.currentPlayer : cell}
            onClick={col => dispatch(addDisc({ column: col }))}
            onMouseEnter={col => dispatch(projectNextMove({ column: col }))}
            />
        );
      });
      return (<div className={styles.column} key={columnIndex}>{cells}</div>);
    });

    let playerState = (<p>Current player: {game.currentPlayer}</p>);
    if (isNumber(game.winner) && game.winner !== 0) {
      playerState = (<h3>Player {game.winner} win! <button onClick={() => dispatch(newGame())}>New game</button></h3>);
    } else if (isNumber(game.winner) && game.winner === 0) {
      playerState = (<h3>Draw! <button onClick={() => dispatch(newGame())}>New game</button></h3>);
    }

    return (
      <div className={styles.app}>
        <h1>Connect 4 react</h1>
        {playerState}
        <div className={styles.board} onMouseLeave={() => dispatch(projectNextMove({ column: -1 }))}>{board}</div>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(mapStateToProps)(App);