// Trash management for deleted items
// Items are kept for 12 months (1 year) before permanent deletion - MANDATORY RETENTION POLICY

export interface TrashItem {
  id: number;
  originalId: number;
  type: 'blog' | 'documentation' | 'demo' | 'contact' | 'newsletter' | 'referral';
  data: any;
  deletedDate: string;
  expiryDate: string;
}

const TRASH_STORAGE_KEY = 'migri_admin_trash';
const TRASH_RETENTION_MONTHS = 12; // 1 year mandatory retention

// Get all trash items
export const getTrashItems = (): TrashItem[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(TRASH_STORAGE_KEY);
  if (!data) return [];
  
  const items = JSON.parse(data);
  
  // Clean up expired items automatically
  const now = new Date();
  const validItems = items.filter((item: TrashItem) => {
    return new Date(item.expiryDate) > now;
  });
  
  // Save back if we removed any expired items
  if (validItems.length !== items.length) {
    localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify(validItems));
  }
  
  return validItems;
};

// Add item to trash
export const addToTrash = (type: TrashItem['type'], originalId: number, data: any): void => {
  try {
    const items = getTrashItems();
    const deletedDate = new Date();
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + TRASH_RETENTION_MONTHS);
    
    const newItem: TrashItem = {
      id: Date.now(),
      originalId,
      type,
      data,
      deletedDate: deletedDate.toISOString(),
      expiryDate: expiryDate.toISOString()
    };
    
    items.push(newItem);
    localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('CRITICAL ERROR: Failed to add item to trash:', error);
    throw new Error('Failed to save item to trash. Data not deleted to prevent loss.');
  }
};

// Remove item from trash (permanent delete)
export const permanentlyDelete = (id: number): void => {
  const items = getTrashItems();
  const filtered = items.filter(item => item.id !== id);
  localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify(filtered));
};

// Restore item from trash
export const restoreFromTrash = (id: number): TrashItem | null => {
  const items = getTrashItems();
  const item = items.find(i => i.id === id);
  
  if (item) {
    // Remove from trash
    const filtered = items.filter(i => i.id !== id);
    localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify(filtered));
  }
  
  return item || null;
};

// Get trash items by type
export const getTrashByType = (type: TrashItem['type']): TrashItem[] => {
  return getTrashItems().filter(item => item.type === type);
};

// Get days until expiry
export const getDaysUntilExpiry = (expiryDate: string): number => {
  const expiry = new Date(expiryDate);
  const now = new Date();
  const diffTime = expiry.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
};

// Empty trash (delete all expired items)
export const emptyTrash = (): void => {
  const items = getTrashItems();
  const now = new Date();
  const validItems = items.filter(item => new Date(item.expiryDate) > now);
  localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify(validItems));
};

// Empty all trash (delete everything)
export const emptyAllTrash = (): void => {
  localStorage.setItem(TRASH_STORAGE_KEY, JSON.stringify([]));
};
