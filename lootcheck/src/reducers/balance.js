import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALACE_COOKIE = 'BALANCE_COOKIE'; 


const balance = (state = 0, action) => {
    let balance;
    switch(action.type) {
        case constants.SET_BALANCE: 
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdrawl;
            break;
        default:
            balance = parseInt(read_cookie(BALACE_COOKIE),10) || state;
    }
    bake_cookie(BALACE_COOKIE,balance);
    return balance;
};

export default balance;