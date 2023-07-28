import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getDatabase, push, ref, set, onValue, remove, update } from "firebase/database";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./style.css"

const Contact = () => {

  let [infor , setInfor] = useState({
    fullName: "",
    email: "",
    designation: ""
  });

  const handelChange = (e) =>{
    const {name, value} = e.target;
    setInfor((priv)=>({
       ...priv,
       [name]: value,
    }))
  }
  
let[ero, setEro] = useState();
const db = getDatabase();

  const handleSubmit = () =>{
    if(!infor.fullName ){
      setEro("please iner your name ");
 }else if(!infor.email){
    setEro("please inter your email.");
  
  }else if(!infor.designation){
    setEro("please inter your dsignation.");
  }
  else{
    set(push(ref(db, 'users/')), {
      fullName: infor.fullName,
      email: infor.email,
      designation: infor.designation,
    });
  }   
  };

  //read data===============
  let [dataShow, setDataShow] = useState([])
  useEffect(() => {
    const db = getDatabase();
      const starCountRef = ref(db, 'users/');
      onValue(starCountRef, (snapshot) => {
        let ary = []
         snapshot.forEach((x)=>{
           ary.push({...x.val(), id:x.key});
         })
         setDataShow(ary);
        });
  },[]);
  //delete data================
  const handleDelete = (id)=>{
    remove(ref(db, 'users/' + id));
  }
  
  // edite data ===================
  const [showbutton , setShowButton] = useState(false)
  const [edite , setEdite] = useState("")
  const handleEdite = (value)=>{
    setInfor({
      fullName: value.fullName,
      email : value.email,
      designation : value.designation
    });
    setShowButton(true);
    setEdite(value.id)
  };

 const  handleUpdate =()=>{
   update(ref(db, 'users/' + edite),{
    fullName: infor.fullName,
    email: infor.email,
    designation: infor.designation,
   }).then(()=>{
    setInfor({
      fullName: "",
      email : "",
      designation : "",
    });
    setShowButton(false);
   
   });

 } 


 return (
    <div>
       <Container fixed>
       <Grid container spacing={2}>
        <Grid item xs={8}>
           <TextField fullWidth style={{marginTop:'20px'}} id="standard-basic" label="Enter your first name" variant="standard" name='fullName' onChange={handelChange} margin='normal' value={infor.fullName} type="text" />
           {
          ero ? <p style={{color:"red", fontSize: "20px", marginBottom:"10px"}}>{ero}</p> : <p></p>
         }
      
           <TextField fullWidth style={{marginTop:'20px'}} id="standard-basic" label="Enter your @      email" variant="standard" 
           name='email' onChange={handelChange} margin='normal' value={infor.email} type="email"/>
           {
          ero ? <p style={{color:"red", fontSize: "20px", marginBottom:"10px"}}>{ero.email}</p> : <p></p>
         }
           <TextField fullWidth style={{marginTop:'20px'}} id="standard-basic" label="designation"      variant="standard" name='designation' onChange={handelChange}  margin='normal' value={infor.designation} type="text"/>
         {
          ero ? <p style={{color:"red", fontSize: "20px", marginBottom:"10px"}}>{ero}</p> : <p></p>
         }
          <div className="button">
            {
              showbutton ?  <Button type='submit' onClick={handleUpdate} variant="contained">update</Button> : <Button type='submit' onClick={handleSubmit} variant="contained">submite</Button>
            }   
          </div>
        </Grid> 
      </Grid>

    <div className="d-flex">
    {
        dataShow.map((item,i)=>(
           <Card key={i}  className="width">
          <CardContent>
            <Typography  color="text.secondary" variant="h5" gutterBottom>
             {item.fullName}
            </Typography>
            <Typography >
              {item.email}
            </Typography>
            <Typography  color="red">
              {item.designation}
            </Typography>
          </CardContent>
          <Button type='submit' onClick={()=>handleDelete(item.id)} variant="contained">Delete</Button>
          <Button style={{marginLeft:"5px"}} type='submit' onClick={()=>handleEdite(item)} variant="contained">edite</Button>
        </Card>
        ))}
    </div>
      </Container>
    </div>
  )
}

export default Contact



