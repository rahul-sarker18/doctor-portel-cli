import React from "react";
import icons from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import ReviewCart from "./ReviewCart";

const Review = () => {
  const review = [
    {
      id: 1,
      img: people1,
      c: "California",
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
    },
    {
      id: 2,
      img: people2,
      c: "California",
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
    },
    {
      id: 3,
      img: people3,
      c: "California",
      title:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
    },
  ];
  return (
    <div className="mt-24">
      <div className="flex justify-between mb-20">
        <div>
          <h1 className="text-primary font-bold text-xl">Testimonial</h1>
          <p className="font-normal text-4xl"> What Our Patients Says</p>
        </div>
        <img src={icons} className="w-48" alt="" />
      </div>

      {/*  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
            review.map(re => <ReviewCart key={re.id} re ={re}></ReviewCart>)
        }
      </div>
    </div>
  );
};

export default Review;
