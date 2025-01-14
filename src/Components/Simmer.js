import React from "react";

const Simmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-56 bg-slate-100 m-2 p-2 rounded-lg shadow-lg"
            data-testid="simmer"
          >
            <div className="w-full bg-slate-300 h-52"></div>
            <h1 className="p-2 m-2 bg-slate-400"></h1>
            <p className="p-2 m-2 bg-slate-400"></p>
          </div>
        ))}
    </div>
  );
};

// const Simmer = () => {
//   return (
//     <div className="flex flex-wrap">
//       {Array(12)
//         .fill("")
//         .map((e, index) => (
//           <div
//             key={index}
//             className="w-56 bg-slate-100 m-2 p-2 rounded-lg shadow-lg"
//             data-testid={`simmer-${index}`} // Unique test ID
//           >
//             <div className="w-full bg-slate-300 h-52"></div>
//             <h1 className="p-2 m-2 bg-slate-400"></h1>
//             <p className="p-2 m-2 bg-slate-400"></p>
//           </div>
//         ))}
//     </div>
//   );
// };

export default Simmer;
