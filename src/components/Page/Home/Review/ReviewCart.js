import React from 'react';

const ReviewCart = ({re}) => {
    const {name , title , img , c} =re;
    return (
        <div className='px-7 border rounded-md'>

            <p className='py-7'>{title}</p>

            <div className='flex items-center pb-8'>
                <img className='w-20 rounded-full border  border-primary ' src={img} alt="" />
                <div className='ml-5'>
                    <h1 className='font-semibold text-xl'>{name}</h1>
                    <p>{c}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewCart;