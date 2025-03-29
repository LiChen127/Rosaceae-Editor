import MarkdownEditor from './MarkdownEditor';
import RealBody from './RealBody';
import { useState } from 'react';

export default function EditorBody() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="w-[80%] h-full mt-5 ml-auto mr-auto" style={{ margin: '0 auto' }}>
      <div className='flex flex-row gap-4 h-full' style={{ border: '1px solid gray' }}>
        <pre className='flex-1 w-[50%]' style={{ borderRight: '1px solid gray' }}>
          <MarkdownEditor value={markdown} onChange={setMarkdown} />
        </pre>
        <div className='flex-1 w-[50%] max-w-[50%]'>
          <RealBody markdown={markdown} />
        </div>
      </div>
    </div>
  );
}
