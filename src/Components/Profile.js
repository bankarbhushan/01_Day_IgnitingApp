import { useState } from "react";

const Profile = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h1>Profile </h1>
      <h2> Name : {props.name}</h2>

      <h3>{count1}</h3>
      <h3>{count2}</h3>

      <button
        onClick={() => {
          setCount1(1);
        }}
      >
        count1
      </button>

      <button
        onClick={() => {
          setCount2(1);
        }}
      >
        count2
      </button>
    </>
  );
};
export default Profile;
