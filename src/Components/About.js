import { Outlet } from "react-router-dom";
import ProfileClasses from "./ProfileClasses";
import ProfileFunctional from "./Profile";
import React from "react";
import {
  C_1,
  C_2,
  C_3,
  C_4,
  C_5,
  CENTER_LOGO,
  MAN,
  MISSION,
  PEOPLES,
  VIDEO,
} from "./constant";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - DidMount");
  }
  render() {
    console.log("parent - Render");

    return (
      <>
        <div>
          <div className="mt-24 w-full bg-gray-100">
            <div className="m-auto w-4/5  bg-gray-100">
              <h1 className=" text-center text-4xl font-bold pt-20 ">
                ABOUT US
              </h1>

              <p className="text-center text-2xl text-gray-500 mt-4 mb-4">
                Swiggy is a new-age consumer-first organization offering an
                easy-to-use convenience platform, accessible through a unified
                app.
              </p>
            </div>
            <div className="w-6/12 justify-evenly bg-gray-100 flex m-auto relative  ">
              <img src={C_1} className="aspect-square  h-48 mt-28  " />
              <img src={C_2} className="aspect-square h-48   " />
              <img src={C_3} className="aspect-square   h-48 mt-28 " />
            </div>
            <div className="w-6/12 bg-gray-100 flex m-auto justify-center ">
              <img src={CENTER_LOGO} className="aspect-square  h-40 " />
            </div>
            <div className="w-6/12 bg-gray-100 flex m-auto justify-around ">
              <img src={C_4} className="aspect-square  h-48  " />
              <img src={C_5} className="aspect-square  h-48 " />
            </div>
          </div>
          {/* IPO Delivered - November 2024 */}
          <div className="w-full  m-auto flex flex-col items-center mt-20">
            <h1 className="text-4xl font-extrabold text-gray-700 mb-20">
              <span className="text-orange-600">────⋆⋅☆⋅⋆──</span> IPO Delivered
              - November 2024{" "}
              <span className="text-orange-600">────⋆⋅☆⋅⋆──</span>
            </h1>
            <div className="flex items-center ">
              <video
                // autoPlay
                controls
                src={VIDEO}
                className=" rounded-3xl m-auto w-3/4 items-center "
              />
            </div>
          </div>

          {/* mission  */}

          <div className="w-4/5  m-auto flex flex-col items-center mt-20 mb-20">
            <h1 className="text-4xl font-extrabold text-gray-700 mb-20">
              <span className="text-orange-600">────⋆⋅☆⋅⋆──</span> get to know
              us <span className="text-orange-600">────⋆⋅☆⋅⋆──</span>
            </h1>
            <div className="grid grid-cols-4 gap-4 items-center py-20 ">
              <div className="">
                <ul className=" flex justify-between flex-col ">
                  <li className="text-orange-600 text-2xl font-bold">
                    Mission ➜{" "}
                  </li>
                  <li className="text-2xl text-gray-400 hover:text-orange-600 font-bold mt-7 cursor-pointer">
                    Vision{" "}
                  </li>
                  <li className="text-2xl text-gray-400 hover:text-orange-600 font-bold mt-7 cursor-pointer">
                    value
                  </li>
                </ul>
              </div>
              <div className="col-span-2 text-gray-500   text-lg ">
                <h3>
                  Our mission is to elevate the quality of life of the urban
                  consumer by offering unparalleled convenience. Convenience is
                  what makes us tick. It’s what makes us get out of bed and say,
                  “Let’s do this.
                </h3>
              </div>
              <div>
                <img src={MISSION} />
              </div>
            </div>
          </div>

          {/*  */}

          <div className="w-4/5  m-auto flex flex-col items-center mt-20">
            <h1 className="text-4xl font-extrabold text-gray-700 mb-20">
              <span className="text-orange-600">────⋆⋅☆⋅⋆──</span> industry
              pioneer <span className="text-orange-600">────⋆⋅☆⋅⋆──</span>
            </h1>
            <div className="grid grid-cols-2 gap-4 items-center py-12 ">
              <div className=" text-gray-500   text-lg ">
                <h3>
                  Being among the first few entrants, Swiggy has successfully
                  pioneered the hyperlocal commerce industry in India, launching
                  Food Delivery in 2014 and Quick Commerce in 2020. Due to the
                  pioneering status of Swiggy, it is well-recognised as a leader
                  in innovation in hyperlocal commerce and as a brand synonymous
                  with the categories it is present in.
                </h3>
              </div>
              <div>
                <img src={MAN} className="ml-8" />
              </div>
            </div>
          </div>

          {/*  */}

          <div className="w-4/5  m-auto flex flex-col items-center mt-20 mb-20">
            <h1 className="text-4xl font-extrabold text-gray-700 mb-20">
              <span className="text-orange-600">────⋆⋅☆⋅⋆──</span> Careers at
              swiggy <span className="text-orange-600">────⋆⋅☆⋅⋆──</span>
            </h1>
            <div className="grid grid-cols-2 gap-4 items-center py-12 ">
              <div className=" text-gray-500   text-lg ">
                <h3>
                  When you work at Swiggy, you’re joining a culture of
                  innovation, teamwork, and endless possibilities. We believe in
                  empowering our employees to take charge of their careers and
                  make a real impact. Whether you’re a software engineer, a
                  marketing guru, a logistics expert, or someone who loves
                  delivering exceptional customer experiences, there’s a place
                  for you at Swiggy. If you’re excited about making a difference
                  and want to be part of a team that’s transforming the way
                  people live, then we want to hear from you! Explore our
                  current openings and embark on your next career adventure with
                  Swiggy. Let’s deliver unparalleled convenience together!
                </h3>

                <button className="mt-10 px-5 py-2 bg-orange-600 font-semibold text-white rounded-md ">
                  Know More →
                </button>
              </div>
              <div>
                <img src={PEOPLES} className="ml-8 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
        {/* <ProfileClasses name={"First Child"} /> */}
        {/* <ProfileClasses name={"second Child"} /> */}
      </>
    );
  }
}
export default About;

/* 
parent - constructor
About.js:17 parent - Render
ProfileClasses.js:10  constructor -First Child
ProfileClasses.js:18 Render -First Child
ProfileClasses.js:10  constructor -second Child
ProfileClasses.js:18 Render -second Child
ProfileClasses.js:14  DidMount -First Child
ProfileClasses.js:14  DidMount -second Child
About.js:14 parent - DidMount
*/
