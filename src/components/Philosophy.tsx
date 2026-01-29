import { Infinity, Lock, ShieldCheck } from "lucide-react";

export default function Philosophy() {
    const features = [
        {
            icon: <Infinity className="w-8 h-8 text-gold" />,
            title: "Forever Free Content",
            description: "Access 60,000+ titles from Project Gutenberg and LibriVox. Zero quotas. Zero friction."
        },
        {
            icon: <Lock className="w-8 h-8 text-gold" />,
            title: "One-Time Purchase",
            description: "Buy the app once. Own your experience forever. No monthly drip-feed. No subscriptions."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-gold" />,
            title: "Private & Local",
            description: "Your library is yours. Export your data, backup your notes. You own your files."
        }
    ];

    return (
        <section id="philosophy" className="py-24 bg-[#F5F5F7]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="p-3 bg-paper rounded-xl">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold font-playfair text-ink">{feature.title}</h3>
                            <p className="text-ink/70 font-inter leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
