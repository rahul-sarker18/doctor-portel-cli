import React, { useEffect, useState } from 'react';
import AppinmentModal from '../AppinmentModal/AppinmentModal';
import AppoinmentOption from './AppoinmentOption';

const AbableAppoinment = ({selected}) => {
    const [appinmentoption , setAppinmentoption] = useState([]);
    const [mosdelvalue , setmosdelvalue] = useState(null)
    useEffect(()=>{
        fetch('application.json')
        .then(res => res.json())
        .then(data => setAppinmentoption(data))
    },[])
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {appinmentoption.map(option => <AppoinmentOption 
            key={option._id}
            option = {option}
            setmosdelvalue={setmosdelvalue}
            ></AppoinmentOption>)}

        </div>

       {mosdelvalue && <AppinmentModal selected={selected} setmosdelvalue={setmosdelvalue} mosdelvalue={mosdelvalue}/>}
        </div>
    );
};

export default AbableAppoinment;