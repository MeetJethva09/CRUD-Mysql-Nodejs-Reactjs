import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const navigate = useNavigate();
    const {register , handleSubmit} = useForm({});
    const submitHandler = async (data)=>{
        try{
            const pool = await axios.post('/login',data);
            alert("done");
            navigate('/show');
        }
        catch(err)
        {
            console.log(err)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}> 
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Eid</label>
    <input type="numer" class="form-control" name='email' {...register('eid')}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" name='password' {...register('name')}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="number" class="form-control" name='password' {...register('age')}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
