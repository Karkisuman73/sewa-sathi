
import {
  Search,
  Compass,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  return (
    <main className="bg-white text-slate-900">

      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              About SewaSathi
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Making services easier
              <span className="text-blue-600"> to discover.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              SewaSathi is a simple service information platform that helps
              people discover useful services, understand their options, and
              find the right information in one place.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Services
                <ArrowRight size={17} />
              </a>

              <a
                href="#mission"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Our Mission
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              One place to discover the services you need.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Finding the right service can sometimes be confusing. Information
              may be spread across different websites, businesses, and sources.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              SewaSathi brings useful service information together in one
              simple platform, making it easier for users to explore categories,
              understand available services, and find relevant information.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Easy-to-understand service information",
                "Organized categories and services",
                "Simple and user-friendly experience",
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

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <Search
                    size={25}
                    className="text-blue-600"
                  />

                  <h3 className="mt-4 font-semibold text-slate-900">
                    Discover
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Find useful services quickly.
                  </p>
                </div>


                <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                  <Compass
                    size={25}
                    className="text-blue-600"
                  />

                  <h3 className="mt-4 font-semibold text-slate-900">
                    Explore
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Browse services by category.
                  </p>
                </div>


                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <ShieldCheck
                    size={25}
                    className="text-blue-600"
                  />

                  <h3 className="mt-4 font-semibold text-slate-900">
                    Reliable
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Access clear and useful information.
                  </p>
                </div>


                <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                  <Users
                    size={25}
                    className="text-blue-600"
                  />

                  <h3 className="mt-4 font-semibold text-slate-900">
                    For Everyone
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Designed with users in mind.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section
        id="services"
        className="bg-slate-50 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Information that helps you make better choices.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              SewaSathi focuses on making service discovery simple,
              organized, and accessible.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Search size={21} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Service Discovery
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Search and discover useful services without having to look
                through multiple sources.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Compass size={21} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Organized Information
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Services are organized into meaningful categories so users
                can easily explore what they need.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={21} />
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                User-Friendly Experience
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                We aim to keep the experience simple, clear, and easy for
                everyone to navigate.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Why SewaSathi
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Simple information. Easier decisions.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our goal is not to make finding services complicated. SewaSathi
                is designed around a simple idea — people should be able to
                discover useful service information without unnecessary
                complexity.
              </p>
            </div>


            <div className="space-y-4">

              {[
                {
                  title: "Simple",
                  text: "Clean and straightforward service discovery.",
                },
                {
                  title: "Organized",
                  text: "Services grouped into clear and meaningful categories.",
                },
                {
                  title: "Accessible",
                  text: "Information presented in an easy-to-understand way.",
                },
                {
                  title: "Useful",
                  text: "Focused on helping users find relevant information.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      <section
        id="mission"
        className="bg-blue-600 py-20 text-white lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Our Mission
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            To make service information simple and accessible.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            We want SewaSathi to become a trusted starting point for people
            looking for useful services and information. By keeping service
            discovery simple and organized, we aim to make everyday decisions
            easier.
          </p>

        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to discover useful services?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Explore SewaSathi and find the information you need, all in one
            place.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Services
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
};

export default About;

