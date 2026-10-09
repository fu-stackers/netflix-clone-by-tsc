import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-bold md:text-8xl">404</h1>
      <p className="text-gray-400">We can't find the page you're looking for.</p>
      <Link
        to="/"
        className="rounded bg-white px-6 py-2 font-semibold text-black transition-colors hover:bg-white/75"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;