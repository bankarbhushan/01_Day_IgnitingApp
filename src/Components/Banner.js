import {
  BANNER_LEFT_IMG,
  BANNER_RIGHT_IMG,
  HERO_1,
  HERO_2,
  HERO_3,
  HERO_4,
} from "./constant";
import { Simmer2 } from "./Simmer";

const Banner = () => (
  <>
    {
      <div className="banner-container w-full">
        <img
          src={BANNER_LEFT_IMG}
          alt="banner image"
          className="banner-img"
        ></img>

        <h1 id="title" className="animate-pulse ">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </h1>

        <img
          src={BANNER_RIGHT_IMG}
          alt="banner image"
          className="banner-img"
        ></img>
      </div>
    }
  </>
);
export default Banner;
