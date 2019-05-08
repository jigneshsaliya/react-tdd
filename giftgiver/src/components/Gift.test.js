import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

describe('Gift',()=>{
    const id = 1;
    const mockRemove = jest.fn();
    const props = {gift: {id}, removeGift : mockRemove};
    
    const gift = shallow(<Gift {...props} />);
    it('It should render Gift componeent', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and presnt in `state`',()=>{
        expect(gift.state()).toEqual({person:'', present:''});
    });

    describe('when typing in to the person input',()=>{

        const person = 'Uncle';
        beforeEach(()=> {
            gift.find('.input-person').simulate('change', {target : {value:person}});
        });

        it('update the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

     describe('when user typing into the present input',()=>{
        const present = 'Golf club';
        beforeEach(()=>{
            gift.find('.input-present').simulate('change',{target : {value:present}});
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
     });

     describe('when clicking the `Remove Gift` button', ()=> {
        beforeEach(()=> {
            gift.find('.btn-remove').simulate('click');
        });
        
        it('call the removeGift callback', ()=> {
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
     });
});