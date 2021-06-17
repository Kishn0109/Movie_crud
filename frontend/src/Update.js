import React, { useState} from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "./Update.css";
import { TextField, Button} from "@material-ui/core";

function Update() {
  let history = useHistory();
  const { id } = useParams();
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
  const finddatabyid = async (e) => {
    e.preventDefault();
    const { MovieName, Language, ReleaseDate, Budge, Collection } = user;
    const res = await fetch(`/api/user/${id}`, {
      method: "PUT",
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
      alert("please try again");
    } else {
      alert("update successfull");
      history.push("/");
    }
  };

  return (
    <div>
      <div className="update_page">
        <h1>Update Data</h1>
        <div className="update_form">
          <form action="" metchod="PUT" className="update_main_form">
            <TextField
              type="text"
              value={user.MovieName}
              onChange={handlerequest}
              name="MovieName"
              placeholder="Movies Name"
              required="true"
              label="Movies Name"
              color="secondry"
              variant="outlined"
              style={{ margin: 10 }}
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
              style={{ margin: 10 }}
              variant="outlined"
            />
            <TextField
              type="Date"
              value={user.ReleaseDate}
              onChange={handlerequest}
              name="ReleaseDate"
              placeholder="Release date"
              required="true"
              color="secondry"
              variant="outlined"
              m={3}
              style={{ margin: 10 }}
            />
            <TextField
              m={3}
              type="Number"
              value={user.Budge}
              onChange={handlerequest}
              name="Budge"
              placeholder="Budget"
              required="true"
              label="Budget"
              color="secondry"
              variant="outlined"
              style={{ margin: 10 }}
            />
            <TextField
              type="Number"
              value={user.Collection}
              onChange={handlerequest}
              name="Collection"
              placeholder=""
              required="Budget"
              color="secondry"
              variant="outlined"
              fullwidth="false"
              label="Collection"
              style={{ margin: 10 }}
            />

            <Button type="submit" onClick={finddatabyid}>
              {" "}
              submite
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
