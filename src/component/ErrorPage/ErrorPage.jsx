import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Oops! Page not found.
        </h2>
        <p className="text-gray-500 text-center mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
