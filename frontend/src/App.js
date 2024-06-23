import { useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import Signin from './Signin';
import Welcome from './Welcome';

function App() {
  const [state, setState] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin state={state} setState={setState} />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
