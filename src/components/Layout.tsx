import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/30 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[100px]" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                <Heart size={18} fill="currentColor" />
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                                CareConnect
                            </span>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Start Here</a>
                            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Volunteer</a>
                            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Resources</a>
                            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200 active:scale-95">
                                Get Help Now
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-slate-200/50 bg-white/90 backdrop-blur-md">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">Start Here</a>
                            <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">Volunteer</a>
                            <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600">Resources</a>
                            <button className="w-full mt-4 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-200">
                                Get Help Now
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-20 pb-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 bg-white border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <Heart size={16} className="text-slate-400" />
                        <span className="font-display font-semibold text-slate-700">CareConnect</span>
                    </div>
                    <p className="text-sm text-slate-500">
                        © 2026 CareConnect NGO. connecting communities.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
