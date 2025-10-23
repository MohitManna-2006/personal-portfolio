import { useState, useEffect } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-lightBlue dark:bg-darkBlue text:textLight dark:text-textDark transition-colors duration-500">
      <div className = "max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className = "text-6xl font-bold mb-4 text-accent">Mohit Manna</h1>
        <p className = "text-3xl mb-10 opacity-100">Personal Portfolio</p>
        <div className = "bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 md: p-10 shadow-sm">
          <p className="text-lg leading-relaxed">
          Welcome to my portfolio! This site features a beautiful light/dark mode
          toggle with your custom blue color scheme.
          </p>
        </div>
      </div>
    
    </div>
  );
}


