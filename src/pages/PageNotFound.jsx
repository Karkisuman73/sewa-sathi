import { Link } from "react-router-dom";
import { ArrowLeft, Home, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-lg text-center">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <SearchX size={38} strokeWidth={1.8} />
        </div>

        {/* 404 */}
        <p className="mt-8 text-7xl font-bold tracking-tight text-slate-900 sm:text-8xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          Sorry, we couldn't find the page you're looking for. It may have
          been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            <Home size={17} />
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;