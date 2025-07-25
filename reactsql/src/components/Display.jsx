import axios from 'axios';
import React from 'react'
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const Display =  () => {
    const [userData , setUserData] = useState([]);
    const eid = useParams().EID;

    const getData = async () =>{

        try{
                let res = await axios.get('/fetch');
                setUserData(res.data.data);
               
                
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const deleteUser = async (eid) =>{
        const res = await axios.delete('/delete/'+eid);
        alert("delted..");
        getData();
    }
   
useEffect(()=>{
    getData();
},[])


    return (
    <div>
       
            
                    { userData.length > 0 ? userData.map((user , index)=>
                            (
                                <div style={{display : 'inline-block' , margin :'10px'}}>
                                    <div class="card" style={{width:'18rem'}}>
                                    <div class="card-body">
                                    <h5 class="card-title">EID : {user.EID}</h5>
                                    <p class="card-text"> NAME : {user.NAME}</p>
                                    <p class="card-text">AGE : {user.AGE}</p>
                                    <Link to={`/edit/${user.EID}`}>Edit</Link> &nbsp; &nbsp;
                                    <button onClick={() => deleteUser(user.EID)}> Delete</button>
                                    </div>
                                </div>
                              </div>
                            )
                    ) : (
                          <h1>No data Found!!!</h1>
                    )}
<Link to={`/`}>Home</Link>
           
    </div>
  )
}
