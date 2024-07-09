import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex py-20 justify-center">
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        strokeColor="brown"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
