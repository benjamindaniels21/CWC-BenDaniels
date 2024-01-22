import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [message, setMessage] = useState('');
  
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
    <div>
      <h1>{message}</h1>
      <h2>hey</h2>
    </div>
  );
}
export default App;