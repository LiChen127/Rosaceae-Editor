import MarkdownEditor from './MarkdownEditor';
import RealBody from './RealBody';
import { useState } from 'react';

export default function EditorBody() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="w-[80%] h-full mt-5 ml-auto mr-auto">
      <div className='flex flex-row gap-4 h-full'>
        <pre className='flex-1'>
          <MarkdownEditor value={markdown} onChange={setMarkdown} />
        </pre>
        <div className='flex-1'>
          <RealBody markdown={markdown} />
        </div>
      </div>
    </div>
  );
}
