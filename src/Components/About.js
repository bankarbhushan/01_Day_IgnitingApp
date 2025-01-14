import { Outlet } from "react-router-dom";
import ProfileClasses from "./ProfileClasses";
import ProfileFunctional from "./Profile";
import React from "react";

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
        <h1>This is an a about us page</h1>

        <ProfileClasses name={"First Child"} />
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
