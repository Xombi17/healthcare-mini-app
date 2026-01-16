import React from 'react';
import { ArrowRight, Activity, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6">
                        <Activity size={14} />
                        Emergency Response Ready
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                        Healthcare support, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                            simplified by kindness.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                        Whether you need urgent assistance or want to volunteer your skills,
                        CareConnect bridges the gap with smart, compassionate support.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight size={18} />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95 flex items-center justify-center gap-2">
                            <Users size={18} className="text-indigo-600 dark:text-indigo-400" />
                            Join as Volunteer
                        </button>
                    </div>
                </motion.div>

                {/* Stats / Trust (Visual Interest) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200/60 dark:border-slate-800/60 pt-12"
                >
                    {[
                        { label: 'Community Members', value: '2,400+' },
                        { label: 'Volunteers Active', value: '150+' },
                        { label: 'Response Time', value: '< 2 hrs' },
                        { label: 'Support Available', value: '24/7' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold font-display text-slate-900 dark:text-white">{stat.value}</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
