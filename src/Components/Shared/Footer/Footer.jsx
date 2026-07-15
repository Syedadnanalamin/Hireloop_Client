import Image from "next/image";
import Link from "next/link";
import {
    LogoFacebook,
    LogoLinkedin,
    Fingerprint,
} from "@gravity-ui/icons";

const productLinks = [
    "Browse Jobs",
    "Companies",
    "Career Tips",
    "Salary Guide",
];

const navigationLinks = [
    "About Us",
    "Contact",
    "Help Center",
    "Privacy Policy",
];

const resourceLinks = [
    "Blog",
    "Newsroom",
    "Brand Assets",
    "Terms & Conditions",
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-base-300 bg-[#05070F] text-base-content">
            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[120px]" />

            <div className="container mx-auto px-6 py-20 relative z-10">

                <div className="grid gap-16 lg:grid-cols-5">

                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-8">

                        <Link href="/" className="inline-block">
                            <Image
                                src="/img/logo.png"
                                width={170}
                                height={50}
                                alt="HireLoop" className="object-cover"
                            />
                        </Link>

                        <p className="max-w-sm leading-8 text-base-content/70">
                            Discover verified opportunities, connect with top employers,
                            and build your future with confidence. HireLoop helps talented
                            people find meaningful careers.
                        </p>

                        <div className="flex gap-4">

                            <Link
                                href="#"
                                className="btn btn-square btn-sm rounded-xl border border-base-300 bg-base-200 hover:bg-primary hover:text-white transition-all"
                            >
                                <LogoFacebook className="w-5 h-5" />
                            </Link>

                            <Link
                                href="#"
                                className="btn btn-square btn-sm rounded-xl border border-base-300 bg-base-200 hover:bg-primary hover:text-white transition-all"
                            >
                                <Fingerprint className="w-5 h-5" />
                            </Link>

                            <Link
                                href="#"
                                className="btn btn-square btn-sm rounded-xl border border-base-300 bg-base-200 hover:bg-primary hover:text-white transition-all"
                            >
                                <LogoLinkedin className="w-5 h-5" />
                            </Link>

                        </div>

                    </div>

                    {/* Product */}

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">
                            Product
                        </h3>

                        <ul className="space-y-4">
                            {productLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base-content/65 transition hover:text-primary"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">
                            Navigation
                        </h3>

                        <ul className="space-y-4">
                            {navigationLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base-content/65 transition hover:text-primary"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">
                            Resources
                        </h3>

                        <ul className="space-y-4">
                            {resourceLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-base-content/65 transition hover:text-primary"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Divider */}

                <div className="divider my-12 before:bg-base-300 after:bg-base-300"></div>

                {/* Bottom */}

                <div className="flex flex-col gap-5 md:flex-row items-center justify-between">

                    <p className="text-sm text-base-content/60">
                        © {new Date().getFullYear()} HireLoop. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm">

                        <Link
                            href="#"
                            className="text-base-content/60 hover:text-primary transition"
                        >
                            Terms
                        </Link>

                        <Link
                            href="#"
                            className="text-base-content/60 hover:text-primary transition"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="#"
                            className="text-base-content/60 hover:text-primary transition"
                        >
                            Cookies
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}