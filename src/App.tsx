import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SupportForm from './components/SupportForm';
import AIChatbot from './components/AIChatbot';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [formType, setFormType] = useState<'patient' | 'volunteer' | null>(null);
  const [formCategory, setFormCategory] = useState<string>('');

  const handleAIRecommendation = (type: 'patient' | 'volunteer', category: string) => {
    setFormType(type);
    setFormCategory(category);
    // Smooth scroll to form
    setTimeout(() => {
      document.getElementById('support-interaction')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Layout>
      <Hero />

      {/* Main Interaction Area */}
      <div id="support-interaction" className="max-w-4xl mx-auto px-4 pb-24 min-h-[400px]">
        <AnimatePresence mode="wait">
          {formType ? (
            <SupportForm key="form" type={formType} category={formCategory} />
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-400 dark:text-slate-500 text-sm uppercase tracking-wide font-medium">Use the AI Assistant to get started</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      <HowItWorks />
      <Testimonials />

      <AIChatbot onRecommendation={handleAIRecommendation} />
    </Layout>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
