import React from "react";
import doctor from '../../../../assets/images/doctor-removebg-preview.png'
import backimg from '../../../../assets/images/appointment.png'

const MackApporment = () => {
  return (
    <section className="mt-[272px]" style={{background:`url(${backimg})`}}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden -mt-36 lg:block border-none h-[666px] w-[617px] -mb-[50px] md:block  rounded-lg shadow-2xl"
            alt=""
          />
          <div className="text-white pr-24 py-28 ml-8">
            <h1 className="text-xl font-bold text-primary">Appointment</h1>
            <h1 className="text-4xl font-bold mt-4">Make an appointment Today</h1>
            <p className="my-5">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MackApporment;
