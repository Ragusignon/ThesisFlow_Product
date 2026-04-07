import { useState, useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Heading1, 
  Heading2,
  Image as ImageIcon,
  Video,
  Eye
} from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  onPreview?: () => void;
  showPreview?: boolean;
}

export default function RichTextEditor({ value, onChange, onPreview, showPreview }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);

  const applyFormat = (format: string, value?: string) => {
    document.execCommand(format, false, value);
    editorRef.current?.focus();
  };

  const insertImage = () => {
    const url = prompt('Enter image URL (from Unsplash or other source):');
    if (url) {
      const img = `<img src="${url}" alt="Blog image" class="w-full rounded-xl my-8" />`;
      document.execCommand('insertHTML', false, img);
    }
  };

  const insertVideo = () => {
    const url = prompt('Enter video embed URL (YouTube, Vimeo, etc.):');
    if (url) {
      const video = `<div class="my-8"><iframe src="${url}" class="w-full aspect-video rounded-xl" frameborder="0" allowfullscreen></iframe></div>`;
      document.execCommand('insertHTML', false, video);
    }
  };

  const insertHeading = (level: number) => {
    const className = level === 2 
      ? 'text-2xl text-[var(--text-primary)] mt-12 mb-4'
      : 'text-xl text-[var(--text-primary)] mt-8 mb-3';
    const heading = `<h${level} class="${className}">Heading ${level}</h${level}>`;
    document.execCommand('insertHTML', false, heading);
  };

  const insertParagraph = () => {
    const p = `<p class="text-[var(--text-secondary)] mb-4">Your paragraph text here...</p>`;
    document.execCommand('insertHTML', false, p);
  };

  const insertQuote = () => {
    const quote = `<blockquote class="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">Your quote here...</blockquote>`;
    document.execCommand('insertHTML', false, quote);
  };

  const handleInput = (e: any) => {
    const html = e.currentTarget.innerHTML;
    setContent(html);
    onChange(html);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm text-[var(--text-primary)]">
          Content * (Write your blog post)
        </label>
        {onPreview && (
          <button
            type="button"
            onClick={onPreview}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-brand-subtle)] text-[var(--text-brand)] rounded-lg hover:bg-[var(--bg-brand)]/10 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>{showPreview ? 'Edit' : 'Preview'}</span>
          </button>
        )}
      </div>

      {/* Formatting Toolbar */}
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-t-lg p-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => insertParagraph()}
          className="px-2 py-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Insert Paragraph"
        >
          <span className="text-sm text-[var(--text-primary)]">P</span>
        </button>
        <button
          type="button"
          onClick={() => insertHeading(2)}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Heading 2 (Section)"
        >
          <Heading1 className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <button
          type="button"
          onClick={() => insertHeading(3)}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Heading 3 (Subsection)"
        >
          <Heading2 className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <div className="w-px bg-[var(--border-primary)]" />
        <button
          type="button"
          onClick={() => applyFormat('bold')}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <button
          type="button"
          onClick={() => applyFormat('italic')}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Italic"
        >
          <Italic className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <div className="w-px bg-[var(--border-primary)]" />
        <button
          type="button"
          onClick={() => applyFormat('insertUnorderedList')}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <button
          type="button"
          onClick={() => applyFormat('insertOrderedList')}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Numbered List"
        >
          <ListOrdered className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <button
          type="button"
          onClick={insertQuote}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Quote"
        >
          <Quote className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <div className="w-px bg-[var(--border-primary)]" />
        <button
          type="button"
          onClick={insertImage}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Insert Image"
        >
          <ImageIcon className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <button
          type="button"
          onClick={insertVideo}
          className="p-2 hover:bg-[var(--bg-brand-subtle)] rounded transition-colors"
          title="Insert Video"
        >
          <Video className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
      </div>

      {/* Content Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={handleInput}
        className="min-h-[500px] max-h-[600px] overflow-y-auto px-6 py-6 bg-[var(--card)] border border-t-0 border-[var(--border-primary)] rounded-b-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--bg-brand-subtle)] 
        [&_h2]:text-2xl [&_h2]:text-[var(--text-primary)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:first:mt-0
        [&_h3]:text-xl [&_h3]:text-[var(--text-primary)] [&_h3]:mt-8 [&_h3]:mb-3 
        [&_p]:text-[var(--text-secondary)] [&_p]:mb-4 [&_p]:leading-relaxed
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-[var(--text-secondary)] [&_ul]:mb-4
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-[var(--text-secondary)] [&_ol]:mb-4
        [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote]:text-[var(--text-secondary)] [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--border-brand)] [&_blockquote]:pl-4 [&_blockquote]:my-8 
        [&_img]:w-full [&_img]:rounded-xl [&_img]:my-8 
        [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl"
        style={{ WebkitUserSelect: 'text', userSelect: 'text' }}
      >
      </div>

      <p className="text-xs text-[var(--text-tertiary)] mt-2">
        Click the formatting buttons above to style your content. Select text to bold or italicize.
      </p>
    </div>
  );
}
