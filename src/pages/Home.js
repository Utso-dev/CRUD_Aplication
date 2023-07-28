import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getDatabase, ref, set , push, onValue, remove, update} from "firebase/database";
// import { Edit } from '@mui/icons-material';


const Home = () => {
   const [information, setInformation] = useState({
     fullName :"",
     email :"",
     designation :"",
   })
//    this is for input ===========================
 const handelChange = (e) =>{
    const {name, value} =e.target ;
    setInformation((prev) =>({
      ...prev,
      [name]: value,
    }))
 };
const[error , setError] = useState("")
 const valueError = () =>{
     if(!information.fullName || !information.email || !information.designation){
          return  setError("please fullup the form");
          
     }
 }
// data submite============================
const db = getDatabase();
const handelSubmit=() =>{
      valueError()
     if(!information.fullName || !information.email || !information.designation) {
      return setError("data not to send please name,emile,designation")
     }
     set(push(ref(db, 'users/')), {
      fullName: information.fullName,
       email: information.email,
       designation : information.designation
     });
}
// data read get data=========================
const [todo , setTodo] = useState([])
useEffect(()=>{
  const starCountRef = ref(db, 'users/');
  onValue(starCountRef, (snapshot) => {
    let array = [];
     snapshot.forEach((x)=>{
      array.push({...x.val(), id: x.key});
     });
     setTodo(array)
  });
},[]);

// data delete from db and forntend both-===============================================
const handelDelete = (id)=>{
    remove(ref(db, 'users/' + id));
}

// data edite from db===============================
const handelEdit = (value) =>{
   setInformation({
    fullName:value.fullName,
    email: value.email,
    designation: value.designation
   });
   setShow(true);
   setIds(value.id);
}
// button show and hide ===========================================

const [show , setShow] = useState(false);

// update data db ===========================
const [ids , setIds] = useState("")
const handelUpdate = () => {
   update(ref(db, 'users/' + ids),{
    fullName: information.fullName,
    email: information.email,
    designation: information.designation
   }).then = () =>{
     setInformation({
      fullName: "",
      email:"",
      designation: ""
     });
     setShow(false)
   }
};

  return (
    <div>
     <Container fixed>
         <h1 style={{color:"red", textAlign:"center", marginBottom:"50px", marginTop:"20px"}}>আমি হোম থেকে  আসচ্ছি</h1>
         
   <Grid container spacing={2}>
      <Grid item xs={8} className="name">
      <TextField fullWidth style={{marginTop:'20px'}} id="standard-basic" label="Enter your first name" variant="standard" name='fullName' onChange={handelChange} margin='normal' value={information.fullName} type="text" />

      <TextField fullWidth style={{marginTop:'20px'}} id="standard-basic" label="Enter your @ email" variant="standard" 
      name='email' onChange={handelChange} margin='normal' value={information.email} type="email"/>

      <TextField fullWidth style={{marginTop:'20px'}} id="standard-basic" label="designation" variant="standard" name='designation' onChange={handelChange}  margin='normal' value={information.designation} type="text"/>
       
       {
          Error ? <p style={{fontSize:"20px", color:"red", fontStyle:"italic"}}>{error}</p> : ""
       }
  
      {
        show ? <Button onClick={()=>handelUpdate()} style={{marginTop:"20px", marginBottom:"50px"}} variant="contained">update
        </Button> : <Button onClick={()=>handelSubmit()} style={{marginTop:"20px", marginBottom:"50px"}} variant="contained">Submite
      </Button>
      }
      
      
      </Grid>
       
    </Grid>
 <div className='flex'>
 {
      todo.map((item, i)=>(
        <Card key={i} className="width">
        <CardContent>
        <Typography variant="h5" component="div">
           {item.fullName}
        </Typography>
          <Typography color="text.secondary" gutterBottom>
          {item.email}
          </Typography>
          <Typography variant="body2">
          {item.designation}          
          </Typography>
        </CardContent>
        <CardActions>
        <Button onClick={()=>handelDelete(item.id)} style={{ marginBottom:"10px"}} variant="contained">Delete
        </Button>
        <Button onClick={()=>handelEdit(item)} style={{ marginBottom:"10px"}} variant="contained">edit
        </Button>
        </CardActions>
      </Card>
      ))
    }
 </div>
    </Container>
    </div>
  )
}

export default Home
