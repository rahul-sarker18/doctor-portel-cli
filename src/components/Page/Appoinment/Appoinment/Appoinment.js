import React, { useState } from 'react';
import AbableAppoinment from '../AbableAppoinment/AbableAppoinment';
import AppinmentBaner from '../AppinmentBaner/AppinmentBaner';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppinmentBaner 
            selected={selected}
            setSelected={setSelected}
            />
            <AbableAppoinment selected={selected}
            
            />

        </div>
    );
};

export default Appoinment;