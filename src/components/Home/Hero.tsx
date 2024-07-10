import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import heroImg from "../../assets/images/heroImg.jpg";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-col">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white dark:text-secondary transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={heroImg}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-destructive">
            Welcome
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Gear Up for Your
            <br className="hidden md:block" /> Next{" "}
            <span className="inline-block text-destructive">Adventure</span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Discover top-quality camping gear and essentials for all your
            wilderness excursions. At Wilderness Wonders, we equip you to
            explore the great outdoors with confidence and ease.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/" className="">
              <Button className="hover:bg-stone-600 font-semibold">
                Get Started
              </Button>
            </Link>
            <Link to="/about" aria-label="" className="">
              <Button
                variant="outline"
                className="font-semibold dark:bg-stone-400 dark:text-black dark:hover:bg-stone-500 dark:hover:text-white"
              >
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
