import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Eye, History, Download, RotateCcw, Check, X, FileText } from 'lucide-react';
import { type LegalPage, saveLegalPage, getVersionHistory, restoreVersion, type LegalPageVersion } from '../utils/legalData';
import { toast } from 'sonner@2.0.3';
import RichTextEditor from './RichTextEditor';
import * as XLSX from 'xlsx';

interface LegalPageEditorProps {
  page: LegalPage;
  onBack: () => void;
  onSave: (page: LegalPage) => void;
}

export default function LegalPageEditor({ page, onBack, onSave }: LegalPageEditorProps) {
  const [content, setContent] = useState(page.content);
  const [previewMode, setPreviewMode] = useState(false);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [versions, setVersions] = useState<LegalPageVersion[]>([]);
  const [selectedVersions, setSelectedVersions] = useState<Set<string>>(new Set());
  const [viewingVersion, setViewingVersion] = useState<LegalPageVersion | null>(null);

  useEffect(() => {
    const history = getVersionHistory(page.id);
    setVersions(history.reverse()); // Show newest first
  }, [page.id]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      
      await fetch(`${API_URL}/legal/${page.id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });

      saveLegalPage(page, content);
      toast.success('Legal page updated successfully');
      
      // Refresh version history
      const history = getVersionHistory(page.id);
      setVersions(history.reverse());
      
      onSave({ ...page, content });
    } catch (error) {
      console.error('Failed to save to backend:', error);
      saveLegalPage(page, content);
      toast.success('Legal page updated locally (backend sync failed)');
      
      const history = getVersionHistory(page.id);
      setVersions(history.reverse());
      onSave({ ...page, content });
    }
  };

  const handleRestoreVersion = (versionId: string) => {
    const version = versions.find(v => v.versionId === versionId);
    if (version) {
      restoreVersion(page.id, versionId);
      setContent(version.content);
      toast.success('Version restored successfully');
      
      // Refresh version history
      const history = getVersionHistory(page.id);
      setVersions(history.reverse());
      
      setViewingVersion(null);
      setShowVersionHistory(false);
    }
  };

  const toggleVersionSelection = (versionId: string) => {
    const newSelection = new Set(selectedVersions);
    if (newSelection.has(versionId)) {
      newSelection.delete(versionId);
    } else {
      newSelection.add(versionId);
    }
    setSelectedVersions(newSelection);
  };

  const selectAllVersions = () => {
    if (selectedVersions.size === versions.length) {
      setSelectedVersions(new Set());
    } else {
      setSelectedVersions(new Set(versions.map(v => v.versionId)));
    }
  };

  const downloadSelectedVersions = () => {
    const versionsToDownload = versions.filter(v => selectedVersions.has(v.versionId));
    
    if (versionsToDownload.length === 0) {
      toast.error('Please select at least one version to download');
      return;
    }

    // Prepare data for Excel with full details
    const dataToExport = versionsToDownload.map((version, index) => ({
      'Page Title': page.title,
      'Version': versions.length - versions.indexOf(version),
      'Saved At': version.savedAt,
      'Saved By': version.savedBy,
      'Content Preview': version.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      'Is Current': versions.indexOf(version) === 0 ? 'Yes' : 'No'
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Selected Versions');
    XLSX.writeFile(workbook, `${page.slug}_selected_versions.xlsx`);
    
    toast.success(`Downloaded ${versionsToDownload.length} version(s)`);
  };

  const downloadAllVersions = () => {
    const dataToExport = versions.map((version, index) => ({
      'Page Title': page.title,
      'Version': versions.length - index,
      'Saved At': version.savedAt,
      'Saved By': version.savedBy,
      'Content Preview': version.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      'Is Current': index === 0 ? 'Yes' : 'No'
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'All Versions');
    XLSX.writeFile(workbook, `${page.slug}_all_versions.xlsx`);
    
    toast.success(`Downloaded all ${versions.length} versions`);
  };

  if (viewingVersion) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Header */}
        <div className="border-b border-[var(--border-primary)] bg-[var(--bg-primary)] sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewingVersion(null)}
                  className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-[var(--text-secondary)]" />
                </button>
                <div>
                  <h1 className="text-[var(--text-primary)]">
                    Version {versions.length - versions.indexOf(viewingVersion)} Preview
                  </h1>
                  <p className="text-sm text-[var(--text-tertiary)]">
                    Saved: {viewingVersion.savedAt} by {viewingVersion.savedBy}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRestoreVersion(viewingVersion.versionId)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand)] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <RotateCcw className="w-4 h-4" />
                Restore This Version
              </button>
            </div>
          </div>
        </div>

        {/* Version Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-[var(--bg-primary)] rounded-xl border border-[var(--border-primary)] p-12">
            <h1 className="text-[var(--text-primary)] mb-8">{page.title}</h1>
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: viewingVersion.content }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (showVersionHistory) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Header */}
        <div className="border-b border-[var(--border-primary)] bg-[var(--bg-primary)] sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setShowVersionHistory(false);
                    setSelectedVersions(new Set());
                  }}
                  className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-[var(--text-secondary)]" />
                </button>
                <div>
                  <h1 className="text-[var(--text-primary)]">Version History - {page.title}</h1>
                  <p className="text-sm text-[var(--text-tertiary)]">{versions.length} total versions</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={downloadAllVersions}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download All
                </button>
                {selectedVersions.size > 0 && (
                  <button
                    onClick={downloadSelectedVersions}
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand)] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    Download Selected ({selectedVersions.size})
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Version History Table */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectedVersions.size === versions.length}
                        onChange={selectAllVersions}
                        className="w-4 h-4 rounded border-[var(--border-primary)] text-[var(--bg-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)]"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Version</th>
                    <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Saved At</th>
                    <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Saved By</th>
                    <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Content Preview</th>
                    <th className="px-6 py-4 text-right text-sm text-[var(--text-secondary)]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-primary)]">
                  {versions.map((version, index) => (
                    <tr key={version.versionId} className="hover:bg-[var(--bg-secondary)] transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedVersions.has(version.versionId)}
                          onChange={() => toggleVersionSelection(version.versionId)}
                          className="w-4 h-4 rounded border-[var(--border-primary)] text-[var(--bg-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)]"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[var(--text-secondary)]" />
                          <span className="text-[var(--text-primary)]">V{versions.length - index}</span>
                          {index === 0 && (
                            <span className="px-2 py-0.5 text-xs bg-[var(--bg-brand-subtle)] text-[var(--text-brand)] rounded">
                              Current
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{version.savedAt}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{version.savedBy}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)] text-sm">
                        {version.content.replace(/<[^>]*>/g, '').substring(0, 80)}...
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setViewingVersion(version)}
                            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand)]/10 rounded-lg transition-all"
                            title="View version"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {index !== 0 && (
                            <button
                              onClick={() => handleRestoreVersion(version.versionId)}
                              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand)]/10 rounded-lg transition-all"
                              title="Restore version"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <div className="border-b border-[var(--border-primary)] bg-[var(--bg-primary)] sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <div>
                <h1 className="text-[var(--text-primary)]">Edit {page.title}</h1>
                <p className="text-sm text-[var(--text-tertiary)]">
                  Last modified: {page.lastModified} • {versions.length} version{versions.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowVersionHistory(true)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
              >
                <History className="w-4 h-4" />
                Version History
              </button>

              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  previewMode
                    ? 'bg-[var(--bg-brand)] text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                <Eye className="w-4 h-4" />
                {previewMode ? 'Exit Preview' : 'Preview'}
              </button>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand)] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor/Preview */}
      {previewMode ? (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-[var(--bg-primary)] rounded-xl border border-[var(--border-primary)] p-12">
            <h1 className="text-[var(--text-primary)] mb-8">{page.title}</h1>
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Enter legal page content..."
          />
        </div>
      )}
    </div>
  );
}