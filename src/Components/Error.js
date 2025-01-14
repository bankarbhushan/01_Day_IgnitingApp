// import { useRouteError } from "react-router-dom";

// const Error = () => {
//   const err = useRouteError();
//   console.log(err);

//   return (
//     <>
//       <h2> Opss!! Something went wrong</h2>
//       <h2>{err.status + " : " + err.statusText}</h2>
//     </>
//   );
// };
// export default Error;

import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); // Capture the error

  // Check if `err` exists and has properties; otherwise, use defaults
  const status = err?.status || "Unknown Error";
  const statusText = err?.statusText || "An unexpected error occurred";

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
      <h2>Oops!! Something went wrong</h2>
      <h2>{`${status} : ${statusText}`}</h2>
      {/* Optionally display error message if it exists */}
      {err?.message && <p>Error Message: {err.message}</p>}
    </div>
  );
};

export default Error;
