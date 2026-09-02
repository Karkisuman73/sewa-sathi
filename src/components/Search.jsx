import { Search, X, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SearchServices = ({ services, isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const query = search.trim().toLowerCase();

  const results = [];

  services.forEach((service) => {
    service.subServices.forEach((subService) => {
      const matches =
        subService.title.toLowerCase().includes(query) ||
        subService.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query);

      if (query && matches) {
        results.push({
          ...subService,
          category: service.category,
        });
      }
    });
  });

  return (
    <div
      ref={searchRef}
      className="absolute left-0 right-0 top-full z-50 border-b border-slate-200 bg-white shadow-lg"
    >
      <div className="mx-auto max-w-4xl px-4 py-5 sm:px-6">

        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search services..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-700"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {search && (
          <div className="mt-4">

            {results.length > 0 ? (
              <>
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Services
                </p>

                <div className="max-h-80 overflow-y-auto">
                  {results.map((result) => {
                    const slug = result.title
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    return (
                      <Link
                        key={result.id}
                        to={`/services/${result.category.toLowerCase()}/${slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-slate-50"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-900">
                              {result.title}
                            </span>

                            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                              {result.category}
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-slate-500">
                            {result.description}
                          </p>
                        </div>

                        <ArrowRight
                          size={16}
                          className="shrink-0 text-slate-400"
                        />
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="py-8 text-center">
                <Search
                  size={28}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-3 text-sm font-medium text-slate-700">
                  No services found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try searching for another service.
                </p>
              </div>
            )}
          </div>
        )}

        {!search && (
          <div className="py-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Popular searches
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {["Consulting", "Courses", "Medical", "Property", "Hotels"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => setSearch(item)}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchServices;

