import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [message, setMessage] = useState('');
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        console.log(response);
        setMessage(response.data);
      })
      .catch(error => {
        console.error("error", error);
      });
  }, []);
  
  return (
    <div className='App'>
      <div className="container">
        <div className="top">
        <input type="text" placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}
export default App;