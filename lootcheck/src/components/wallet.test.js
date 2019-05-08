import React from 'react';
import {  shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet',()=> {
    const mockDeposit = jest.fn();
    const mockWithDraw = jest.fn();
    const props = {balance : 20, deposit: mockDeposit, withdraw : mockWithDraw};
    const wallet = shallow(<Wallet {...props}></Wallet>);
    it('renders wallet component',()=> {
        expect(wallet).toMatchSnapshot();
    }); 

    it('displays balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    it('cerates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types in to the wallet input',()=>{
        const userBalance = '25';
        beforeEach(()=> {
            wallet.find('.input-wallet')
            .simulate('change', {target : {value: userBalance}});
        }); 

        it('updates the local wallet balance in `state` it to a number ', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance,10));
        });

        describe('and the user wants to make a deposit', ()=> {
            beforeEach(()=> {
                wallet.find('.btn-deposit').simulate('click');
            });
            it('dispaces the `deposit()` it receives from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance,10));
            });
        });
    });

    describe('when the user wants to make a withdrawl', ()=> {
        const userBalance = '25';
        beforeEach(()=> {
            wallet.find('.btn-withdraw').simulate('click');
        });

        it('dispatches the `withdraw()` it receives from props with the local balance', () => {
            expect(mockWithDraw).toHaveBeenCalledWith(parseInt(userBalance,10));
        });
    });
});