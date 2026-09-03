import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div  className="group block rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={23} />
        </div>

        <ArrowUpRight
          size={19}
          className="text-slate-300 transition group-hover:text-blue-600"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {category.category}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Explore {category.category.toLowerCase()} related services.
      </p>
    </div>
  );
};

export default CategoryCard;