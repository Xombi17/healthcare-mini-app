import React from 'react';

const testimonials = [
    {
        quote: "I was overwhelmed with anxiety during the shortage. EaseBot connected me to a counselor in 5 minutes.",
        author: "Sarah J.",
        role: "Patient",
        avatar: "SJ"
    },
    {
        quote: "As a nurse, I didn't have time to browse listings. The app sent me patients nearby who specifically needed injections.",
        author: "David Chen",
        role: "Medical Volunteer",
        avatar: "DC"
    },
    {
        quote: "The interface is so calming. It didn't feel like filling out a bureaucratic government form.",
        author: "Maria R.",
        role: "Patient",
        avatar: "MR"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-16">
                    Community Stories
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-lg">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-slate-200">{t.author}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-500">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">"{t.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
