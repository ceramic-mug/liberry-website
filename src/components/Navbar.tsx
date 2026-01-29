import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                        <Image
                            src="/icon.svg"
                            alt="Liberry Icon"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-playfair font-bold text-xl text-ink tracking-tight">Liberry</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">
                        Features
                    </Link>
                    <Link href="#philosophy" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">
                        Philosophy
                    </Link>
                    <a
                        href="https://apps.apple.com/app/id123456789" // TODO: Replace with real ID
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ink text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-ink/90 transition-transform active:scale-95"
                    >
                        Download
                    </a>
                </div>
            </div>
        </nav>
    );
}
