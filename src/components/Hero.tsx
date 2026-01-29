"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl z-10"
                >
                    <h1 className="font-playfair text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-6">
                        Just You and the <br />
                        <span className="italic">World’s Greatest Stories.</span>
                    </h1>

                    <p className="font-inter text-lg md:text-xl text-ink/80 leading-relaxed mb-8 max-w-lg">
                        No subscriptions. No ads. Tens of thousands of free public domain audiobooks and ebooks in your pocket.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <a
                            href="https://apps.apple.com/app/id123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center"
                        >
                            {/* Replaced with a styled button since we don't have the badge asset yet, 
                    or we can use a standard SVG badge */}
                            <div className="bg-black text-white px-8 py-3.5 rounded-xl flex items-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-lg">
                                <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-38.3-19.7-70.4-19.7-47.5 0-104.8 30.5-127.3 76.5-26 53-6.6 136 19.3 173.8 14.1 20.2 29 40 52 39.4 22.1-.5 30.6-13.9 57.6-13.9 26.6 0 33.1 13.9 57.2 13.9 24.1 .4 39.6-18.8 54.2-40.2 16-23.7 23.3-46.7 23.7-47.8l-.2-.3c-33.1-13.8-54.3-43.2-54.6-88.6zm-104.4-162.4c16.1-19.5 28.5-47.8 24.4-78.4-23.8 1-52.9 16.2-69.6 36-15.6 18.2-27.4 46.5-24 74.8 26.9 2.5 53.3-15.2 69.2-32.4z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium leading-none mb-0.5 opacity-80">Download on the</div>
                                    <div className="text-lg font-bold leading-none">App Store</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual (iPhone) */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: -6 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="relative h-[600px] md:h-[800px] flex items-center justify-center md:justify-end"
                >
                    {/* Placeholder for the phone mockup - Using a div for now if image is missing, but we have screenshots */}
                    <div className="relative w-[300px] md:w-[350px] aspect-[9/19.5] bg-black rounded-[50px] border-[8px] border-gray-900 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] overflow-hidden">
                        {/* Screen Content */}
                        <div className="relative w-full h-full bg-paper overflow-hidden">
                            <Image
                                src="/images/mockups/library_view.png"
                                alt="App Screenshot"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-0 inset-x-0 h-8 bg-black w-28 mx-auto rounded-b-2xl z-20"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
