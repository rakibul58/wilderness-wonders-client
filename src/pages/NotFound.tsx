import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-secondary">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oh-no!
        </p>

        <p className="mt-4 mb-4 text-gray-500">We can't find that page.</p>

        <Link to='/'
          className=""
        >
          <Button className="hover:bg-secondary">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
