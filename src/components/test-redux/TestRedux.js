import React, { useState } from 'react';
import { buyMore } from '../../redux/action/buy-more';
import { buySome } from '../../redux/action/buy-some';
import { useDispatch, useSelector } from 'react-redux';

const TestRedux = () => {

    const [number, setNumber] = useState(1);


    const dispatch = useDispatch();
    const prod1 = useSelector(state => state.some.numOfProd);
    const prod2 = useSelector(state => state.more.numOfMore);


    const handleClick = () => {
        dispatch(buySome());
    }
    const handleClickmore = () => {
        dispatch(buyMore());
    }

    const handlePayloadClickmore = (number) => {
        dispatch(buyMore(number));
    }

    return (
        <div className='text-center'>
            <p> Number of prod: {prod1}</p>
            <button onClick={handleClick}>buy prod</button>
            <p> Number of prod2: {prod2}</p>
            <button onClick={handleClickmore}>buy prod</button>
            <div className='mt-5'>
                <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
                <button onClick={() => handlePayloadClickmore(number)}>buy { number} prod</button>
            </div>
        </div>
    );
};

export default TestRedux;