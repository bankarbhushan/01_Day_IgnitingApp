import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy",
  },
});

export default userContext;
