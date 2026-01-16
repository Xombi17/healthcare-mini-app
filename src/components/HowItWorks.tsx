import React from 'react';
import { MessageSquare, ClipboardCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: MessageSquare,
        title: 'Chat with EaseBot',
        desc: 'Answer 2 simple questions to help us understand if you need medical, logistical, or emotional support.',
        color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
    },
    {
        icon: ClipboardCheck,
        title: 'Smart Matching',
        desc: 'Our AI instantly matches your request with the right specialist or community volunteer nearby.',
        color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
        icon: HeartHandshake,
        title: 'Get Connected',
        desc: 'A verified volunteer contacts you within 2 hours to provide the specific help you requested.',
        color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                        How CareConnect Works
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
                        We've removed the red tape. Getting help (or giving it) should be as simple as sending a text.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-200 via-blue-200 to-emerald-200 dark:from-indigo-800 dark:via-blue-800 dark:to-emerald-800 z-0"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-slate-100 dark:shadow-none`}>
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
