import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-primary)] flex items-center justify-center hover:border-[var(--border-brand)] hover:bg-[var(--bg-brand-subtle)] transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[var(--text-secondary)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--text-brand)]" />
      )}
    </button>
  );
}
