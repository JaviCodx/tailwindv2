import React from "react";
import coffee from "../images/coffee.jpg";
import sweet from "../images/sweet.jpg";

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly sm:flex-row ">
        <div className="flex flex-col justify-center items-center mx-10 bg-white h-screen font-mono  py-40 ">
          <img
            src={coffee}
            alt="coffee"
            className="h-full rounded mb-20 shadow"
          ></img>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-2">Coffee</h2>
            <p className="mb-2">Best coffee from Colombia</p>
            <span>16$</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-10 bg-white h-screen font-mono py-40 ">
          <img
            src={sweet}
            alt="sweet"
            className="h-full rounded mb-20 shadow"
          ></img>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-2">Dessert</h2>
            <p className="mb-2">Best dessert from England</p>
            <span>12$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
