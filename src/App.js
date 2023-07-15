import { useState } from "react";

import "./App.css"
import { StudentDetails } from "./studentDetails";





function App(){
  return(
    <StudentDetails/>
  )
}





// function App() {

//   const [result,setResult] = useState()
//   const [name,setName] = useState("");
//   const [age,setAge] = useState("");
//   const [native,setNative] = useState("");

//   const addData = () => {
    
//     const newData = {
//       name,
//       age,
//       native
     
//     }
 
//     setResult([...result,newData])
//   };

//     const EditData = (id) => {
//       const SelectedData = {
//        name: setName
       
//       }
//     }
//   const deleteData = (id) => {
//     const selectedStudent = result.filter((ele,id)=>(ele.id != id));
//       setResult(selectedStudent);
//   }
  
//   return ( <div className="App getData">
//       <h1>Tridots Crud Task</h1>
      
//       <div className='getr'>
       
//       {result.map((stud)=>(
//       <div className='getd'>
//       <h2>name:{stud.name}</h2>
//       <h3>age:{stud.age}</h3>
//       <h3>id:{stud.id}</h3>
//       <h4>age:{stud.native}</h4>
//       <div className="addandedit">
//       <button className='getbtn'  onClick={deleteData(stud.id)}>Remove</button>
//       <button className='editbtn' onClick={EditData(stud.id)}>Edit</button>
//       </div>      
//       </div>
//      ))}
//      </div>
//      <div className='inputadd'>
//        <input type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
//        <input type='number' value={age} onChange={(event)=> setAge(event.target.value)}/>
//        <input type='text' value={native} onChange={(event)=> setNative(event.target.value)}/>
//        <button className='btnadd' onClick={addData}>Add</button>
//   </div>
     
//      </div>
//   );
// }
// //adddata
// // onClick={deleteData(stud.age)}





export default App;
