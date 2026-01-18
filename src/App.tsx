import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SupportForm from './components/SupportForm';
import AIChatbot from './components/AIChatbot';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import AdminDashboard from './components/AdminDashboard';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import type { Volunteer } from './types';

// Mock Data moved to App level
const initialVolunteers = [
  {
    id: 1,
    name: "Alex Rivera",
    bio: "I'm a registered nurse with 5 years of experience in ER. I have a 4x4 truck and can help with deliveries in rough weather. Fluent in Spanish.",
    status: "Pending",
    tags: [] as string[],
    email: "alex.rivera@example.com",
    phone: "+1 (555) 012-3456",
    location: "Downtown",
    joined: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    bio: " retired teacher, I have a lot of free time on weekends. I can cook large meals and have a food hygiene certificate. No car though.",
    status: "Pending",
    tags: [] as string[],
    email: "sarah.j@example.com",
    phone: "+1 (555) 098-7654",
    location: "Westside",
    joined: "5 hours ago"
  },
  {
    id: 3,
    name: "Dr. Mike Chen",
    bio: "General Practitioner available for telehealth consults on evenings. Can also prescribe basic meds. Speak Mandarin and English.",
    status: "Active",
    tags: [] as string[],
    email: "dr.chen@clinic.com",
    phone: "+1 (555) 555-0199",
    location: "North Hills",
    joined: "1 week ago"
  }
];

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [formType, setFormType] = useState<'patient' | 'volunteer' | null>(null);
  const [formCategory, setFormCategory] = useState<string>('');

  // Centralized State
  const [volunteers, setVolunteers] = useState<Volunteer[]>(initialVolunteers);

  const scrollToSupport = () => {
    // Smooth scroll to form
    setTimeout(() => {
      document.getElementById('support-interaction')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  const handleAIRecommendation = (type: 'patient' | 'volunteer', category: string) => {
    setFormType(type);
    setFormCategory(category);
    scrollToSupport();
  };

  const handleManualSelection = (type: 'patient' | 'volunteer') => {
    setFormType(type);
    setFormCategory('General'); // Default category
    scrollToSupport();
  }

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (data: Omit<Volunteer, 'id' | 'tags' | 'status' | 'joined'>) => {
    const newEntry: Volunteer = {
      id: Date.now(),
      ...data,
      status: 'Pending',
      tags: [],
      joined: 'Just now'
    };
    setVolunteers(prev => [newEntry, ...prev]);
  };

  if (currentView === 'admin') {
    return (
      <Layout onNavigate={handleNavigate}>
        <AdminDashboard volunteers={volunteers} setVolunteers={setVolunteers} />
      </Layout>
    );
  }

  return (
    <Layout
      onNavigate={handleNavigate}
      onVolunteer={() => handleManualSelection('volunteer')}
      onGetHelp={() => handleManualSelection('patient')}
    >
      <Hero
        onGetStarted={() => scrollToSupport()}
        onVolunteer={() => handleManualSelection('volunteer')}
      />

      {/* Main Interaction Area */}
      <div id="support-interaction" className="max-w-4xl mx-auto px-4 pb-24 min-h-[400px]">
        <AnimatePresence mode="wait">
          {formType ? (
            <SupportForm
              key="form"
              type={formType}
              category={formCategory}
              onSubmit={handleFormSubmit}
            />
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
