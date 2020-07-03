import React from 'react';


const Comp2 = (props) => {
    const clssSec = `sec sec_2 ${props.anmclss}`;
    const clssDis = `dis dis_2`;
    const clssHd = `header header_2`; 
    return (
        <div className={clssSec}>
            <div className={clssDis}>
                <div className={clssHd}>
                    <h1>MULTI MEDIA</h1>
                </div>
            </div>
        </div>
    )
};

export default Comp2;