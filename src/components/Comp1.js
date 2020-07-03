import React from 'react';

const Comp1 = (props) => {
    const clssSec = `sec sec_1 ${props.anmclss}`;
    const clssDis = `dis dis_1`;
    const clssHd = `header header_1`; 
    return (
        <div className={clssSec}>
          <div className={clssDis}><div className={clssHd}><h1>NEW FEATURE</h1></div>
        </div>
    </div>
    );
};

export default Comp1;