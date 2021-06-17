import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Home.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';




function Home() {
    const [user, setuser] = useState([]);
  useEffect(() => {
    //   const { MovieName, Language, ReleaseDate, Budge, Collection } = user;
     async function getdata(){
         const request=await axios.get('/api/user');
         setuser(request.data)
          }
          getdata();
          deletedata();
  }, [])

    const deletedata= async id =>{
        await axios.delete(`/api/user/${id}`);
        alert("delete succesfull")
    }
    return (
        <div className="">
            <header className="home_header">
                <h1>Daskboard</h1>
            </header>
            <div className="add_user">
               <Button color="secondary" outline="primary" ><Link to={'/user/form'}>Add User</Link></Button> 

            </div>

            <div className="Materialui_table">
               
           
            <div className="home_body container center ">
                <div className="table_head">

                <table>
                    <thead>

                <tr className="table_row">
                        <th>MovieName</th>
                        <th>Language</th>
                        <th>ReleaseDate</th>
                        <th>Budge</th>
                        <th>Collection</th>
                        <th>changes</th>
                    
                </tr>
                </thead>
                <tbody>
                {
                    user.map((datas)=>(
                        <tr className="table_raw">
                      
                            <th>{datas.MovieName}</th>
                            <th>{datas.Language}</th>
                            <th>{datas.ReleaseDate}</th>
                            <th>{datas.Budge}</th>
                            <th>{datas.Collection}</th>
                            <th>
                                
                                <span className="tbody_update"><Button><Link to={`/user/update/${datas._id}`}>adit page</Link> </Button></span>
                                <span className="tbody_button"> <Button onClick={()=>deletedata(datas._id)}>delete</Button></span>
                            </th>
                            
                            
                        
                         </tr>

                    ))
                }
                </tbody>
                 
                </table>
                </div>

            </div>
            </div>
            
        </div>
    )
}

export default Home
