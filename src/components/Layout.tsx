import React from 'react';
import { Heart, Menu, X, Sun, Moon, Shield } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
    children: React.ReactNode;
    onNavigate?: (view: string) => void;
    onVolunteer?: () => void;
    onGetHelp?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, onVolunteer, onGetHelp }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100 transition-colors duration-300">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 dark:bg-blue-500/10 blur-[100px]" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate?.('home')}>
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">
                                <Heart size={18} fill="currentColor" />
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                                CareConnect
                            </span>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            <button onClick={() => onNavigate?.('home')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Start Here</button>
                            <button onClick={onVolunteer} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Volunteer</button>

                            {/* Visible Admin Button */}
                            <button
                                onClick={() => onNavigate?.('admin')}
                                className="text-sm font-medium flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <Shield size={14} />
                                Admin
                            </button>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>

                            <button
                                onClick={onGetHelp}
                                className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200 dark:shadow-indigo-900/30 active:scale-95"
                            >
                                Get Help Now
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-4 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                            <button
                                className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <button onClick={() => { onNavigate?.('home'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400">Start Here</button>
                            <button onClick={() => { onVolunteer?.(); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400">Volunteer</button>
                            <button onClick={() => { onNavigate?.('admin'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400">Admin Dashboard</button>
                            <button
                                onClick={() => { onGetHelp?.(); setIsMenuOpen(false); }}
                                className="w-full mt-4 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30"
                            >
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
            <footer className="relative z-10 bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <Heart size={16} className="text-slate-400 dark:text-slate-600" />
                        <span className="font-display font-semibold text-slate-700 dark:text-slate-200">CareConnect</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        © 2026 CareConnect NGO. connecting communities.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
