// Referral management with localStorage persistence

export interface Referral {
  id: number;
  // Referrer information (examiner/scholar)
  referrerName: string;
  referrerEmail: string;
  referrerRole?: string;
  // Institution information
  institutionName: string;
  institutionType: string;
  country: string;
  websiteUrl?: string;
  // Contact person at institution
  contactPersonName?: string;
  contactPersonRole?: string;
  contactPersonEmail?: string;
  contactPersonLinkedIn?: string;
  // Additional details
  notes?: string;
  date: string;
  status: 'Pending' | 'Contacted' | 'Scheduled' | 'Completed';
}

const STORAGE_KEY = 'thesisflow_referrals';

// Get all referrals
export const getReferrals = (): Referral[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  } catch (error) {
    console.error('Error loading referrals:', error);
    return [];
  }
};

// Add a new referral
export const addReferral = (
  referrerName: string,
  referrerEmail: string,
  institutionName: string,
  institutionType: string,
  country: string,
  referrerRole?: string,
  websiteUrl?: string,
  contactPersonName?: string,
  contactPersonRole?: string,
  contactPersonEmail?: string,
  contactPersonLinkedIn?: string,
  notes?: string
): Referral => {
  try {
    const referrals = getReferrals();
    
    // Check if institution already exists
    const existingReferral = referrals.find(
      ref => ref.institutionName.toLowerCase() === institutionName.toLowerCase()
    );
    if (existingReferral) {
      throw new Error('This institution has already been referred');
    }
    
    const newId = Math.max(...referrals.map(r => r.id), 0) + 1;
    const newReferral: Referral = {
      id: newId,
      referrerName,
      referrerEmail,
      referrerRole: referrerRole || undefined,
      institutionName,
      institutionType,
      country,
      websiteUrl: websiteUrl || undefined,
      contactPersonName: contactPersonName || undefined,
      contactPersonRole: contactPersonRole || undefined,
      contactPersonEmail: contactPersonEmail || undefined,
      contactPersonLinkedIn: contactPersonLinkedIn || undefined,
      notes: notes || undefined,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Pending'
    };
    
    referrals.push(newReferral);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(referrals));
    
    return newReferral;
  } catch (error) {
    throw error;
  }
};

// Update referral status
export const updateReferralStatus = (id: number, status: 'Pending' | 'Contacted' | 'Scheduled' | 'Completed'): void => {
  try {
    const referrals = getReferrals();
    const referral = referrals.find(r => r.id === id);
    if (referral) {
      referral.status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(referrals));
    }
  } catch (error) {
    console.error('Error updating referral status:', error);
  }
};

// Remove a referral
export const removeReferral = (id: number): void => {
  try {
    const referrals = getReferrals();
    const filtered = referrals.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing referral:', error);
  }
};

// Save referral (for restore functionality)
export const saveReferral = (referral: Referral): void => {
  try {
    const referrals = getReferrals();
    const index = referrals.findIndex(r => r.id === referral.id);
    if (index >= 0) {
      referrals[index] = referral;
    } else {
      referrals.push(referral);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(referrals));
  } catch (error) {
    console.error('Error saving referral:', error);
  }
};