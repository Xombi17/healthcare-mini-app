import React, { useState } from 'react';
import { CheckCircle, User, Phone, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface SupportFormProps {
    type: 'patient' | 'volunteer' | null;
    category?: string;
}

const SupportForm: React.FC<SupportFormProps> = ({ type, category }) => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (!type) return null;

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-xl mx-auto p-10 bg-white rounded-3xl shadow-xl shadow-indigo-100 border border-indigo-50 text-center"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600">
                    Thank you. Our team has been notified. We will contact you within 2 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-medium hover:text-indigo-700 underline"
                >
                    Submit another request
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
        >
            <div className={`p-6 ${type === 'patient' ? 'bg-indigo-50 border-b border-indigo-100' : 'bg-emerald-50 border-b border-emerald-100'}`}>
                <h2 className={`text-xl font-display font-semibold ${type === 'patient' ? 'text-indigo-900' : 'text-emerald-900'}`}>
                    {type === 'patient' ? 'Patient Support Request' : 'Volunteer Registration'}
                </h2>
                {category && (
                    <div className="mt-2 text-sm font-medium px-3 py-1 bg-white/60 rounded-full inline-block backdrop-blur-sm border border-black/5">
                        Category: <span className="capitalize">{category}</span>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <div className="relative">
                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                required
                                type="text"
                                placeholder="Ex. Jane Doe"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <div className="relative">
                            <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                required
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                        <div className="relative">
                            <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                required
                                type="text"
                                placeholder="City, Neighborhood"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            {type === 'patient' ? 'Describe your needs' : 'Skills & Availability'}
                        </label>
                        <div className="relative">
                            <FileText size={18} className="absolute left-3 top-3 text-slate-400" />
                            <textarea
                                required
                                rows={3}
                                placeholder={type === 'patient' ? "I need help with medicine delivery..." : "I have a car and can assist weekends..."}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400 text-slate-900 resize-none"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl text-white font-medium shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98] ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800'
                        }`}
                >
                    {loading ? 'Submitting...' : 'Submit Request'}
                </button>
            </form>
        </motion.div>
    );
};

export default SupportForm;
