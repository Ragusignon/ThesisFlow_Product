// Newsletter subscription management with localStorage persistence

export interface NewsletterSubscriber {
  id: number;
  name: string;
  email: string;
  date: string;
  source: string;
}

const STORAGE_KEY = 'thesisflow_newsletter_subscribers';

// Get all subscribers
export const getSubscribers = (): NewsletterSubscriber[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  } catch (error) {
    console.error('Error loading subscribers:', error);
    return [];
  }
};

// Add a new subscriber
export const addSubscriber = (email: string, name: string = 'Anonymous', source: string = 'Blog Page'): NewsletterSubscriber => {
  try {
    const subscribers = getSubscribers();
    
    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (existingSubscriber) {
      throw new Error('This email is already subscribed');
    }
    
    const newId = Math.max(...subscribers.map(s => s.id), 0) + 1;
    const newSubscriber: NewsletterSubscriber = {
      id: newId,
      name,
      email,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      source
    };
    
    subscribers.push(newSubscriber);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
    
    return newSubscriber;
  } catch (error) {
    throw error;
  }
};

// Remove a subscriber
export const removeSubscriber = (id: number): void => {
  try {
    const subscribers = getSubscribers();
    const filtered = subscribers.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing subscriber:', error);
  }
};

// Save subscriber (for restore functionality)
export const saveSubscriber = (subscriber: NewsletterSubscriber): void => {
  try {
    const subscribers = getSubscribers();
    const index = subscribers.findIndex(s => s.id === subscriber.id);
    if (index >= 0) {
      subscribers[index] = subscriber;
    } else {
      subscribers.push(subscriber);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
  } catch (error) {
    console.error('Error saving subscriber:', error);
  }
};
