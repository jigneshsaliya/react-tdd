import React from 'react';
import { shallow } from 'enzyme';
import * as constants from './constants';
import * as actions from './balance';

describe('test for balance actions', ()=> {
    it('create an action to set the balance', () => {
        const balance = 0;
        
        const expectedAction = {type: constants.SET_BALANCE, balance: balance};

        expect(actions.setBalance(balance)).toEqual(expectedAction);
    });

    it('craetes an actions to deposit into the balance', () => {
        const deposit = 10;

        const expectedAction = {type: constants.DEPOSIT, deposit};

        expect(actions.deposit(deposit)).toEqual(expectedAction);
    });

    it('creates an action to withdraw from the balance', () => {
        const withdrawl = 10;
        const expectedAction = {type: constants.WITHDRAW, withdrawl};

        expect(actions.withdraw(withdrawl)).toEqual(expectedAction);
    });
});