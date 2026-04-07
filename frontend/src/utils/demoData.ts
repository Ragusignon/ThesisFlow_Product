// Demo requests management with localStorage persistence

export interface DemoRequest {
  id: number;
  name: string;
  institution: string;
  email: string;
  phone: string;
  role: string;
  date: string;
  status: 'Pending' | 'Contacted' | 'Scheduled' | 'Completed';
  notes: string;
}

const STORAGE_KEY = 'thesisflow_demo_requests';

// Initialize with default data if none exists
const defaultDemoRequests: DemoRequest[] = [
  { id: 1, name: 'Dr. Sarah Johnson', institution: 'MIT', email: 'sjohnson@mit.edu', phone: '+1 617 253 1000', role: 'Dean', date: '2025-11-14', status: 'Pending', notes: 'Interested in enterprise plan for 500+ students' },
  { id: 2, name: 'Prof. Michael Chen', institution: 'Stanford University', email: 'mchen@stanford.edu', phone: '+1 650 723 2300', role: 'Professor', date: '2025-11-13', status: 'Contacted', notes: 'Wants demo for Computer Science department' },
  { id: 3, name: 'Dr. Emma Williams', institution: 'Oxford University', email: 'e.williams@ox.ac.uk', phone: '+44 1865 270000', role: 'Director', date: '2025-11-12', status: 'Scheduled', notes: 'Demo scheduled for Nov 20' },
  { id: 4, name: 'Prof. John Smith', institution: 'Harvard University', email: 'jsmith@harvard.edu', phone: '+1 617 495 1000', role: 'Department Head', date: '2025-10-28', status: 'Completed', notes: 'Completed demo, waiting for decision' },
  { id: 5, name: 'Dr. Maria Rodriguez', institution: 'Yale University', email: 'mrodriguez@yale.edu', phone: '+1 203 432 4771', role: 'Administrator', date: '2025-10-15', status: 'Contacted', notes: 'Follow-up needed' },
];

// Get all demo requests
export const getDemoRequests = (): DemoRequest[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with default data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDemoRequests));
    return defaultDemoRequests;
  } catch (error) {
    console.error('Error loading demo requests:', error);
    return defaultDemoRequests;
  }
};

// Update demo request status
export const updateDemoStatus = (id: number, status: DemoRequest['status']): void => {
  try {
    const requests = getDemoRequests();
    const request = requests.find(r => r.id === id);
    if (request) {
      request.status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    }
  } catch (error) {
    console.error('Error updating demo status:', error);
  }
};

// Remove a demo request
export const removeDemoRequest = (id: number): void => {
  try {
    const requests = getDemoRequests();
    const filtered = requests.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing demo request:', error);
  }
};

// Save demo request (for restore functionality)
export const saveDemoRequest = (request: DemoRequest): void => {
  try {
    const requests = getDemoRequests();
    const index = requests.findIndex(r => r.id === request.id);
    if (index >= 0) {
      requests[index] = request;
    } else {
      requests.push(request);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
  } catch (error) {
    console.error('Error saving demo request:', error);
  }
};
