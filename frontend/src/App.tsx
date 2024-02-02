import { Box, Button, Input, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("Ben");
  const [lastName, setLastName] = useState("Daniels");

  const onChangeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const handleClick = async () => {
    const response = await axios.post("http://localhost:3003/name", {
      firstName,
      lastName,
    });
    console.log("RESPONSE:", response.data);
  };

  return (
    <ChakraProvider>
      <Box m={10} display="flex" gap={4}>
        <Input
          placeholder="type in a first name"
          onChange={onChangeFirstName}
        />
        <Input placeholder="type in a last name" onChange={onChangeLastName} />
        <Button colorScheme="purple" onClick={handleClick}>
          Add
        </Button>
      </Box>
    </ChakraProvider>
  );
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
