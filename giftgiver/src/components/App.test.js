import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App', ()=> {
    const app = shallow(<App />);
    it('Renders correctly', ()=> {
        expect(app).toMatchSnapshot();
    });

    it('initialize the `state` with an empty list of gifts',()=>{
        expect(app.state().gifts).toEqual([]);
    });
    
    describe('when clicking the `add-gift` button', ()=> {
        const id= 1;
        beforeEach(()=>{
            app.find('.btn-add').simulate('click');
        });

        afterEach(()=>{
            app.setState({gifts:[]});
        });

        it('add a new gift to `state`', ()=>{
            expect(app.state().gifts).toEqual([{id}]);
        });
        
        it('add a new gifts to the rendered list',()=>{
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it('cerates a Gift Component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added gift',()=> {
            beforeEach(()=>{
                app.instance().removeGift(id);
            });
            it('removes the gift form the `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
    
})

