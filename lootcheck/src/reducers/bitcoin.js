import { FETCH_BITCOIN } from '../actions/constants';

const bitcoin = (state= {}, actions)=>{
    switch(actions.type){
        case FETCH_BITCOIN:
            return actions.bitcoin;
        default:
            return state;
    }
};

export default bitcoin;