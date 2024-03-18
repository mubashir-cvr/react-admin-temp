import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Carousel = ({ items }) => {
  // A state to hold the current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preIndex, setPrevIndex] = useState(0);

  const showMoreItems = () => {
    setPrevIndex(currentIndex+2);
    setCurrentIndex((prevIndex) => prevIndex + 2);
  };
  const showPrevItems = () => {
    setPrevIndex(currentIndex-2);
    setCurrentIndex((prevIndex) => prevIndex - 2);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-full h-8 items-center ">
        <div className="flex w-full flex-row justify-end items-center">
          <div className="flex-1 p-3">
            <h4 className="font-medium text-pink-950">Upcoming Classes</h4>
          </div>
          <div className="p-3">
            <p className="text-pink-950 text-sm font-medium">View All</p>
          </div>
          <div className="p-3 flex gap-3">
            <button
              onClick={showPrevItems}
              disabled={currentIndex - 2 < 0}
              className="text-lg text-pink-950"
            >
              <IoIosArrowDropleft />
            </button>
            <button
              onClick={showMoreItems}
              disabled={currentIndex + 2 >= items.length}
              className="text-lg text-pink-950"
            >
              <IoIosArrowDropright />
            </button>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col md:flex-row gap-2 w-full">
        {items.slice(preIndex, currentIndex + 2).map((item, index) => (
          <div
            key={index}
            className="flex w-full md:w-1/2 justify-items-start items-center"
          >
            {item.element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
