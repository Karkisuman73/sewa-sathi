import CategoryCard from "../components/CategoryCard";
import { services } from "../data/services";

const Categories = () => {
  return (
    <section id="categories" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Centered Text Section */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Service Categories
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find the service you need
          </h2>

          <p className="mt-4 text-slate-600">
            Explore our service categories and find the right solution for
            your needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <CategoryCard
              key={service.id}
              category={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;