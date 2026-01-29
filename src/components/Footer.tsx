import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-leather text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-playfair text-3xl font-bold mb-4">Liberry</h2>
                        <p className="font-inter text-gray-400 max-w-sm">
                            The Digital Library of Alexandria. Access history, philosophy, and fiction without barriers.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4 text-white/90">Product</h3>
                        <ul className="space-y-3 font-inter text-gray-400">
                            <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#philosophy" className="hover:text-white transition-colors">Philosophy</Link></li>
                            <li><a href="https://apps.apple.com/app/id123456789" className="hover:text-white transition-colors">App Store</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4 text-white/90">Legal & Support</h3>
                        <ul className="space-y-3 font-inter text-gray-400">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                            <li><a href="mailto:support@liberry.app" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm font-inter">
                        &copy; {new Date().getFullYear()} Liberry. Built by Joshua using Gemini.
                    </p>
                    <p className="text-gray-600 text-xs font-inter">
                        Public domain content provided by Project Gutenberg and LibriVox.
                    </p>
                </div>
            </div>
        </footer>
    );
}
