import { X, AlertTriangle, Trash2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
  icon?: 'delete' | 'restore' | 'warning';
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'warning',
  icon = 'warning'
}: ConfirmModalProps) {
  if (!isOpen) return null;

  const getIconComponent = () => {
    switch (icon) {
      case 'delete':
        return <Trash2 className="w-6 h-6" />;
      case 'restore':
        return <RotateCcw className="w-6 h-6" />;
      case 'warning':
      default:
        return <AlertTriangle className="w-6 h-6" />;
    }
  };

  const getIconStyles = () => {
    switch (type) {
      case 'danger':
        return 'bg-red-500/10 text-red-500';
      case 'info':
        return 'bg-[var(--bg-brand-subtle)] text-[var(--text-brand)]';
      case 'warning':
      default:
        return 'bg-orange-500/10 text-orange-500';
    }
  };

  const getButtonStyles = () => {
    switch (type) {
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'info':
        return 'bg-[var(--bg-brand)] hover:bg-[var(--bg-brand-hover)] text-[var(--text-on-brand)]';
      case 'warning':
      default:
        return 'bg-orange-500 hover:bg-orange-600 text-white';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-[var(--border-primary)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${getIconStyles()}`}>
                      {getIconComponent()}
                    </div>
                    <div>
                      <h3 className="text-xl text-[var(--text-primary)] mb-1">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {message}
                </p>
              </div>

              {/* Actions */}
              <div className="p-6 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)] flex items-center justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[var(--card)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
                >
                  {cancelText}
                </button>
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className={`px-6 py-2.5 rounded-lg transition-all ${getButtonStyles()}`}
                >
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
