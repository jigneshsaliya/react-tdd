import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', ()=> {
    const app = shallow(<App/>);
    it('it should render App component',()=> {
        expect(app).toMatchSnapshot();
    });

    it('contains  a wallet comonent', () => {

        expect(app.find('ConnectFunction').exists()).toBe(true);
    });

    it('contains a connected Loot component',()=> {
        expect(app.find('ConnectFunction').exists()).toBe(true);
    });

    it('contains the link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    });
});