import { useState } from 'react';
import { Activity } from './components/Activity'
import './App.css'
import { Form, FormDataStructure } from './components/Form';

interface ActivityDataStructure {
  accessibility:  number
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
}


function App() {
  const [activityData, setActivityData] = useState<ActivityDataStructure>();
  const fetchData = async (type: string) => {
    const result = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
    const data = await result.json();
    setActivityData(data);
  }

  const handleSubmitForm = (data: FormDataStructure) => {
    fetchData(data.type);
  };

  return (
    <>
    <Form onSubmitForm={handleSubmitForm}/>
      {activityData && (<Activity 
      nameOfActivity={activityData.activity}
      type={activityData.type}
      participants={activityData.participants}
      price={activityData.price}/> 
    )}</>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
