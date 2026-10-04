import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, User } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
  time: string;
}

export const AgentSimulator: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'agent',
      text: `Hello! I am Rafay's AI Portfolio Agent. I can answer questions about Rafay's full-stack architecture, autonomous AI agents, internship experience, or 3D creative projects. What would you like to explore?`,
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "What is Rafay's strongest tech stack?",
    'Tell me about the KPI Dashboard project',
    'Is Rafay open to Full-Stack / AI roles?',
    'What makes Rafay different from other devs?',
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg: ChatMessage = { sender: 'user', text: userText, time: timeStr };
    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('stack') || lower.includes('tech') || lower.includes('skills')) {
        reply = `Rafay's primary full-stack stack is Next.js / React with TypeScript on the frontend, Python FastAPI and Node.js on the backend, with PostgreSQL (Neon) and Airtable for data. On the AI side, he builds autonomous agents with LLM tool calling, Google Gemini, and RAG architectures.`;
      } else if (lower.includes('kpi') || lower.includes('dashboard')) {
        reply = `The KPI Dashboard is a production Next.js + TypeScript application using Airtable as a live database. It provides real-time KPI scoring, department oversight, and employee performance management without mock data. You can test the live demo in the Projects section!`;
      } else if (lower.includes('hire') || lower.includes('role') || lower.includes('available') || lower.includes('job') || lower.includes('work')) {
        reply = `Yes! Rafay is currently open to Full-Stack Developer, AI Engineer, AI Agent / Automation Developer roles and high-impact freelance projects. You can reach out via srafay.dev@gmail.com or the contact form below.`;
      } else if (lower.includes('different') || lower.includes('why') || lower.includes('positioning')) {
        reply = `Rafay operates by the motto: "I don't just build websites. I build intelligent digital products." He combines core Computer Science & IT fundamentals with bleeding-edge AI agents, process automations, and creative 3D video generation.`;
      } else if (lower.includes('veggie') || lower.includes('3d') || lower.includes('animation') || lower.includes('creative')) {
        reply = `Veggie Village World is Rafay's original creative AI content brand featuring stylized 3D animated shorts, multi-scene character consistency, neural video generation pipelines, and high-retention family-friendly storytelling across Instagram, TikTok, and YouTube.`;
      } else {
        reply = `Thanks for asking! Rafay is an IT student at Virtual University of Pakistan specializing in Full-Stack Web Development, Agentic AI, and Automation. Feel free to explore his featured projects above or reach out directly to collaborate!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <section className="relative py-20 px-5 sm:px-8 bg-[#0C0C0C]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="rounded-[36px] bg-[#121218] border border-white/15 p-6 sm:p-9 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white shadow-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-kanit font-bold text-lg text-white">
                  Rafay AI Agent Assistant
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Interactive Knowledge Base</span>
                </div>
              </div>
            </div>

            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#D7E2EA]/60">
              Agent Simulator v2.0
            </span>
          </div>

          {/* Chat Messages Area */}
          <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 mb-6">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white rounded-tr-none'
                      : 'bg-[#181822] border border-white/10 text-[#D7E2EA] rounded-tl-none font-light'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[10px] text-white/40 mt-1.5 font-mono text-right">
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs font-mono text-purple-400 pl-11">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px]">Rafay Agent is synthesizing answer...</span>
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="mb-4 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-[#D7E2EA]/80 hover:text-white transition-all cursor-pointer text-left"
              >
                &ldquo;{prompt}&rdquo;
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputVal);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about Rafay's skills, AI projects, or availability..."
              className="flex-grow bg-[#0A0A0E] border border-white/10 rounded-full px-5 py-3 text-xs sm:text-sm text-white placeholder:text-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] font-light"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="w-11 h-11 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-lg flex-shrink-0 cursor-pointer"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
