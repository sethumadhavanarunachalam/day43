// import { useState } from "react";

// function GetData(){
//     const [data,setData] = useState();
//     fetch("https://639ef22a7aaf11ceb88e8981.mockapi.io/students")
//     .then((data) => data.json())
//     .then((res) => setData(res))
// return<div>
//         <h1>Getdata</h1>
//      {data.map((ele)=> (
//          <h1>name:{ele.name}</h1>
//      ))}
//     </div>
// }

// export default GetData;

// import { useState } from 'react';
// import './App.css';
// import GetData from "./GetData"


// function App() {
//   // const data = [{
//   //   name:"sethu",
//   //   age:"21",
//   //   native:"theni"
//   // },{
//   //   name:"ananth",
//   //   age:"21",
//   //   native:"madurai"
//   // },{
//   //   name:"ajith",
//   //   age:"21",
//   //   native:"chennai"
//   // },{
//   //   name:"vijay",
//   //   age:"21",
//   //   native:"kerala"
//   // },{
//   //   name:"vikram",
//   //   age:"21",
//   //   native:"theni"
//   // }]
//   // const [result,setResult] = useState(data)
//   // const [name,setName] = useState("");
//   // const [age,setAge] = useState("");
//   // const [native,setNative] = useState("");

//   // const addData = () => {
    
//   //   const newData = {
//   //     name,
//   //     age,
//   //     native
     
//   //   }
 
//   //   setResult([...result,newData])
//   // };

//   // const deleteData = (id) => {
//   //        const result = data.filter((ele)=>ele != id)
//   //         setResult([result])
         
//   // }
  
//   return (
//     <div>
//       <GetData/>
//     </div>
//     //getdata
//   //   <div className="App getData">
//   //     <h1>Tridots Crud Task</h1>
      
//   //     <div className='getr'>
       
//   //     {data.map((stud)=>(
//   //     <div className='getd'>
//   //     <h2>name:{stud.name}</h2>
//   //     <h3>age:{stud.age}</h3>
//   //     <h4>age:{stud.native}</h4>
//   //     <button className='getbtn' onClick={deleteData}>Remove</button>
//   //     </div>
//   //    ))}
//   //    </div>
//   //    <div className='inputadd'>
//   //      <input type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
//   //      <input type='number' value={age} onChange={(event)=> setAge(event.target.value)}/>
//   //      <input type='text' value={native} onChange={(event)=> setNative(event.target.value)}/>
//   //      <button className='btnadd' onClick={addData}>Add</button>
//   // </div>
     
//   //    </div>
//   );
// }
// //adddata





// export default App;
