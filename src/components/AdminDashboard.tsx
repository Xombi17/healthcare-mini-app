import React, { useState } from 'react';
import { Search, Sparkles, Filter, Check, Clock, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data with "Unstructured" Bios
const initialVolunteers = [
    {
        id: 1,
        name: "Alex Rivera",
        bio: "I'm a registered nurse with 5 years of experience in ER. I have a 4x4 truck and can help with deliveries in rough weather. Fluent in Spanish.",
        status: "Pending",
        tags: [] as string[]
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        bio: " retired teacher, I have a lot of free time on weekends. I can cook large meals and have a food hygiene certificate. No car though.",
        status: "Pending",
        tags: [] as string[]
    },
    {
        id: 3,
        name: "Dr. Mike Chen",
        bio: "General Practitioner available for telehealth consults on evenings. Can also prescribe basic meds. Speak Mandarin and English.",
        status: "Active",
        tags: [] as string[]
    }
];

const AdminDashboard: React.FC = () => {
    const [volunteers, setVolunteers] = useState(initialVolunteers);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analyzed, setAnalyzed] = useState(false);

    // Simulated AI "Smart Tagging" Logic
    const runAIAnalysis = () => {
        setIsAnalyzing(true);

        // Simulate processing delay
        setTimeout(() => {
            const updated = volunteers.map(v => {
                const tags = [];
                const text = v.bio.toLowerCase();

                // Keyword extraction (simulating NLP)
                if (text.includes('nurse') || text.includes('practitioner') || text.includes('meds')) tags.push('Medical Pro');
                if (text.includes('truck') || text.includes('car')) tags.push('Has Vehicle');
                if (text.includes('spanish') || text.includes('mandarin')) tags.push('Multilingual');
                if (text.includes('cook') || text.includes('food')) tags.push('Food Prep');
                if (text.includes('telehealth')) tags.push('Telehealth');

                return { ...v, tags };
            });

            setVolunteers(updated);
            setIsAnalyzing(false);
            setAnalyzed(true);
        }, 1500);
    };

    return (
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Shield size={20} className="text-indigo-600 dark:text-indigo-400" />
                            <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">Admin Command Center</span>
                        </div>
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Volunteer & Resource Triage</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Manage incoming support applications with AI assistance.</p>
                    </div>

                    <button
                        onClick={runAIAnalysis}
                        disabled={isAnalyzing || analyzed}
                        className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-lg active:scale-95 ${analyzed
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 cursor-default'
                                : 'bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-400 shadow-indigo-200 dark:shadow-indigo-900/30'
                            }`}
                    >
                        {isAnalyzing ? (
                            <>
                                <Clock size={18} className="animate-spin" />
                                Analyzing Bios...
                            </>
                        ) : analyzed ? (
                            <>
                                <Check size={18} />
                                AI Analysis Complete
                            </>
                        ) : (
                            <>
                                <Sparkles size={18} />
                                Run AI Auto-Tagging
                            </>
                        )}
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: 'Pending Apps', value: '12', color: 'text-orange-500' },
                        { label: 'Active Volunteers', value: '148', color: 'text-emerald-500' },
                        { label: 'Medical Pros', value: '42', color: 'text-blue-500' },
                        { label: 'Logistics/Driven', value: '56', color: 'text-indigo-500' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="text-2xl font-bold font-display text-slate-900 dark:text-white">{stat.value}</div>
                            <div className={`text-xs font-bold uppercase tracking-wide mt-1 ${stat.color}`}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* List */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 dark:text-white">Recent Applications</h3>
                        <div className="flex gap-2 text-slate-400">
                            <Filter size={18} className="cursor-pointer hover:text-slate-600 dark:hover:text-slate-300" />
                            <Search size={18} className="cursor-pointer hover:text-slate-600 dark:hover:text-slate-300" />
                        </div>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {volunteers.map((v) => (
                            <motion.div
                                layout
                                key={v.id}
                                className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            >
                                <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className="font-bold text-lg text-slate-900 dark:text-white">{v.name}</h4>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${v.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                                                {v.status}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">"{v.bio}"</p>

                                        {/* Smart Tags Area */}
                                        <div className="mt-4 flex flex-wrap gap-2 min-h-[24px]">
                                            <AnimatePresence>
                                                {v.tags.length > 0 ? (
                                                    v.tags.map((tag, i) => (
                                                        <motion.span
                                                            key={tag}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.1 }}
                                                            className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-xs font-semibold flex items-center gap-1"
                                                        >
                                                            <Sparkles size={10} />
                                                            {tag}
                                                        </motion.span>
                                                    ))
                                                ) : (
                                                    analyzed && <span className="text-xs text-slate-400 italic">No specific tags detected by AI.</span>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                            View Profile
                                        </button>
                                        <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-indigo-600 rounded-lg hover:bg-slate-800 dark:hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-100 dark:shadow-none">
                                            Approve
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
