import { Box, Button, ChakraProvider } from "@chakra-ui/react";


function App() {
  
  
  return (
    <ChakraProvider>
      <Box>Hi from App</Box>
      <Button colorScheme="purple">Button</Button>
    </ChakraProvider>
  )
}
export default App;




// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import { addToDo, getAllToDo, updateToDo } from "./utils/HandleApi";


// function App() {
//   const [toDo, setToDo] = useState([]);
//   const [message, setMessage] = useState('');
//   const [text, setText] = useState('')
//   const [isUpdating, setIsUpdating] = useState(false);


//   useEffect(() => {
//     axios.get('http://localhost:3000')
//       .then(response => {
//         console.log(response);
//         setMessage(response.data);
//       })
//       .catch(error => {
//         console.error("error", error);
//       });
//   }, []);
  
//   return (
//     <div className='App'>
//       <Header />
//       <div className="container">
//         <div className="top">
//           <input type="text" placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/>
//              <div
//             className="add"
//             onClick={
//               isUpdating
//                 ? () => updateToDo()
//                 : () => addToDo(text, setText, setToDo)
//             }
//           >
//             {isUpdating ? "Update" : "Add"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;