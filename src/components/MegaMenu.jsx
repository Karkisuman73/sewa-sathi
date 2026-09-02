import { Link } from "react-router-dom";

const MegaMenu = ({ isOpen, onClose, services }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 border-t border-slate-100 bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid grid-cols-3 gap-x-10 gap-y-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>

                {/* Main Category */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={18} />
                  </div>

                  <h3 className="font-semibold text-slate-900">
                    {service.category}
                  </h3>
                </div>

                {/* Sub Categories */}
                <div className="mt-3 ml-12 space-y-1">
                  {service.subServices.map((subService) => {
                    const slug = subService.title
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    return (
                      <Link
                        key={subService.id}
                        to={`/services/${service.category.toLowerCase()}/${slug}`}
                        onClick={onClose}
                        className="block rounded-md px-2 py-2 text-sm text-slate-500 hover:bg-slate-50 hover:text-blue-600"
                      >
                        {subService.title}
                      </Link>
                    );
                  })}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default MegaMenu;