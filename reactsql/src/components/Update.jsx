import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
export const Update = () => {
   const navigate = useNavigate();
    const [user , setUser] = useState({});
    const eid = useParams().eid;

    const {register , handleSubmit} = useForm({
        defaultValues  : async () =>{
            const res = await axios.get('/userEid/'+eid);
            return res.data.data[0];
        }
    });
    

    const submitHandler = async (data) =>{
          console.log(data.EID , data.NAME , data.AGE);
          const res = await axios.put('/update/'+eid , data);
          navigate('/show');
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Eid</label>
    <input type="numer" class="form-control" name='email' {...register('EID')} disabled/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" name='password' {...register('NAME')} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="number" class="form-control" name='password' {...register('AGE')}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  )
}
