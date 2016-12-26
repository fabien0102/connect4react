import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import 'jest';

describe('App', () => {
    it('should have correct text', () => {
        const app = shallow(<App />);

        expect(app.find('h2').text()).toEqual('Hello fafa, how are you? Coucou Johnny');
    });
});