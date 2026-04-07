// Theme-aware utility classes
export const themeClasses = {
  // Text colors
  text: {
    primary: 'text-[var(--text-primary)]',
    secondary: 'text-[var(--text-secondary)]',
    tertiary: 'text-[var(--text-tertiary)]',
    brand: 'text-[var(--text-brand)]',
  },
  
  // Background colors
  bg: {
    primary: 'bg-[var(--bg-primary)]',
    secondary: 'bg-[var(--bg-secondary)]',
    tertiary: 'bg-[var(--bg-tertiary)]',
    brand: 'bg-[var(--bg-brand)]',
    brandHover: 'hover:bg-[var(--bg-brand-hover)]',
    brandSubtle: 'bg-[var(--bg-brand-subtle)]',
    brandSubtleHover: 'hover:bg-[var(--bg-brand-subtle-hover)]',
    card: 'bg-[var(--card)]',
  },
  
  // Border colors
  border: {
    primary: 'border-[var(--border-primary)]',
    secondary: 'border-[var(--border-secondary)]',
    brand: 'border-[var(--border-brand)]',
    brandSubtle: 'border-[var(--border-brand-subtle)]',
    brandHover: 'hover:border-[var(--border-brand)]',
  },
  
  // Gradients
  gradient: {
    brand: 'bg-[image:var(--gradient-brand)]',
    bgSubtle: 'bg-[image:var(--gradient-bg-subtle)]',
    bgSecondary: 'bg-[image:var(--gradient-bg-secondary)]',
  },
  
  // Combined utility classes
  button: {
    primary: 'bg-[var(--bg-brand)] text-white hover:bg-[var(--bg-brand-hover)] transition-all duration-300',
    secondary: 'bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--border-brand)] hover:bg-[var(--bg-brand-subtle)] transition-all duration-300',
    ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand-subtle)] transition-all duration-300',
  },
  
  card: {
    default: 'bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl',
    hover: 'hover:border-[var(--border-brand-subtle)] hover:shadow-[var(--shadow-md)] transition-all duration-300',
  },
  
  input: {
    default: 'bg-[var(--input-background)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] transition-colors',
  },
};
