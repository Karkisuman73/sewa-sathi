import React from 'react'
import HowItWorks from '../components/HowItWorks'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <div>
        <Hero/>
      <HowItWorks />

         {/* Services */}

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Featured Services
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Find the service you need
              </h2>

              <p className="mt-4 text-slate-600">
                Explore some of the services available on our platform.
              </p>
            </div>

            {/* {searchQuery && (
              <p className="mt-6 text-sm text-slate-500">
                Showing results for{" "}
                <span className="font-semibold text-slate-900">
                  "{searchQuery}"
                </span>
              </p>
            )} */}

            {/* <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div> */}

            {/* {filteredServices.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <h3 className="font-semibold text-slate-900">
                  No services found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try searching with a different keyword.
                </p>
              </div>
            )} */}
          </div>
        </section>
     
    </div>
  )
}

export default Home
