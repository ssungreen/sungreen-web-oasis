import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import {
    Bold, Italic, List, ListOrdered, Heading2, Heading3,
    ImagePlus, Undo, Redo, Minus, Quote, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';

interface RichTextEditorProps {
    content: string;
    onChange: (html: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ content, onChange }) => {
    const [uploading, setUploading] = useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [2, 3] },
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'rounded-lg max-w-full mx-auto my-4',
                },
            }),
            Placeholder.configure({
                placeholder: '시공 과정, 특이사항, 고객 후기 등을 자유롭게 작성하세요...\n\n이미지를 삽입하고 아래에 설명을 추가하면 블로그처럼 보입니다.',
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-slate max-w-none min-h-[300px] px-4 py-3 focus:outline-none',
            },
        },
    });

    const handleImageUpload = useCallback(async () => {
        if (!editor) return;

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;

            setUploading(true);
            try {
                const formData = new FormData();
                formData.append('file', file);

                const res = await fetch('/api/upload', {
                    method: 'PUT',
                    body: formData,
                });

                if (!res.ok) throw new Error('Upload failed');

                const { filename } = await res.json();
                const imageUrl = `/images/${filename}`;

                editor.chain().focus().setImage({ src: imageUrl, alt: file.name }).run();
            } catch (error) {
                console.error('Image upload failed:', error);
                alert('이미지 업로드에 실패했습니다.');
            } finally {
                setUploading(false);
            }
        };
        input.click();
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 px-2 py-2 border-b border-slate-200 bg-slate-50">
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    active={editor.isActive('bold')}
                    title="굵게"
                >
                    <Bold className="w-4 h-4" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    active={editor.isActive('italic')}
                    title="기울임"
                >
                    <Italic className="w-4 h-4" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    active={editor.isActive('heading', { level: 2 })}
                    title="제목"
                >
                    <Heading2 className="w-4 h-4" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    active={editor.isActive('heading', { level: 3 })}
                    title="소제목"
                >
                    <Heading3 className="w-4 h-4" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    active={editor.isActive('bulletList')}
                    title="목록"
                >
                    <List className="w-4 h-4" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    active={editor.isActive('orderedList')}
                    title="순서 목록"
                >
                    <ListOrdered className="w-4 h-4" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    active={editor.isActive('blockquote')}
                    title="인용"
                >
                    <Quote className="w-4 h-4" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    title="구분선"
                >
                    <Minus className="w-4 h-4" />
                </ToolbarButton>

                <ToolbarDivider />

                <ToolbarButton onClick={handleImageUpload} title="이미지 삽입" disabled={uploading}>
                    {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImagePlus className="w-4 h-4" />}
                </ToolbarButton>

                <div className="flex-grow" />

                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    title="되돌리기"
                >
                    <Undo className="w-4 h-4" />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    title="다시 실행"
                >
                    <Redo className="w-4 h-4" />
                </ToolbarButton>
            </div>

            {/* Editor */}
            <EditorContent editor={editor} />

            {/* Styles */}
            <style>{`
        .tiptap p.is-editor-empty:first-child::before {
          color: #94a3b8;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
          white-space: pre-wrap;
        }
        .tiptap {
          min-height: 300px;
        }
        .tiptap:focus {
          outline: none;
        }
        .tiptap img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem auto;
          display: block;
        }
        .tiptap h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1e293b;
        }
        .tiptap h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: #334155;
        }
        .tiptap p {
          margin-bottom: 0.75rem;
          line-height: 1.75;
          color: #475569;
        }
        .tiptap blockquote {
          border-left: 3px solid #10b981;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #64748b;
          font-style: italic;
        }
        .tiptap ul, .tiptap ol {
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .tiptap li {
          margin-bottom: 0.25rem;
        }
        .tiptap hr {
          border-color: #e2e8f0;
          margin: 1.5rem 0;
        }
      `}</style>
        </div>
    );
};

// Toolbar sub-components
const ToolbarButton: React.FC<{
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
    title: string;
    children: React.ReactNode;
}> = ({ onClick, active, disabled, title, children }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        title={title}
        className={`p-2 rounded transition-colors ${active
                ? 'bg-emerald-100 text-emerald-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            } ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
    >
        {children}
    </button>
);

const ToolbarDivider = () => (
    <div className="w-px h-6 bg-slate-200 mx-1" />
);

export default RichTextEditor;
