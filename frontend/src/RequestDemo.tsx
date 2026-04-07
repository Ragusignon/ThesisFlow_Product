import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { Calendar, Clock, Video, Users, CheckCircle2, Building2, Mail, Phone, User, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

// Helper functions for managing bookings
const BOOKINGS_KEY = 'thesisflow_demo_bookings';

interface Booking {
  date: string; // ISO date string
  time: string;
  institutionName: string;
  email: string;
}

const getBookedSlots = (): Booking[] => {
  try {
    const stored = localStorage.getItem(BOOKINGS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const addBooking = (booking: Booking) => {
  const bookings = getBookedSlots();
  bookings.push(booking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
};

const isSlotBooked = (date: Date, time: string): boolean => {
  const bookings = getBookedSlots();
  const dateStr = date.toISOString().split('T')[0];
  return bookings.some(b => b.date === dateStr && b.time === time);
};

export default function RequestDemo({ onNavigate }: any) {
  const [step, setStep] = useState<'select-time' | 'details' | 'confirmation'>('select-time');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    institutionName: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
    timezone: '',
    country: '',
    attendees: '1-5',
    additionalInfo: ''
  });

  return (
    <PageLayout onNavigate={onNavigate} currentPage="request-demo">
      <SEO
        title="Schedule a Personalized Demo - Thesisflow"
        description="Book a personalized demo with our team to see how Thesisflow can transform thesis management at your institution."
        keywords="Thesisflow, demo, thesis management, university, publisher, research, library, IT, administrator, graduate program, department head, dean, director"
      />
      <div className="pt-20 pb-20 bg-[var(--bg-primary)] min-h-screen">
        
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
              <Video className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-xs)' }} className="text-[var(--text-brand)]">Schedule Your Personalized Demo</span>
            </div>
            
            <h1 className="mb-6" style={{ fontSize: 'var(--text-3xl)' }}>
              See Thesisflow in Action
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
              Book a personalized demo with our team. We'll show you how Thesisflow can transform thesis management at your institution.
            </p>

            {/* Demo Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Clock,
                  title: '60-Minute Session',
                  description: 'Comprehensive demo tailored to your needs'
                },
                {
                  icon: Video,
                  title: 'Live Walkthrough',
                  description: 'Interactive Q&A with our team'
                },
                {
                  icon: Users,
                  title: 'Team Welcome',
                  description: 'Bring your entire team'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-[var(--text-brand)]" />
                  </div>
                  <h3 className="text-lg mb-2">{benefit.title}</h3>
                  <p className="text-[var(--text-secondary)]">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Progress Steps */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-12 mt-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {['Select Time', 'Your Details', 'Confirmation'].map((label, index) => (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    (step === 'select-time' && index === 0) ||
                    (step === 'details' && index === 1) ||
                    (step === 'confirmation' && index === 2)
                      ? 'bg-[var(--bg-brand)] border-[var(--border-brand)] text-[var(--text-on-brand)]'
                      : index < (['select-time', 'details', 'confirmation'].indexOf(step))
                      ? 'bg-[var(--bg-brand-subtle)] border-[var(--border-brand)] text-[var(--text-brand)]'
                      : 'bg-[var(--card)] border-[var(--border-primary)] text-[var(--text-tertiary)]'
                  }`}>
                    {index < (['select-time', 'details', 'confirmation'].indexOf(step)) ? (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <span className="text-sm sm:text-base">{index + 1}</span>
                    )}
                  </div>
                  <span className={`hidden md:inline text-sm ${
                    (step === 'select-time' && index === 0) ||
                    (step === 'details' && index === 1) ||
                    (step === 'confirmation' && index === 2)
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-tertiary)]'
                  }`}>{label}</span>
                </div>
                {index < 2 && (
                  <div className={`w-8 sm:w-12 md:w-16 h-0.5 ${
                    index < (['select-time', 'details', 'confirmation'].indexOf(step))
                      ? 'bg-[var(--bg-brand)]'
                      : 'bg-[var(--border-primary)]'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8">
          {step === 'select-time' && (
            <CalendarBooking
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              onNext={() => setStep('details')}
            />
          )}

          {step === 'details' && (
            <DetailsForm
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep('select-time')}
              onNext={() => setStep('confirmation')}
            />
          )}

          {step === 'confirmation' && (
            <Confirmation
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              formData={formData}
              onBack={() => setStep('details')}
            />
          )}
        </section>
      </div>
    </PageLayout>
  );
}

function CalendarBooking({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, onNext }: any) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [userTimezone, setUserTimezone] = useState('');

  // Detect user's timezone on mount
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);
  }, []);

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  // Base times in PST (company timezone) - 9 AM to 5 PM PST
  const baseTimeSlots = [
    { hour: 9, minute: 0 },
    { hour: 10, minute: 0 },
    { hour: 11, minute: 0 },
    { hour: 12, minute: 0 },
    { hour: 13, minute: 0 },
    { hour: 14, minute: 0 },
    { hour: 15, minute: 0 },
    { hour: 16, minute: 0 },
    { hour: 17, minute: 0 },
  ];

  // Convert PST times to user's local timezone
  const getLocalTimeSlots = () => {
    return baseTimeSlots.map(slot => {
      // Create a date in PST
      const pstDate = new Date();
      pstDate.setHours(slot.hour, slot.minute, 0, 0);
      
      // Format in user's local time
      const localTime = pstDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      // Also store the original PST time for booking
      const pstTime = pstDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Los_Angeles'
      });
      
      return {
        localTime,
        pstTime,
        hour: slot.hour
      };
    });
  };

  const timeSlots = getLocalTimeSlots();

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    if (newMonth >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(newMonth);
    }
  };

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const dateOnly = new Date(date);
    dateOnly.setHours(0, 0, 0, 0);
    // Disable past dates and weekends
    return dateOnly < today || date.getDay() === 0 || date.getDay() === 6;
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-8"
    >
      {/* Calendar */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={prevMonth}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-900 dark:text-white hover:bg-[#00A7A5] hover:text-white transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextMonth}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-900 dark:text-white hover:bg-[#00A7A5] hover:text-white transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 py-1.5 sm:py-2 font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 md:gap-3">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && !isDateDisabled(day) && setSelectedDate(day)}
              disabled={isDateDisabled(day)}
              className={`aspect-square rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base font-medium transition-all duration-200 border ${
                !day
                  ? 'cursor-default border-transparent'
                  : isDateDisabled(day)
                  ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800'
                  : isSameDay(day, selectedDate)
                  ? 'bg-gradient-to-br from-[#00A7A5] to-[#00968f] text-white shadow-lg border-transparent'
                  : 'text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gradient-to-br hover:from-[#00A7A5] hover:to-[#00968f] hover:border-transparent hover:text-white hover:shadow-md'
              }`}
            >
              {day?.getDate()}
            </button>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A7A5]" />
            All times shown in your local timezone
          </p>
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
        <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-4 sm:mb-6">
          {selectedDate
            ? `Available Times`
            : 'Select a Date'}
        </h3>
        
        {selectedDate && (
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        )}

        {selectedDate ? (
          <div className="space-y-3 max-h-[450px] overflow-y-auto pr-2">
            {timeSlots.map((time) => {
              const isBooked = isSlotBooked(selectedDate, time.pstTime);
              return (
                <button
                  key={time.pstTime}
                  onClick={() => !isBooked && setSelectedTime(time.pstTime)}
                  disabled={isBooked}
                  className={`w-full px-6 py-4 rounded-xl transition-all duration-200 font-medium text-base border ${
                    isBooked
                      ? 'bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 cursor-not-allowed border-gray-200 dark:border-gray-800'
                      : selectedTime === time.pstTime
                      ? 'bg-gradient-to-r from-[#00A7A5] to-[#00968f] text-white shadow-lg border-transparent'
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 hover:bg-gradient-to-r hover:from-[#00A7A5] hover:to-[#00968f] hover:border-transparent hover:text-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{time.localTime}</span>
                    {selectedTime === time.pstTime && (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                    {isBooked && (
                      <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded-full">Booked</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-96 text-gray-500 dark:text-gray-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-base">Please select a date to view available times</p>
            </div>
          </div>
        )}

        {selectedDate && selectedTime && (
          <button
            onClick={onNext}
            className="w-full mt-6 px-6 py-4 bg-[#00A7A5] text-white rounded-xl font-medium hover:bg-[#008f8d] hover:shadow-lg transition-all duration-200"
          >
            Continue to Details →
          </button>
        )}
      </div>
    </motion.div>
  );
}

function DetailsForm({ selectedDate, selectedTime, formData, setFormData, onBack, onNext }: any) {
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const personalEmailDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com',
    'aol.com', 'icloud.com', 'mail.com', 'protonmail.com', 'yandex.com',
    'zoho.com', 'gmx.com', 'inbox.com', 'me.com', 'msn.com', 'yahoo.co.in',
    'yahoo.co.uk', 'googlemail.com', 'rediffmail.com'
  ];

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('');
      return;
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && personalEmailDomains.includes(domain)) {
      setEmailError('Please use your institutional email address, not a personal email.');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    validateEmail(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        date: selectedDate ? selectedDate.toISOString() : '',
        time: selectedTime,
        institutionName: formData.institutionName,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        timezone: formData.timezone,
        country: formData.country,
        attendees: formData.attendees,
        additionalInfo: formData.additionalInfo
      };

      const response = await fetch(`${API_URL}/demo-requests/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errMessage = 'Failed to submit demo request';
        try {
          const errData = await response.json();
          if (errData.message) errMessage = errData.message;
        } catch {
          // ignore parsing error
        }
        throw new Error(errMessage);
      }

      onNext();
    } catch (err: any) {
      setSubmitError(err.message || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8 lg:p-12">
        <h3 className="text-2xl text-[var(--text-primary)] mb-6">Tell Us About Your Institution</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Institution Name */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Building2 className="w-4 h-4 text-[#00A7A5]" />
              Institution Name *
            </label>
            <input
              type="text"
              required
              value={formData.institutionName}
              onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all placeholder:text-[var(--text-tertiary)]"
              placeholder="University or Publisher Name"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <User className="w-4 h-4 text-[#00A7A5]" />
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all placeholder:text-[var(--text-tertiary)]"
              placeholder="Dr. Jane Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Mail className="w-4 h-4 text-[#00A7A5]" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all placeholder:text-[var(--text-tertiary)]"
              placeholder="jane.smith@university.edu"
            />
            {emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Phone className="w-4 h-4 text-[#00A7A5]" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all placeholder:text-[var(--text-tertiary)]"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Role */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Briefcase className="w-4 h-4 text-[#00A7A5]" />
              Your Role *
            </label>
            <select
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all"
            >
              <option value="">Select your role</option>
              <option value="Dean/Director">Dean/Director</option>
              <option value="Department Head">Department Head</option>
              <option value="Graduate Program Director">Graduate Program Director</option>
              <option value="IT Administrator">IT Administrator</option>
              <option value="Library Administrator">Library Administrator</option>
              <option value="Research Administrator">Research Administrator</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Timezone */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Clock className="w-4 h-4 text-[#00A7A5]" />
              Timezone *
            </label>
            <select
              required
              value={formData.timezone}
              onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all"
            >
              <option value="">Select your timezone</option>
              <option value="Pacific Time (PT)">Pacific Time (PT) - UTC-8</option>
              <option value="Mountain Time (MT)">Mountain Time (MT) - UTC-7</option>
              <option value="Central Time (CT)">Central Time (CT) - UTC-6</option>
              <option value="Eastern Time (ET)">Eastern Time (ET) - UTC-5</option>
              <option value="Atlantic Time (AT)">Atlantic Time (AT) - UTC-4</option>
              <option value="GMT">Greenwich Mean Time (GMT) - UTC+0</option>
              <option value="CET">Central European Time (CET) - UTC+1</option>
              <option value="EET">Eastern European Time (EET) - UTC+2</option>
              <option value="IST">India Standard Time (IST) - UTC+5:30</option>
              <option value="CST">China Standard Time (CST) - UTC+8</option>
              <option value="JST">Japan Standard Time (JST) - UTC+9</option>
              <option value="AEST">Australian Eastern Time (AEST) - UTC+10</option>
              <option value="NZST">New Zealand Standard Time (NZST) - UTC+12</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Building2 className="w-4 h-4 text-[#00A7A5]" />
              Country *
            </label>
            <select
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all"
            >
              <option value="">Select your country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ireland">Ireland</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Belgium">Belgium</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Austria">Austria</option>
              <option value="Sweden">Sweden</option>
              <option value="Norway">Norway</option>
              <option value="Denmark">Denmark</option>
              <option value="Finland">Finland</option>
              <option value="Poland">Poland</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="Singapore">Singapore</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Philippines">Philippines</option>
              <option value="Vietnam">Vietnam</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Israel">Israel</option>
              <option value="Turkey">Turkey</option>
              <option value="South Africa">South Africa</option>
              <option value="Egypt">Egypt</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Peru">Peru</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Number of Attendees */}
          <div>
            <label className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
              <Users className="w-4 h-4 text-[#00A7A5]" />
              Expected Attendees
            </label>
            <select
              value={formData.attendees}
              onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all"
            >
              <option value="1-5">1-5 people</option>
              <option value="6-10">6-10 people</option>
              <option value="11-20">11-20 people</option>
              <option value="20+">20+ people</option>
            </select>
          </div>

          {/* Additional Information */}
          <div>
            <label className="text-[var(--text-secondary)] mb-2 block">
              Additional Information (Optional)
            </label>
            <textarea
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 transition-all resize-none placeholder:text-[var(--text-tertiary)]"
              placeholder="Tell us about your specific needs or questions..."
            />
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm border border-red-100 dark:border-red-800/30">
              {submitError}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onBack}
              disabled={isSubmitting}
              className={`flex-1 px-6 py-3 border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:border-[var(--border-brand)] hover:text-[var(--text-brand)] transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-6 py-3 bg-gradient-to-r from-[#00A7A5] to-[#008f8d] text-white rounded-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:shadow-lg hover:shadow-[#00A7A5]/20'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                'Confirm Booking'
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

function Confirmation({ selectedDate, selectedTime, formData, onBack }: any) {
  // Save the booking when component mounts
  useEffect(() => {
    if (selectedDate && selectedTime && formData.email) {
      const booking: Booking = {
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        institutionName: formData.institutionName,
        email: formData.email
      };
      addBooking(booking);
    }
  }, [selectedDate, selectedTime, formData]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white border border-gray-200/40 rounded-2xl p-8 lg:p-12 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#00A7A5]/10 to-[#00A7A5]/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#00A7A5]" />
        </div>

        <h3 className="text-3xl text-gray-900 mb-4">Demo Scheduled!</h3>
        <p className="text-lg text-gray-600 mb-8">
          We've sent a confirmation email to <span className="text-[#00A7A5]">{formData.email}</span>
        </p>

        {/* Booking Details */}
        <div className="bg-gradient-to-br from-[#f0fafa]/50 to-white border border-gray-200/40 rounded-xl p-6 mb-8 text-left">
          <h4 className="text-lg text-gray-900 mb-4">Your Demo Details</h4>
          
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#00A7A5] mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Date & Time</div>
                <div className="text-gray-900">
                  {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  {' at '}{selectedTime}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#00A7A5] mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Institution</div>
                <div className="text-gray-900">{formData.institutionName}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#00A7A5] mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Contact Person</div>
                <div className="text-gray-900">{formData.fullName}</div>
                <div className="text-sm text-gray-500">{formData.role}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#00A7A5] mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Timezone & Country</div>
                <div className="text-gray-900">
                  {formData.timezone && formData.country 
                    ? `${formData.timezone} • ${formData.country}`
                    : formData.timezone || formData.country || 'Not specified'}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#00A7A5] mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Expected Attendees</div>
                <div className="text-gray-900">{formData.attendees} people</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Video className="w-5 h-5 text-[#00A7A5] mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Meeting Link</div>
                <div className="text-[#00A7A5]">Sent to your email</div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white border border-[#00A7A5]/20 rounded-xl p-6 mb-8 text-left">
          <h4 className="text-lg text-gray-900 mb-4">What Happens Next?</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00A7A5] mt-0.5 flex-shrink-0" />
              <span>You'll receive a calendar invite with the video conference link</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00A7A5] mt-0.5 flex-shrink-0" />
              <span>Our team will prepare a customized demo based on your institution's needs</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00A7A5] mt-0.5 flex-shrink-0" />
              <span>We'll send you demo materials and documentation before the meeting</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00A7A5] mt-0.5 flex-shrink-0" />
              <span>Feel free to invite additional team members using the calendar invite</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <button
            onClick={onBack}
            className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:border-[#00A7A5] hover:text-[#00A7A5] transition-all duration-300"
          >
            Edit Booking
          </button> */}
          <button
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00A7A5] to-[#008f8d] text-white rounded-lg hover:shadow-lg hover:shadow-[#00A7A5]/20 transition-all duration-300"
          >
            Download Details
          </button>
        </div>

        {/* Support */}
        <div className="mt-8 pt-8 border-t border-gray-200/40">
          <p className="text-sm text-gray-500">
            Need to reschedule or have questions?{' '}
            <a href="mailto:contact@thesisflow.com" className="text-[#00A7A5] hover:underline">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}