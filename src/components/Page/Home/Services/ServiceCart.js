import React from 'react';

const ServiceCart = ({service}) => {
    const {name , img , title} =service;
    return (
        <div className='w-[440px] h-[310px] shadow shadow-[3px 4px 10px 2px] my-3 px-14 rounded-2xl'>
            <img className='w-[100px] pt-11 pb-8  mx-auto' src={img} alt="" />
            <h1 className='pb-3 font-normal text-[20px]'>{name}</h1>
            <p className='pb-8'>{title}</p>
        </div>
    );
};

export default ServiceCart;