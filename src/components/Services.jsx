import services from "../Data/Services";

const Services = () => {
    return (
        <section className="bg-[#FFF8F0] py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                        What We Offer
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-[#4A2C1A] sm:text-4xl">
                        Everything Delicious, All in One Place
                    </h2>

                    <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
                        From tasty everyday meals to beautiful cakes and freshly baked
                        cookies, we make ordering your favorite treats simple.
                    </p>
                </div>

                {/* Service cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="group rounded-2xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-[#4A2C1A]">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-stone-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;