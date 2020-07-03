import React from 'react';


const Comp3 = (props) => {
    const clssSec = `sec sec_3 ${props.anmclss}`;
    const clssDis = `dis dis_3`;
    const clssHd = `header header_3`;
    return (
        <div className={clssSec}>
            <div className={clssDis}>
                <div className={clssHd}>
                    <h1>FLEXIBLE PACKAGE</h1>
                </div>
            </div>
        </div>
    )
};

export default Comp3;