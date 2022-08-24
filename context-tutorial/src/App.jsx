import './App.css';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './context/color.js'
import SelectColors from './components/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div>
      </ColorProvider>
    
  );
}

export default App;
