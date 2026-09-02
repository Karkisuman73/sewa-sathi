import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Category */}
      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        {service.category}
      </span>

      {/* Main Title */}
      <h3 className="mt-4 text-xl font-semibold text-slate-900">
        {service.category} Services
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-500">
        Explore {service.category.toLowerCase()} related services and
        professional support.
      </p>

      {/* Sub Services */}
      <div className="mt-5 space-y-2">
        {service.subServices.map((subService) => {
          const slug = subService.title
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <Link
              key={subService.id}
              to={`/services/${service.category.toLowerCase()}/${slug}`}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {subService.title}
            </Link>
          );
        })}
      </div>

      {/* Explore */}
      <Link
        to={`/services/${service.category.toLowerCase()}/${service.subServices[0].title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
      >
        Explore services

        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
};

export default ServiceCard;