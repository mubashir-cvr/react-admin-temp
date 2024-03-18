import React from "react";
import Carousel from "../custom/Carousel";
import avatar from "../../../src/assets/img/avatar.png";
import dance from "../../../src/assets/img/dance-m.jpeg";
function HomePage() {
  return (
    <div className="h-screen">
    <div className="flex flex-row items-center h-full w-full">
      <div className="flex basis-full md:basis-3/4 h-full w-full px-2">
        <Carousel items={toCarousalItems} />
      </div>
      <div className="hidden md:flex basis-1/4 h-full w-full border-2 items-center justify-center">
        Home Side
      </div>
    </div>
    </div>
  );
}

export default HomePage;

const toCarousalItems = [
  {
    index: 0,
    element: (
      <div className="flex w-full bg-white rounded-lg  p-4 flex-col">
        <div className="flex flex-row gap-2 h-32 items-center">
          <img className="flex justify-center w-24 rounded-lg" src={dance} />
          <div className="flex flex-1 flex-col h-full py-6 px-2 justify-between">
            <div className="flex">
              <h3>Bharathanatyam Dance 1</h3>
            </div>
            <div className="flex text-gray-500 text-sm ">
              <p>
                <li>col-2</li>
              </p>
            </div>
          </div>
        </div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin">1col</div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin"> 2col</div>
      </div>
    ),
  },
  {
    index: 1,
    element: (
      <div className="flex w-full bg-white rounded-lg  p-4 flex-col">
        <div className="flex flex-row gap-2 h-32 items-center">
          <img className="flex justify-center w-24 rounded-lg" src={dance} />
          <div className="flex flex-1 flex-col h-full py-6 px-2 justify-between">
            <div className="flex">
              <h3>Bharathanatyam Dance 2</h3>
            </div>
            <div className="flex text-gray-500 text-sm ">
              <p>
                <li>col-2</li>
              </p>
            </div>
          </div>
        </div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin">1col</div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin"> 2col</div>
      </div>
    ),
  },
  {
    index: 2,
    element: (
      <div className="flex w-full bg-white rounded-lg  p-4 flex-col">
        <div className="flex flex-row gap-2 h-32 items-center">
          <img className="flex justify-center w-24 rounded-lg" src={dance} />
          <div className="flex flex-1 flex-col h-full py-6 px-2 justify-between">
            <div className="flex">
              <h3>Bharathanatyam Dance 3</h3>
            </div>
            <div className="flex text-gray-500 text-sm ">
              <p>
                <li>col-2</li>
              </p>
            </div>
          </div>
        </div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin">1col</div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin"> 2col</div>
      </div>
    ),
  },
  {
    index: 3,
    element: (
      <div className="flex w-full bg-white rounded-lg  p-4 flex-col">
        <div className="flex flex-row gap-2 h-32 items-center">
          <img className="flex justify-center w-24 rounded-lg" src={dance} />
          <div className="flex flex-1 flex-col h-full py-6 px-2 justify-between">
            <div className="flex">
              <h3>Bharathanatyam Dance 4</h3>
            </div>
            <div className="flex text-gray-500 text-sm ">
              <p>
                <li>col-2</li>
              </p>
            </div>
          </div>
        </div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin">1col</div>
        <div className="flex rounded-lg h-12 border-2 justify-center items-center text-sm font-thin"> 2col</div>
      </div>
    ),
  },
];
