"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Mic, BookOpen, PenTool, Share, Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function FeatureShowcase() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div id="features" className="py-24 space-y-32">

            {/* Feature 1: The Reader */}
            <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative">
                    {/* iPad Mockup Container */}
                    <div className={`relative aspect-[4/3] rounded-3xl border-[12px] border-gray-800 shadow-2xl overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#f4f4f4]'}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/images/mockups/reader.png"
                                alt="Reader Interface"
                                fill
                                className={`object-cover transition-opacity duration-500 ${isDark ? 'opacity-90 grayscale-[0.3]' : 'opacity-100'}`}
                            />
                            {/* Overlay to simulate dark mode if we don't have a specific dark screenshot yet */}
                            {isDark && <div className="absolute inset-0 bg-black/40 pointer-events-none" />}
                        </div>
                    </div>

                    {/* Theme Toggle Switch */}
                    <div className="absolute -bottom-6 right-8 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 z-10">
                        <Sun className={`w-4 h-4 ${!isDark ? 'text-gold' : 'text-gray-400'}`} />
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isDark ? 'bg-ink' : 'bg-gray-200'}`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <Moon className={`w-4 h-4 ${isDark ? 'text-purple-500' : 'text-gray-400'}`} />
                    </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-stone-200 text-xs font-semibold uppercase tracking-wider text-ink/60">
                        <BookOpen className="w-4 h-4" /> The Reader
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ink">A sanctuary for reading.</h2>
                    <p className="text-lg text-ink/70 font-inter leading-relaxed">
                        Immerse yourself in a distraction-free environment. Customize fonts, themes, and scroll modes to make every book feel like it was printed just for you.
                    </p>
                    <ul className="space-y-3 font-inter text-ink/80">
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            Sepia, Dark, and Light themes
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            Vertical, Horizontal, or Two-Column scrolling
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            Smart progress tracking across devices
                        </li>
                    </ul>
                </div>
            </section>

            {/* Feature 2: The Listener */}
            <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold uppercase tracking-wider text-amber-700">
                        <Mic className="w-4 h-4" /> The Listener
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ink">Listen without limits.</h2>
                    <p className="text-lg text-ink/70 font-inter leading-relaxed">
                        Switch seamlessly between reading and listening. Our powerful audiobook player is built for the spoken word, not just music.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-xl bg-paper border border-stone-100">
                            <div className="text-gold mb-2 font-bold text-2xl">0.5x - 4.0x</div>
                            <div className="text-sm font-medium text-ink">Speed Control</div>
                        </div>
                        <div className="p-4 rounded-xl bg-paper border border-stone-100">
                            <Cloud className="w-8 h-8 text-gold mb-2" />
                            <div className="text-sm font-medium text-ink">Offline-First</div>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center md:justify-end">
                    {/* iPhone Mockup for Audio */}
                    <div className="relative w-[300px] aspect-[9/19.5] bg-black rounded-[50px] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
                        <div className="relative w-full h-full bg-paper">
                            <Image
                                src="/images/mockups/audiobooks_listen.png"
                                alt="Audio Player"
                                fill
                                className="object-cover"
                            />

                            {/* Simulated Miniplayer floating overlay if needed, or visual accent */}
                            <div className="absolute bottom-6 inset-x-4 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center px-4 shadow-lg">
                                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gold border-b-[6px] border-b-transparent ml-1"></div>
                                </div>
                                <div className="ml-3">
                                    <div className="h-1.5 w-32 bg-white/20 rounded-full mb-1">
                                        <div className="h-full w-2/3 bg-gold rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Dynamic Island */}
                        <div className="absolute top-0 inset-x-0 h-8 bg-black w-28 mx-auto rounded-b-2xl z-20"></div>
                    </div>
                </div>
            </section>

            {/* Feature 3: The Scholar */}
            <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 relative h-[500px] flex items-center justify-center">
                    {/* Staggered Screens Composition */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="absolute top-0 right-0 w-64 h-80 bg-white rounded-xl shadow-xl border border-gray-200 z-10 p-4 rotate-3"
                    >
                        <div className="h-full w-full bg-gray-50 rounded-lg relative overflow-hidden">
                            <div className="absolute top-4 left-4 w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div className="absolute top-4 left-20 right-4 h-4 bg-gray-200 rounded"></div>
                            <div className="absolute top-12 left-20 w-24 h-4 bg-gray-200 rounded"></div>
                            <div className="absolute top-24 inset-x-4 bottom-4 bg-white rounded border border-gray-100 p-2 text-[10px] text-gray-400">
                                &quot;It was the best of times, it was the worst of times...&quot;
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, zIndex: 30 }}
                        className="absolute top-12 left-12 w-64 h-80 bg-paper rounded-xl shadow-2xl border border-gray-200 z-20 p-4 -rotate-2"
                    >
                        <h4 className="font-playfair font-bold text-lg mb-4">Notes</h4>
                        <div className="space-y-3">
                            <div className="p-3 bg-amber-50/50 rounded-lg border-l-4 border-gold text-sm text-ink/80 italic">
                                &quot;Astonishing depth of character...&quot;
                            </div>
                            <div className="p-3 bg-amber-50/50 rounded-lg border-l-4 border-gold text-sm text-ink/80 italic">
                                &quot;The symbolism of the green light...&quot;
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="absolute bottom-0 right-12 w-56 h-auto bg-white rounded-xl shadow-lg border border-gray-200 z-30 p-4"
                    >
                        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-success">
                            <Share className="w-4 h-4" /> Export Options
                        </div>
                        <div className="space-y-2">
                            <div className="h-8 bg-gray-50 rounded border border-gray-100 flex items-center px-3 text-xs">Markdown</div>
                            <div className="h-8 bg-gray-50 rounded border border-gray-100 flex items-center px-3 text-xs">CSV</div>
                            <div className="h-8 bg-gray-50 rounded border border-gray-100 flex items-center px-3 text-xs">PDF</div>
                        </div>
                    </motion.div>
                </div>

                <div className="order-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-stone-200 text-xs font-semibold uppercase tracking-wider text-ink/60">
                        <PenTool className="w-4 h-4" /> The Scholar
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ink">Build your external memory.</h2>
                    <p className="text-lg text-ink/70 font-inter leading-relaxed">
                        Connect your thoughts. Link characters to quotes. Export everything to Obsidian, Notion, or plain text to own your knowledge forever.
                    </p>
                </div>
            </section>

        </div>
    );
}
