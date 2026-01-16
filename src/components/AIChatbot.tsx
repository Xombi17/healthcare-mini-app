import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, ArrowRight, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIChatbotProps {
    onRecommendation: (type: 'patient' | 'volunteer', category: string) => void;
}

type Message = {
    id: string;
    sender: 'bot' | 'user';
    text: string;
    options?: { label: string; value: string }[];
};

const AIChatbot: React.FC<AIChatbotProps> = ({ onRecommendation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'bot',
            text: "Hi! I'm EaseBot. I can help connect you to the right resources quickly. How can I help today?",
            options: [
                { label: "I need help", value: "need_help" },
                { label: "I want to help", value: "want_help" },
            ],
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleOptionClick = async (option: { label: string; value: string }) => {
        // Add user message
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), sender: 'user', text: option.label },
        ]);

        setIsTyping(true);

        // Simulate bot thinking
        setTimeout(() => {
            let nextMessage: Message;

            if (option.value === 'need_help') {
                nextMessage = {
                    id: Date.now().toString(),
                    sender: 'bot',
                    text: "I understand. To get you the right support, what type of assistance do you need?",
                    options: [
                        { label: "Medical / Nursing", value: "medical" },
                        { label: "Supplies / Food", value: "logistics" },
                        { label: "Mental Health", value: "mental_health" },
                    ],
                };
            } else if (option.value === 'want_help') {
                nextMessage = {
                    id: Date.now().toString(),
                    sender: 'bot',
                    text: "That's wonderful! What kind of skills can you offer?",
                    options: [
                        { label: "Medical Professional", value: "medical_volunteer" },
                        { label: "Logistics / Driving", value: "logistics_volunteer" },
                        { label: "Emotional Support", value: "support_volunteer" },
                    ],
                };
            } else {
                // Final Step - Recommendation
                const isVolunteer = option.value.includes('volunteer');
                const type = isVolunteer ? 'volunteer' : 'patient';
                const category = option.label;

                nextMessage = {
                    id: Date.now().toString(),
                    sender: 'bot',
                    text: `Got it. I'm opening the ${isVolunteer ? 'Volunteer' : 'Patient Support'} form for ${category}.`,
                };

                // Notify parent
                setTimeout(() => onRecommendation(type, category), 1000);
            }

            setMessages((prev) => [...prev, nextMessage]);
            setIsTyping(false);
        }, 1000);
    };

    // Minimized state
    if (!isOpen) {
        return (
            <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-indigo-600 text-white p-4 rounded-full shadow-lg shadow-indigo-300 flex items-center gap-3 pr-6 hover:bg-indigo-700 transition-colors"
            >
                <div className="relative">
                    <Bot size={24} />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-indigo-600 rounded-full"></span>
                </div>
                <div className="text-left">
                    <p className="text-xs font-medium text-indigo-200 uppercase tracking-wider">Ai Triage</p>
                    <p className="font-bold text-sm">Start Assessment</p>
                </div>
            </motion.button>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 w-[90vw] max-w-[380px] bg-white rounded-3xl shadow-2xl shadow-slate-300/50 border border-slate-100 overflow-hidden flex flex-col max-h-[600px]"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Bot size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">EaseBot</h3>
                        <p className="text-xs text-indigo-100 flex items-center gap-1">
                            <Sparkles size={10} />
                            Smart Triage
                        </p>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                    <X size={20} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.sender === 'bot' && (
                            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-1 shrink-0 text-indigo-600">
                                <Bot size={14} />
                            </div>
                        )}
                        <div
                            className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-indigo-600 text-white rounded-tr-sm'
                                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 text-indigo-600">
                            <Bot size={14} />
                        </div>
                        <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Options Area (Input) */}
            <div className="p-4 bg-white border-t border-slate-100">
                <div className="flex flex-wrap gap-2 justify-end">
                    {messages[messages.length - 1].sender === 'bot' &&
                        !isTyping &&
                        messages[messages.length - 1].options?.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => handleOptionClick(opt)}
                                className="px-4 py-2 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100 flex items-center gap-1 active:scale-95"
                            >
                                {opt.label}
                                <ArrowRight size={12} />
                            </button>
                        ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AIChatbot;
