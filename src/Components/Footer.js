import { APPLE_STORE, PLAY_STORE } from "./constant";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-7 p-3 bg-slate-100 items-center w-full  ">
        <p className="font-bold md:text-2xl text-gray-600  ">
          For better experience, download the Swiggy app now
        </p>
        <div className="gap-2 md:flex">
          <img src={APPLE_STORE} className="w-32" />
          <img src={PLAY_STORE} className="w-32" />
        </div>
      </div>
    </>
  );
};
export default Footer;
