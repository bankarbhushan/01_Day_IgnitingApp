import { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [networkStatus, setNetWorkStatus] = useState(true);

  const handleOnline = () => {
    setNetWorkStatus(true);
  };

  const handleOffline = () => {
    // when you are offline then set it 0
    setNetWorkStatus(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // every time good practice to do the removeListener
    // because when you
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return networkStatus;
  // it return boolean value
};

export default NetworkStatus;
