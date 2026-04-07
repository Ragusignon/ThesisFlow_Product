import { useState, useEffect } from 'react';
import { Trash2, RotateCcw, AlertTriangle, FileText, Mail, MessageSquare, Users, PhoneCall, Filter, Download, BookOpen } from 'lucide-react';
import { getTrashItems, restoreFromTrash, permanentlyDelete, getDaysUntilExpiry, emptyAllTrash, type TrashItem } from '../utils/trashData';
import { saveBlogPost } from '../utils/blogData';
import { saveDocumentationPage } from '../utils/documentationData';
import { saveContactMessage } from '../utils/contactData';
import { saveSubscriber } from '../utils/newsletterData';
import { saveReferral } from '../utils/referralData';
import { saveDemoRequest } from '../utils/demoData';
import ConfirmModal from './ConfirmModal';
import * as XLSX from 'xlsx';

interface TrashPanelProps {
  onRestoreBlogPost?: (post: any) => void;
}

export default function TrashPanel({ onRestoreBlogPost }: TrashPanelProps) {
  const [trashItems, setTrashItems] = useState<TrashItem[]>([]);
  const [selectedType, setSelectedType] = useState<'all' | TrashItem['type']>('all');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; item: TrashItem | null }>({ isOpen: false, item: null });
  const [restoreModal, setRestoreModal] = useState<{ isOpen: boolean; item: TrashItem | null }>({ isOpen: false, item: null });

  useEffect(() => {
    loadTrash();
    // Refresh periodically
    const interval = setInterval(loadTrash, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadTrash = () => {
    const items = getTrashItems();
    setTrashItems(items);
  };

  const handleRestore = (item: TrashItem) => {
    setRestoreModal({ isOpen: true, item });
  };

  const handlePermanentDelete = (item: TrashItem) => {
    setDeleteModal({ isOpen: true, item });
  };

  const confirmRestore = (item: TrashItem) => {
    const restored = restoreFromTrash(item.id);
    if (restored) {
      // Restore the item back to its original data store
      if (restored.type === 'blog') {
        saveBlogPost(restored.data);
        if (onRestoreBlogPost) {
          onRestoreBlogPost(restored.data);
        }
      } else if (restored.type === 'documentation') {
        saveDocumentationPage(restored.data);
      } else if (restored.type === 'contact') {
        saveContactMessage(restored.data);
      } else if (restored.type === 'newsletter') {
        saveSubscriber(restored.data);
      } else if (restored.type === 'referral') {
        saveReferral(restored.data);
      } else if (restored.type === 'demo') {
        saveDemoRequest(restored.data);
      }
      
      loadTrash();
      alert(`Successfully restored ${item.type}`);
    }
    setRestoreModal({ isOpen: false, item: null });
  };

  const confirmDelete = (item: TrashItem) => {
    permanentlyDelete(item.id);
    loadTrash();
    setDeleteModal({ isOpen: false, item: null });
  };

  const filteredItems = selectedType === 'all' 
    ? trashItems 
    : trashItems.filter(item => item.type === selectedType);

  const exportToExcel = () => {
    const dataToExport = filteredItems.map(item => ({
      Type: item.type,
      Title: getItemTitle(item),
      'Deleted Date': new Date(item.deletedDate).toLocaleDateString(),
      'Expiry Date': new Date(item.expiryDate).toLocaleDateString(),
      'Days Remaining': getDaysUntilExpiry(item.expiryDate)
    }));
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Trash');
    XLSX.writeFile(workbook, 'trash_items.xlsx');
  };

  const getItemTitle = (item: TrashItem): string => {
    switch (item.type) {
      case 'blog':
        return item.data.title || 'Untitled Post';
      case 'documentation':
        return item.data.title || 'Untitled Documentation';
      case 'demo':
        return item.data.name || 'Demo Request';
      case 'contact':
        return item.data.name || 'Contact Message';
      case 'newsletter':
        return item.data.email || 'Newsletter Subscriber';
      case 'referral':
        return `${item.data.referrerName} - ${item.data.institutionName}`;
      default:
        return 'Unknown Item';
    }
  };

  const getItemIcon = (type: TrashItem['type']) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'documentation': return <BookOpen className="w-4 h-4" />;
      case 'demo': return <PhoneCall className="w-4 h-4" />;
      case 'contact': return <MessageSquare className="w-4 h-4" />;
      case 'newsletter': return <Mail className="w-4 h-4" />;
      case 'referral': return <Users className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: TrashItem['type']) => {
    switch (type) {
      case 'blog': return 'bg-blue-500/10 border-blue-500/20 text-blue-500';
      case 'documentation': return 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500';
      case 'demo': return 'bg-green-500/10 border-green-500/20 text-green-500';
      case 'contact': return 'bg-purple-500/10 border-purple-500/20 text-purple-500';
      case 'newsletter': return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500';
      case 'referral': return 'bg-pink-500/10 border-pink-500/20 text-pink-500';
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-[var(--text-secondary)]" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none"
            >
              <option value="all">All Types</option>
              <option value="blog">Blog Posts</option>
              <option value="documentation">Documentation</option>
              <option value="demo">Demo Requests</option>
              <option value="contact">Contact Messages</option>
              <option value="newsletter">Newsletter Subscribers</option>
              <option value="referral">Referrals</option>
            </select>
            <span className="text-sm text-[var(--text-secondary)]">
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={exportToExcel}
              disabled={filteredItems.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trash Items */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        {filteredItems.length > 0 ? (
          <div className="max-h-[600px] overflow-y-auto">
            <div className="p-6 space-y-4">
              {filteredItems.map((item) => {
                const daysRemaining = getDaysUntilExpiry(item.expiryDate);
                const isExpiringSoon = daysRemaining <= 30;

                return (
                  <div 
                    key={item.id}
                    className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-6 hover:border-[var(--border-brand-subtle)] transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${getTypeColor(item.type)}`}>
                            {getItemIcon(item.type)}
                            <span className="capitalize">{item.type}</span>
                          </span>
                          {isExpiringSoon && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-500">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Expiring soon</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg text-[var(--text-primary)] mb-2">
                          {getItemTitle(item)}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-[var(--text-tertiary)]">Deleted: </span>
                            <span className="text-[var(--text-secondary)]">
                              {new Date(item.deletedDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-[var(--text-tertiary)]">Expires: </span>
                            <span className={isExpiringSoon ? 'text-orange-500' : 'text-[var(--text-secondary)]'}>
                              {new Date(item.expiryDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div>
                            <span className="text-[var(--text-tertiary)]">Days Remaining: </span>
                            <span className={isExpiringSoon ? 'text-orange-500' : 'text-[var(--text-secondary)]'}>
                              {daysRemaining}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRestore(item)}
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
                          title="Restore"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Restore</span>
                        </button>
                        <button
                          onClick={() => handlePermanentDelete(item)}
                          className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-red-500 hover:bg-red-500/10 hover:border-red-500/20 transition-all"
                          title="Permanently Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete Forever</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <Trash2 className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
            <p className="text-[var(--text-secondary)] mb-2">Trash is empty</p>
            <p className="text-sm text-[var(--text-tertiary)]">
              {selectedType !== 'all' 
                ? `No ${selectedType} items in trash`
                : 'Deleted items will appear here and be kept for 12 months (1 year mandatory retention)'
              }
            </p>
          </div>
        )}
      </div>

      {/* Info Banner */}
      {trashItems.length > 0 && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-500 mb-1">
                Items in trash are kept for 12 months (1 year) before permanent deletion - MANDATORY RETENTION POLICY
              </p>
              <p className="text-xs text-blue-500/70">
                You can restore items at any time before they expire
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modals */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, item: null })}
        onConfirm={() => confirmDelete(deleteModal.item!)}
        title="Permanently Delete Item"
        message={`Are you sure you want to permanently delete this ${deleteModal.item?.type}? This action cannot be undone.`}
        confirmText="Delete Forever"
        type="danger"
        icon="delete"
      />
      <ConfirmModal
        isOpen={restoreModal.isOpen}
        onClose={() => setRestoreModal({ isOpen: false, item: null })}
        onConfirm={() => confirmRestore(restoreModal.item!)}
        title="Restore Item"
        message={`Are you sure you want to restore this ${restoreModal.item?.type}? It will be added back to the active list.`}
        confirmText="Restore"
        type="info"
        icon="restore"
      />
    </div>
  );
}