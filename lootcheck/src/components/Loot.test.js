import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot',()=> {
    
    let props = {balance: 10, bitcoin :{},fetchBitcoin:{}};
    let loot = shallow(<Loot {...props}/>);
    it('renders peroperly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', ()=> {
        const mockFetchbitcoin = jest.fn();
        beforeEach(()=> {
            props.fetchBitcoin = mockFetchbitcoin;
            loot = mount(<Loot {...props}></Loot>)
        });

        it('dispatches the `fetchBitcoin()` method it receives it from props',()=> {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });

    });

    describe('wehn ther are valid bitcoin props',()=>{
        beforeEach(()=> {
            props = {balance: 10, bitcoin : {bpi: {USD: {rate: '1,000'}}}};
            loot = shallow(<Loot {...props}></Loot>)
        
        });

        it('displays proper bitcoin value',()=> {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
        });
    });
});