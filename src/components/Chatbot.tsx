import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const knowledgeBase = {
  formation: "Anis est actuellement en Master Informatique à l'Université Claude Bernard Lyon 1 depuis septembre 2025. Il a obtenu sa Licence Informatique à l'Université d'Avignon (2023-2025). Il a également fait une classe préparatoire intégrée à l'ESI en Algérie (2021-2023).",
  projets: "Les projets d'Anis incluent : 1) Chatbot RH Intelligent basé sur RAG avec LangChain et ChromaDB, 2) StudyHive - plateforme collaborative avec lecture YouTube synchronisée et WebRTC, 3) Clone de Wordle avec Word2Vec, 4) WildFire Simulation en Java, 5) Monitoring System en Python avec Flask.",
  competences: "Anis maîtrise l'Intelligence Artificielle (Python, Pandas, NumPy, NLP, HuggingFace), le Développement Web (React, Node.js, TypeScript, Tailwind), le Backend (Express, Flask, MongoDB), DevOps (Git, Docker, CI/CD). Il parle anglais niveau C2 certifié LanguageCert et français courant.",
  experience: "Anis a effectué un stage de recherche au Laboratoire de Mathématiques d'Avignon (mai-juillet 2025) sur l'Approximate Bayesian Computation. Il recherche une alternance à partir de septembre 2025.",
  contact: "Email: aniswalidbelaggoun@gmail.com, Discord: anisbelaggoun_46805, LinkedIn: https://www.linkedin.com/in/anis-belaggoun-1aa4a72a4/, GitHub: BelaggounWalid, Localisation: Villeurbanne (69100), France.",
  presentation: "Anis BELAGGOUN est étudiant en Master Informatique à Lyon 1, passionné par l'IA et le développement web. Il a 22 ans et recherche une alternance."
};

const DEEPSEEK_API_KEY = 'sk-1fe1f7693c5b46698f7c59b10148dad4';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

const retrieveContext = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  let context = "Information sur Anis BELAGGOUN:\n\n";
  
  const relevantSections = [];
  if (lowerQuery.includes('formation') || lowerQuery.includes('étud') || lowerQuery.includes('diplôm')) relevantSections.push(knowledgeBase.formation);
  if (lowerQuery.includes('projet') || lowerQuery.includes('réalisat')) relevantSections.push(knowledgeBase.projets);
  if (lowerQuery.includes('compéten') || lowerQuery.includes('skill') || lowerQuery.includes('technolog')) relevantSections.push(knowledgeBase.competences);
  if (lowerQuery.includes('expérience') || lowerQuery.includes('stage') || lowerQuery.includes('alternance')) relevantSections.push(knowledgeBase.experience);
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('discord') || lowerQuery.includes('linkedin')) relevantSections.push(knowledgeBase.contact);
  
  if (relevantSections.length === 0) {
    // Return all context if no specific match
    context += knowledgeBase.presentation + "\n\n" + knowledgeBase.formation + "\n\n" + knowledgeBase.projets;
  } else {
    context += relevantSections.join("\n\n");
  }
  
  return context;
};

export default function Chatbot({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis l'assistant virtuel d'Anis. Posez-moi des questions sur son parcours, ses compétences ou ses projets !", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Retrieve relevant context
    const context = retrieveContext(inputValue);
    
    try {
      const response = await fetch(DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `Tu es l'assistant virtuel d'Anis BELAGGOUN, étudiant en Master Informatique. Réponds toujours en français de manière amicale et professionnelle. Utilise uniquement les informations fournies dans le contexte.`
            },
            {
              role: 'user',
              content: `Contexte sur Anis:\n${context}\n\nQuestion de l'utilisateur: ${inputValue}`
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      const botResponse = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu obtenir de réponse.";
      
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error('Error calling Deepseek API:', error);
      setMessages(prev => [...prev, { text: "Désolé, une erreur s'est produite. Veuillez réessayer.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 ${
          isDark
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <MessageCircle size={28} className="text-white" />
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col z-50 ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex items-center justify-between p-4 border-b bg-blue-600 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Assistant Anis</h3>
                <p className="text-xs text-blue-100">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
            isDark ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? isDark
                        ? 'bg-gray-700 text-white'
                        : 'bg-white text-gray-900 shadow-md'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900 shadow-md'
                }`}>
                  <Loader2 className="animate-spin" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={`p-4 border-t ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 size={20} className="text-white animate-spin" />
                ) : (
                  <Send size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
