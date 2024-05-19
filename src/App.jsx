import { useRef } from 'react';
import saveAs from 'file-saver';
import html2canvas from 'html2canvas';

// components
import Nav from './components/Nav/Nav';
import Mandalart from './components/Mandalart/Mandalart';
import Footer from './components/Footer/Footer';

function App() {
  const saveRef = useRef(null);

  const handleDownload = async () => {
    if (!saveRef.current) return;

    try {
      const div = saveRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div className="App" ref={saveRef}>
      <Nav handleDownload={handleDownload} />
      <Mandalart />
      <Footer />
    </div>
  );
}

export default App;
