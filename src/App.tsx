import EditorBody from './components/EditorBody';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <div style={{ margin: '0 auto', width: '80%', marginTop: '10px' }}>
        <EditorBody />
      </div>
    </>
  );
}
