import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollTo(() => setMobileMenuOpen(false));

  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-50 transition-colors ${
      isDark ? 'bg-gray-900/80' : 'bg-white/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold bg-gradient-to-r transition-all hover:scale-110 ${
              isDark
                ? 'from-blue-400 to-cyan-400 bg-clip-text text-transparent'
                : 'from-slate-700 to-slate-900 bg-clip-text text-transparent hover:from-slate-600 hover:to-slate-800'
            }`}
          >
            AB
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen
                ? <X size={24} className={isDark ? 'text-white' : 'text-slate-900'} />
                : <Menu size={24} className={isDark ? 'text-white' : 'text-slate-900'} />
              }
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-2 border-t ${isDark ? 'border-gray-700' : 'border-slate-200'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
