// import { useState } from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full p-4 border border-gray-300 rounded-md resize-none"
    />
  );
};

export default MarkdownEditor;