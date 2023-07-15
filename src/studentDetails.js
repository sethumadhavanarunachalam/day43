import { useState } from "react"
import {data} from "./data"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./App.css"

export function StudentDetails(){
    const [student,setStudent] = useState(data);
    const [id,setId] = useState("");
     const [name,setName] = useState("");
     const [age,setAge] = useState("");
     const [native,setNative] = useState("");
     const [editid,setEditid] = useState("")

      const addData = () => {
        const newData = {
            name,
            age,
            native,
            editid,
        }
        setStudent([...student,newData])
        setName("")
        setAge("")
        setNative("")
      }
      const deleteData = (studId) => {
       const removeddata = student.filter((stud,id) => id != studId);
       setStudent(removeddata)
      }
      const editData = (studId) => {
            const selectedstudents = student.find(stud => stud.id === studId);
            setName(selectedstudents.name)
        
            setAge(selectedstudents.age)
            setNative(selectedstudents.native)
      }
    return(<div className="overall">
        <div className="inputField">
                <input placeholder="enter your id" type="number" value={id} onChange={(event)=>setId(event.target.value)}/>
                <input placeholder="enter your name" type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
                <input placeholder="enter your age" type="number" value={age} onChange={(event)=>setAge(event.target.value)}/>
                <input placeholder="enter your native" type="text" value={native} onChange={(event)=>setNative(event.target.value)}/>
                <Button onClick={addData} className="btninput" variant="contained" color="success">
        Add data
      </Button>
                <Button  className="btninput" variant="contained" color="error">
       update data
      </Button>
        </div>
        <div className="studcard">
            {student.map((stud,id)=>
            <div >
                <Card className="cards" key={stud.id}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name:{stud.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        age:{stud.age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        native:{stud.native}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="success" onClick={()=>editData(id)}>Edit</Button>
        <Button size="small" color="error" onClick={()=>deleteData(id)}>Remove</Button>
      </CardActions>
    </Card>
            </div>)}
        </div>
        </div>
    )
}