import { useState } from 'react';
import { X, Download, Filter, Calendar, Search } from 'lucide-react';
import * as XLSX from 'xlsx';

interface ExportField {
  key: string;
  label: string;
  selected: boolean;
}

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: any[];
  fields: ExportField[];
  dataType: 'legal' | 'newsletter' | 'demo' | 'contact' | 'referral' | 'blog' | 'documentation';
}

export default function ExportModal({ isOpen, onClose, title, data, fields: initialFields, dataType }: ExportModalProps) {
  const [fields, setFields] = useState<ExportField[]>(initialFields);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  if (!isOpen) return null;

  // Filter data based on date range
  const filterByDate = (items: any[]) => {
    if (!dateRange.start && !dateRange.end) return items;
    
    return items.filter(item => {
      const itemDate = new Date(item.createdAt || item.submittedAt || item.date || item.deletedDate);
      const startDate = dateRange.start ? new Date(dateRange.start) : null;
      const endDate = dateRange.end ? new Date(dateRange.end) : null;

      if (startDate && itemDate < startDate) return false;
      if (endDate && itemDate > endDate) return false;
      return true;
    });
  };

  // Filter data based on search query
  const filterBySearch = (items: any[]) => {
    if (!searchQuery) return items;
    
    const query = searchQuery.toLowerCase();
    return items.filter(item => {
      return Object.values(item).some(value => 
        String(value).toLowerCase().includes(query)
      );
    });
  };

  // Filter by status
  const filterByStatus = (items: any[]) => {
    if (statusFilter === 'all') return items;
    
    if (dataType === 'demo' || dataType === 'contact') {
      return items.filter(item => item.status === statusFilter);
    }
    
    if (dataType === 'newsletter') {
      return items.filter(item => item.active === (statusFilter === 'active'));
    }
    
    return items;
  };

  // Apply all filters
  const filteredData = filterByStatus(filterBySearch(filterByDate(data)));

  const handleToggleField = (key: string) => {
    setFields(fields.map(f => f.key === key ? { ...f, selected: !f.selected } : f));
  };

  const handleSelectAll = () => {
    const allSelected = fields.every(f => f.selected);
    setFields(fields.map(f => ({ ...f, selected: !allSelected })));
  };

  const handleExport = () => {
    const selectedFields = fields.filter(f => f.selected);
    
    if (selectedFields.length === 0) {
      alert('Please select at least one field to export');
      return;
    }

    if (filteredData.length === 0) {
      alert('No data to export with current filters');
      return;
    }

    // Prepare data for export
    const exportData = filteredData.map(item => {
      const row: any = {};
      selectedFields.forEach(field => {
        let value = item[field.key];
        
        // Format dates
        if (value instanceof Date || (typeof value === 'string' && !isNaN(Date.parse(value)))) {
          if (field.key.toLowerCase().includes('date') || field.key === 'createdAt' || field.key === 'submittedAt') {
            value = new Date(value).toLocaleDateString();
          }
        }
        
        // Handle boolean values
        if (typeof value === 'boolean') {
          value = value ? 'Yes' : 'No';
        }
        
        // Handle arrays
        if (Array.isArray(value)) {
          value = value.join(', ');
        }
        
        row[field.label] = value || '';
      });
      return row;
    });

    // Create and download Excel file
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, title);
    
    // Auto-size columns
    const maxWidth = 50;
    const colWidths = selectedFields.map(field => ({
      wch: Math.min(maxWidth, Math.max(field.label.length, 10))
    }));
    worksheet['!cols'] = colWidths;
    
    const filename = `${title.toLowerCase().replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, filename);
    
    onClose();
  };

  const handleReset = () => {
    setDateRange({ start: '', end: '' });
    setSearchQuery('');
    setStatusFilter('all');
    setFields(initialFields);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-primary)]">
          <div>
            <h2 className="text-2xl text-[var(--text-primary)] mb-1">Export {title}</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Customize your export with filters and field selection
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Filters Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-[var(--text-brand)]" />
              <h3 className="text-lg text-[var(--text-primary)]">Filters</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  <Search className="w-3.5 h-3.5 inline mr-1" />
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in all fields..."
                  className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-brand)] focus:outline-none"
                />
              </div>

              {/* Status Filter (for applicable types) */}
              {(dataType === 'demo' || dataType === 'contact' || dataType === 'newsletter') && (
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2">
                    Status
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
                  >
                    <option value="all">All Status</option>
                    {dataType === 'demo' && (
                      <>
                        <option value="pending">Pending</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </>
                    )}
                    {dataType === 'contact' && (
                      <>
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </>
                    )}
                    {dataType === 'newsletter' && (
                      <>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </>
                    )}
                  </select>
                </div>
              )}
            </div>

            {/* Date Range */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-3.5 h-3.5 inline mr-1" />
                  Start Date
                </label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  <Calendar className="w-3.5 h-3.5 inline mr-1" />
                  End Date
                </label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Field Selection */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-[var(--text-primary)]">Select Fields to Export</h3>
              <button
                onClick={handleSelectAll}
                className="text-sm text-[var(--text-brand)] hover:text-[var(--text-brand-hover)] transition-colors"
              >
                {fields.every(f => f.selected) ? 'Deselect All' : 'Select All'}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-4 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-primary)]">
              {fields.map((field) => (
                <label
                  key={field.key}
                  className="flex items-center gap-3 p-3 hover:bg-[var(--bg-primary)] rounded-lg cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={field.selected}
                    onChange={() => handleToggleField(field.key)}
                    className="w-4 h-4 rounded border-[var(--border-primary)] text-[var(--bg-brand)] focus:ring-[var(--border-brand)] focus:ring-offset-0"
                  />
                  <span className="text-sm text-[var(--text-primary)]">{field.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Preview Info */}
          <div className="bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Download className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[var(--text-primary)] mb-1">
                  <span className="font-semibold">{filteredData.length}</span> of <span className="font-semibold">{data.length}</span> records will be exported
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {fields.filter(f => f.selected).length} fields selected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 p-6 border-t border-[var(--border-primary)] bg-[var(--bg-secondary)]">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Reset Filters
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleExport}
              disabled={fields.filter(f => f.selected).length === 0 || filteredData.length === 0}
              className="flex items-center gap-2 px-6 py-2.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              <span>Export to Excel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
