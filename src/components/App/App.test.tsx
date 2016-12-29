import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { initialState } from '../../reducers/game.reducer';
import 'jest';

describe('App', () => {
    it('should have correct title', () => {
        const app = shallow(<App game={initialState} dispatch={null} />);

        expect(app.find('h1').text()).toEqual('Connect 4 react');
    });
});