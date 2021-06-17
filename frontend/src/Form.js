import React, { useState } from "react";
import './Form.css'
import {TextField,Button} from '@material-ui/core'
// import {useHistory} from 'react-router-dom';

function Form() {
  // let history=useHistory();
  const [user, setuser] = useState({
    MovieName: "",
    Language: "",
    ReleaseDate: "",
    Budge: "",
    Collection: "",
  });
  let name, value;
  const handlerequest = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
    console.log(value);
  };
  const postdata = async (e) => {
    // e.preventDefault();
    const { MovieName, Language, ReleaseDate, Budge, Collection } = user;
    const res = await fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MovieName,
        Language,
        ReleaseDate,
        Budge,
        Collection,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (!data) {
      window.alert("error got from post reqest data not found");
    } else {
      window.alert("your data has been saved");
      // history.push('/')
      

    }
  };
  return (
    <div>
      <div className="form_page">
        <h1>submite data</h1>
        <div className="Form_form">

        <form action="" method="POST" className="Form_main_form">

          <TextField type="text"
            value={user.MovieName}
            onChange={handlerequest}
            name="MovieName"
            placeholder="Movies Name"
            required="true"
            label="Movies Name"
            color="secondry"
            variant="outlined"
            className="form_input_field"
            style = {{margin: 10}}

            />
            
          
          <TextField
            type="text"
            value={user.Language}
            onChange={handlerequest}
            name="Language"
            placeholder="Language"
            required="true"
            label="Language"
            color="secondry"
            m={3}
            className="form_input_field"
            style = {{margin: 10}}

            variant="outlined"
          />
          <TextField
            type="Date"
            value={user.ReleaseDate}
            onChange={handlerequest}
            name="ReleaseDate"
            placeholder="Release date"
            required="true"
            className="form_input_field"
            // label="ReleaseDate"
            color="secondry"
            variant="outlined"
            m={3}
            style = {{margin: 10}}

          />
          <TextField
            m={3}

            type="Number"
            value={user.Budge}
            className="form_input_field"
            onChange={handlerequest}
            name="Budge"
            placeholder="Budget"
            required="true"
            label="Budget"
            color="secondry"
            variant="outlined"
            
            style = {{margin: 10}}

          />
          <TextField
            type="Number"
            value={user.Collection}
            onChange={handlerequest}
            name="Collection"
            placeholder=""
            required="Budget"
            className="form_input_field"
            color="secondry"
            variant="outlined"
            fullwidth="false"
            label="Collection"
            style = {{margin: 10}}

          />

        <Button type="submit" onClick={()=>postdata()}>  submite </Button>
        </form>
        </div>

    
        
      </div>
    </div>
  );
}

export default Form;
