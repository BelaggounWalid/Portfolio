import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const knowledgeBase = {
  formation: {
    keywords: ['formation', 'études', 'diplôme', 'université', 'master', 'licence', 'école'],
    response: "Je suis actuellement en Master Informatique à l'Université Claude Bernard Lyon 1 depuis septembre 2025. J'ai obtenu ma Licence Informatique à l'Université d'Avignon (2023-2025) où j'étais classé 5ème sur 71 étudiants (15.15/20). J'ai également fait une classe préparatoire intégrée à l'ESI en Algérie (2021-2023)."
  },
  projets: {
    keywords: ['projet', 'réalisation', 'développement', 'application', 'chatbot', 'studyhive', 'wordle'],
    response: "Mes principaux projets incluent : 1) Un Chatbot RH Intelligent basé sur RAG avec LangChain et ChromaDB, 2) StudyHive - une plateforme collaborative avec lecture YouTube synchronisée et WebRTC, 3) Un clone de Wordle avec système d'indices intelligent utilisant Word2Vec, 4) Des analyses factorielles sur les températures en capitales européennes."
  },
  competences: {
    keywords: ['compétence', 'skill', 'technologie', 'langage', 'framework', 'outil'],
    response: "Mes compétences principales : Intelligence Artificielle (Python, Pandas, NumPy, NLP, HuggingFace), Développement Web (React, Node.js, Express, MongoDB), DevOps (Git, Docker, Jenkins), Data Science (R, Excel VBA, ACP). Je maîtrise également l'anglais niveau C2 certifié LanguageCert."
  },
  experience: {
    keywords: ['expérience', 'stage', 'travail', 'alternance', 'recherche'],
    response: "J'ai effectué un stage de recherche au Laboratoire de Mathématiques d'Avignon (mai-juillet 2025) sur l'Approximate Bayesian Computation pour les processus de Hawkes. Je recherche actuellement une alternance à partir de septembre 2025 en Intelligence Artificielle et développement web."
  },
  contact: {
    keywords: ['contact', 'email', 'téléphone', 'linkedin', 'github', 'joindre'],
    response: "Vous pouvez me contacter par email à aniswalidbelaggoun@gmail.com, par téléphone au 07 44 80 56 01, ou sur LinkedIn (anisBelaggoun) et GitHub (BelaggounWalid). Je suis basé à Villeurbanne (69100), France."
  },
  presentation: {
    keywords: ['qui', 'présentation', 'profil', 'à propos', 'parcours'],
    response: "Je suis Anis BELAGGOUN, étudiant en Master Informatique à Lyon 1, passionné par l'Intelligence Artificielle et le développement web. J'ai 21 ans et je recherche une alternance pour mettre en pratique mes compétences en IA et approfondir mon expertise."
  }
};

export default function Chatbot({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis l'assistant virtuel d'Anis. Posez-moi des questions sur son parcours, ses compétences ou ses projets !", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    let bestMatch = { category: '', score: 0 };

    for (const [category, data] of Object.entries(knowledgeBase)) {
      const matchCount = data.keywords.filter(keyword =>
        lowerQuery.includes(keyword)
      ).length;

      if (matchCount > bestMatch.score) {
        bestMatch = { category, score: matchCount };
      }
    }

    if (bestMatch.score > 0) {
      return knowledgeBase[bestMatch.category as keyof typeof knowledgeBase].response;
    }

    return "Je n'ai pas compris votre question. Vous pouvez me demander des informations sur la formation, les projets, les compétences, l'expérience ou les coordonnées d'Anis.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = findBestResponse(inputValue);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 500);

    setInputValue('');
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
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
