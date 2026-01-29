"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

export default function Discovery() {
    const collections = [
        { title: "The Intro 100", cover: "The Odyssey" }, // Placeholder names, will use generic covers or colors if images missing
        { title: "The Russian Soul", cover: "Crime and Punishment" },
        { title: "Shadows & Spectres", cover: "Dracula" },
        { title: "Voices from the Veil", cover: "The Souls of Black Folk" },
        { title: "Pulp, Weird, & Noir", cover: "The Call of Cthulhu" },
    ];

    /* 
      Ideally we used real images. For now we will use CSS placeholders 
      if specific images aren't found, but the structure supports images.
    */

    return (
        <section className="py-24 bg-paper overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-4xl font-playfair font-bold text-ink mb-4">Curated Collections.</h2>
                <p className="text-lg text-ink/70 font-inter max-w-2xl">
                    Don't know where to start? Dive into our expert-curated lists designed to guide you through the masterpieces of history.
                </p>
            </div>

            <div className="relative w-full">
                {/* Carousel Gradient Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-paper to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-paper to-transparent z-10" />

                {/* Scrolling Container */}
                <motion.div
                    className="flex gap-8 px-6 md:px-32 w-max"
                    drag="x"
                    dragConstraints={{ right: 0, left: -600 }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {collections.map((item, i) => (
                        <div
                            key={i}
                            className="relative w-[200px] h-[300px] bg-white rounded shadow-lg border border-stone-100 flex-shrink-0 group overflow-hidden"
                        >
                            {/* Fallback visual if no cover image */}
                            <div className="absolute inset-0 bg-stone-200 flex flex-col items-center justify-center p-4 text-center">
                                <span className="font-playfair font-bold text-stone-400 italic">{item.cover}</span>
                            </div>

                            {/* Real Cover Image (if available, would go here) */}
                            {/* <Image src={`/images/covers/${item.slug}.jpg`} fill className="object-cover" /> */}

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-bold font-playfair text-sm">{item.title}</p>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate for infinite scroll feel if needed */}
                </motion.div>
            </div>
        </section>
    );
}
