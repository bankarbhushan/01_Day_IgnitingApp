import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count1: 0,
      // count2: 0,

      // we will store the user data in one object
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar: "img",
      },
    };
    console.log("first child- constructor  ");

    // console.log(" constructor -" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/bankarbhushan");
    const json = await data.json();

    console.log(json);

    // setting the coming data using set function
    this.setState({
      userInfo: json,
    });
    console.log("first child - Did Mount");

    // console.log(" DidMount -" + this.props.name);
  }

  componentDidUpdate(preProps, prevState) {
    if (this.state.count !== prevState.count) {
      // this is the code when we write in functional based component in dependency array
      /* 
      const useEffect({
      },[count])
      
      */
    }
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Component will Update");
  }

  render() {
    console.log("first child -Render ");

    // console.log("Render -" + this.props.name);

    return (
      <>
        <h1>class Base Profile</h1>
        <h2> Name :{this.state.userInfo.name}</h2>
        <h2>location : {this.state.userInfo.location}</h2>
        <img
          src={this.state.userInfo.avatar_url}
          style={{ borderRadius: "50%" }}
        ></img>

        {/* <h3>{this.state.count1}</h3>
        <h3>{this.state.count2}</h3>

        <button
          onClick={() => {
            this.setState({
              count1: 1,
              count2: 1,
            });
          }}
        >
          Count1
        </button> */}
      </>
    );
  }
}
export default Profile;

/* 
 constructor -First Child
ProfileClasses.js:36 Render -First Child
ProfileClasses.js:18  constructor -second Child
ProfileClasses.js:36 Render -second Child
ProfileClasses.js:25 Objectavatar_url: "https://avatars.githubusercontent.com/u/128053266?v=4"bio: nullblog: ""company: nullcreated_at: "2023-03-16T12:56:38Z"email: nullevents_url: "https://api.github.com/users/bankarbhushan/events{/privacy}"followers: 0followers_url: "https://api.github.com/users/bankarbhushan/followers"following: 0following_url: "https://api.github.com/users/bankarbhushan/following{/other_user}"gists_url: "https://api.github.com/users/bankarbhushan/gists{/gist_id}"gravatar_id: ""hireable: nullhtml_url: "https://github.com/bankarbhushan"id: 128053266location: "nagpur"login: "bankarbhushan"name: "Bhushan Bankar"node_id: "U_kgDOB6HwEg"organizations_url: "https://api.github.com/users/bankarbhushan/orgs"public_gists: 0public_repos: 10received_events_url: "https://api.github.com/users/bankarbhushan/received_events"repos_url: "https://api.github.com/users/bankarbhushan/repos"site_admin: falsestarred_url: "https://api.github.com/users/bankarbhushan/starred{/owner}{/repo}"subscriptions_url: "https://api.github.com/users/bankarbhushan/subscriptions"twitter_username: nulltype: "User"updated_at: "2024-10-12T16:15:53Z"url: "https://api.github.com/users/bankarbhushan"user_view_type: "public"[[Prototype]]: Object
ProfileClasses.js:32  DidMount -First Child
ProfileClasses.js:25 Object
ProfileClasses.js:32  DidMount -second Child
ProfileClasses.js:25 Object
ProfileClasses.js:32  DidMount -First Child
ProfileClasses.js:36 Render -First Child
ProfileClasses.js:25 Object
ProfileClasses.js:32  DidMount -second Child
ProfileClasses.js:36 Render -second Child
*/
