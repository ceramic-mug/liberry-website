import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Compass, Download, Library, BookOpen, Settings, Type, PenLine, Quote, StickyNote, Bookmark, Users, Share, CloudOff, RefreshCw, Smartphone } from "lucide-react";

export default function Support() {

    const sections = [
        {
            title: "Getting Started & Discovery",
            items: [
                { icon: <Compass className="w-6 h-6 text-gold" />, title: "Discovering Books", desc: "Browse our curated collections or search for specific titles from supported repositories." },
                { icon: <Download className="w-6 h-6 text-gold" />, title: "Downloading", desc: "Tap on any book to see details and download it to your library instantly." },
                { icon: <Library className="w-6 h-6 text-gold" />, title: "Book Repositories", desc: "We support Project Gutenberg (60,000+ free ebooks) and Standard Ebooks (high-quality formatted editions)." },
                { icon: <BookOpen className="w-6 h-6 text-gold" />, title: "Tracking Reading", desc: "Your reading progress is automatically saved. Jump back in anytime." },
            ]
        },
        {
            title: "Reader Controls",
            items: [
                { icon: <Settings className="w-6 h-6 text-gold" />, title: "Scroll Modes", desc: "Switch between Vertical (default) and Horizontal scroll modes in the appearance settings." },
                { icon: <Type className="w-6 h-6 text-gold" />, title: "Appearance Settings", desc: "Tap the &apos;Tt&apos; icon to change font size, themes, scroll direction, and margins." },
                { icon: <PenLine className="w-6 h-6 text-gold" />, title: "Annotations", desc: "Long-press text to select it, then choose to Highlight, add a Note, save a Character, or Define a word." },
            ]
        },
        {
            title: "Notes & Organizer",
            subtitle: "Create a powerful, connected database of content and ideas generated from your reading.",
            items: [
                { icon: <Quote className="w-6 h-6 text-gold" />, title: "Highlights", desc: "View all your highlights across books. Link them to Journal Entries or Characters to build connections." },
                { icon: <StickyNote className="w-6 h-6 text-gold" />, title: "Journal", desc: "Write personal thoughts and link them back to specific Highlights for context." },
                { icon: <Bookmark className="w-6 h-6 text-gold" />, title: "Bookmarks", desc: "Access your saved bookmarks." },
                { icon: <Users className="w-6 h-6 text-gold" />, title: "Characters", desc: "Track characters with custom bios and link Highlights to them to save as quotes." },
                { icon: <Download className="w-6 h-6 text-gold" />, title: "Export", desc: "Export your highlights, notes, and characters to TXT or CSV formats for backup or external use." },
            ]
        },
        {
            title: "Library Management",
            items: [
                { icon: <Library className="w-6 h-6 text-gold" />, title: "Collections", desc: "Organize your books by creating collections in the sidebar drawer." },
                { icon: <CloudOff className="w-6 h-6 text-gold" />, title: "Offloading Books", desc: "If you run low on space, you can offload a book to keep its metadata and highlights while removing the file." },
                { icon: <RefreshCw className="w-6 h-6 text-gold" />, title: "Syncing", desc: "Enable syncing in Settings to keep your library and progress consistent across devices." },
            ]
        },
        {
            title: "Advanced Features",
            items: [
                { icon: <Share className="w-6 h-6 text-gold" />, title: "Send to Kindle", desc: "Use the share button on a book details page to send it directly to your Kindle device." },
                { icon: <Smartphone className="w-6 h-6 text-gold" />, title: "Reading Progress", desc: "We track both your current location and your furthest read point. You can jump back to your furthest point anytime." },
            ]
        },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 bg-paper font-inter text-ink">
                <div className="max-w-4xl mx-auto px-6">

                    <header className="mb-16 text-center md:text-left">
                        <Link href="/" className="inline-flex items-center text-sm font-bold text-ink/60 hover:text-ink mb-8 transition-colors">
                            ← Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Support</h1>
                        <p className="text-xl text-ink/60 max-w-2xl">
                            Get the most out of Liberry. Learn how to discover, read, and organize your library.
                        </p>
                    </header>

                    <div className="space-y-20">
                        {sections.map((section, idx) => (
                            <section key={idx}>
                                <h2 className="text-2xl font-playfair font-bold mb-2 text-ink border-b-2 border-gray-100 pb-2 inline-block pr-12">{section.title}</h2>
                                {section.subtitle && <p className="mb-8 text-ink/70 italic text-lg">{section.subtitle}</p>}

                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
                                    {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                                <p className="text-ink/70 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <section className="mt-24 p-8 bg-leather text-white rounded-2xl text-center">
                        <h2 className="text-2xl font-playfair font-bold mb-4">Still need help?</h2>
                        <p className="text-white/70 mb-8 max-w-lg mx-auto">
                            We are always looking to improve. If you have any questions or feedback, please reach out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:ceramic_mug@outlook.com" className="bg-white text-leather px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                Email Support
                            </a>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScl20QI4tSgw5xjN8x93k7lUyuyeGP7UnrGhw3GJEAZg8SZmA/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
                            >
                                Submit Feedback
                            </a>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </>
    );
}
