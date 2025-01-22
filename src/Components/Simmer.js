import React from "react";

const Simmer = () => {
  return (
    <div className="flex flex-wrap animate-pulse ">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-56 m-auto  bg-slate-100  p-2 rounded-lg shadow-lg"
            data-testid="simmer"
          >
            <div className="w-full bg-slate-100 h-52"></div>
            <h1 className="p-2 m-2 bg-slate-200"></h1>
            <p className="p-2 m-2 bg-slate-300"></p>
          </div>
        ))}
    </div>
  );
};
export const Simmer2 = () => {
  return (
    <div className="flex flex-wrap">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-56 m-auto  bg-slate-100  p-2 rounded-lg shadow-lg"
            data-testid="simmer"
          >
            <div className="w-full bg-slate-100 h-52"></div>
          </div>
        ))}
    </div>
  );
};
export default Simmer;
