import { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLandingPage = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/landing-page`

                );


                setPageData(res.data.data);
            } catch (error) {
                console.error("Error fetching landing page:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLandingPage();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!pageData) return <p>No data found</p>;

    return (
        <div className="font-sans text-gray-800 bg-black">
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                    <h1 className="text-2xl font-bold text-blue-600">{pageData.title}</h1>
                    <ul className="flex gap-6 text-sm font-medium">
                        <li><a href="#features" className="hover:text-red-600 ">Features</a></li>
                        <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white text-center">
                <div className="w-full mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Build & Launch Without Problems 🚀
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {pageData.description}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                            Get Started
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-12">Our Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Fast Setup", text: "Get started quickly with minimal setup time." },
                            { title: "Fully Responsive", text: "Looks great on all devices, large and small." },
                            { title: "Secure & Reliable", text: "Built with security and performance in mind." },
                        ].map((f, i) => (
                            <div key={i} className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                                <div className="text-4xl mb-4 text-blue-600">✨</div>
                                <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
                                <p className="text-gray-600">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-12">What Our Users Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah", quote: "This app saved me hours every week!" },
                            { name: "Michael", quote: "A simple, elegant solution that just works." },
                            { name: "Ava", quote: "The support team is amazing and so responsive!" },
                        ].map((t, i) => (
                            <div key={i} className="bg-white shadow p-6 rounded-xl">
                                <p className="italic text-gray-600 mb-4">"{t.quote}"</p>
                                <p className="font-semibold text-blue-600">- {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-bold mb-4">Stay in Touch</h3>
                    <p className="text-gray-600 mb-8">
                        Subscribe to our newsletter to get the latest updates and news.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-300 px-4 py-3 rounded-lg flex-1 focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-900 text-gray-300 text-center">
                <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
