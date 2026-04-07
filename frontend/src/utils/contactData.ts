// Contact messages management with localStorage persistence

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'New' | 'Replied';
}

const STORAGE_KEY = 'thesisflow_contact_messages';

// Get all contact messages
export const getContactMessages = (): ContactMessage[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  } catch (error) {
    console.error('Error loading contact messages:', error);
    return [];
  }
};

// Add a new contact message
export const addContactMessage = (
  name: string,
  email: string,
  subject: string,
  message: string
): ContactMessage => {
  try {
    const messages = getContactMessages();
    const newId = Math.max(...messages.map(m => m.id), 0) + 1;
    const newMessage: ContactMessage = {
      id: newId,
      name,
      email,
      subject,
      message,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'New'
    };
    
    messages.push(newMessage);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    
    return newMessage;
  } catch (error) {
    throw error;
  }
};

// Update message status
export const updateMessageStatus = (id: number, status: 'New' | 'Replied'): void => {
  try {
    const messages = getContactMessages();
    const message = messages.find(m => m.id === id);
    if (message) {
      message.status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  } catch (error) {
    console.error('Error updating message status:', error);
  }
};

// Remove a contact message
export const removeContactMessage = (id: number): void => {
  try {
    const messages = getContactMessages();
    const filtered = messages.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing message:', error);
  }
};

// Save contact message (for restore functionality)
export const saveContactMessage = (message: ContactMessage): void => {
  try {
    const messages = getContactMessages();
    const index = messages.findIndex(m => m.id === message.id);
    if (index >= 0) {
      messages[index] = message;
    } else {
      messages.push(message);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving message:', error);
  }
};
