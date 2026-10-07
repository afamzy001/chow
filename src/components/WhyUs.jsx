import {
    FiCheckCircle,
    FiShield,
    FiClock,
    FiSmile,
} from "react-icons/fi";

const reasons = [
    {
        id: 1,
        icon: FiCheckCircle,
        title: "Quality Ingredients",
        description:
            "We use fresh and quality ingredients to give you delicious meals and treats.",
    },
    {
        id: 2,
        icon: FiShield,
        title: "Secure Payment",
        description:
            "Pay conveniently and securely online with our trusted Paystack payment system.",
    },
    {
        id: 3,
        icon: FiClock,
        title: "Quick & Convenient",
        description:
            "Order your favorite meals, cakes, and cookies from your phone or computer.",
    },
    {
        id: 4,
        icon: FiSmile,
        title: "Customer First",
        description:
            "Your satisfaction matters to us. We work hard to make every order special.",
    },
];

const WhyUs = () => {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left content */}
                    <div>
                        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                            Why Choose Us
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#4A2C1A] sm:text-4xl lg:text-5xl">
                            Good Food.
                            <br />
                            Sweet Moments.
                            <br />
                            Made For You.
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
                            We believe ordering food should be easy, enjoyable, and
                            stress-free. That's why we combine delicious food with a simple
                            online ordering experience.
                        </p>

                        <a
                            href="/menu"
                            className="mt-7 inline-flex rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg"
                        >
                            Order Now
                        </a>
                    </div>

                    {/* Right cards */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {reasons.map((reason) => {
                            const Icon = reason.icon;

                            return (
                                <div
                                    key={reason.id}
                                    className="rounded-2xl border border-orange-100 bg-[#FFF8F0] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-[#4A2C1A]">
                                        {reason.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-stone-600">
                                        {reason.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

