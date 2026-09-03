
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetails = () => {
  const { category, service } = useParams();

  const serviceCategory = services.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const selectedService = serviceCategory?.subServices.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") ===
      service.toLowerCase()
  );

  if (!serviceCategory || !selectedService) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Service Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            The service you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link
              to="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              to="/#services"
              className="transition hover:text-blue-600"
            >
              Services
            </Link>

            <ChevronRight size={15} />

            <span>{serviceCategory.category}</span>

            <ChevronRight size={15} />

            <span className="font-medium text-slate-900">
              {selectedService.title}
            </span>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {serviceCategory.icon && (
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <serviceCategory.icon size={22} />
              </div>
            )}

            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {serviceCategory.category}
            </span>
          </div>


          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {selectedService.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {selectedService.description}
          </p>

        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">

          {/* Main Content */}
          <div className="lg:col-span-2">

            <h2 className="text-2xl font-bold text-slate-900">
              About {selectedService.title}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {selectedService.description}
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Explore useful information, resources, and available options
              related to {selectedService.title.toLowerCase()} services.
              SewaSathi helps you understand the service and find relevant
              information in one convenient place.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-slate-900">
                What you can find
              </h3>

              <div className="mt-5 space-y-3">
                {[
                  `Information about ${selectedService.title}`,
                  "Available service options and resources",
                  "Useful guidance and related information",
                  "Relevant providers and organizations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-600"
                    />

                    <span className="text-sm text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mt-10 rounded-2xl bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Looking for {selectedService.title}?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore available information and find services that match
                your needs.
              </p>

              <Link
                to="/#services"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div> */}

          </div>

          <aside>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">

              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                More in {serviceCategory.category}
              </h3>

              <div className="mt-4 space-y-1">

                {serviceCategory.subServices.map((subService) => {
                  const slug = subService.title
                    .toLowerCase()
                    .replace(/\s+/g, "-");

                  const isActive =
                    subService.id === selectedService.id;

                  return (
                    <Link
                      key={subService.id}
                      to={`/services/${serviceCategory.category.toLowerCase()}/${slug}`}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm transition ${
                        isActive
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                      }`}
                    >
                      <span>{subService.title}</span>

                      <ChevronRight size={16} />
                    </Link>
                  );
                })}

              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;
