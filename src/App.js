
// import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import axios from 'axios';
import './App.css';
// let originalData = [];
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [data, setData] = useState([])
  const onSubmit = (data) => {console.log(data)}
  // useEffect(() => {
  //   fetchdata()
  // }, [])
  // const fetchdata = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //     .then(res => {
  //       const data = res.data
  //       setData(data)
  //       originalData = data
  //     })
  // }
  // const searchData = (val) => {
  //   const newFilter = originalData.filter((item)=>{
  //     return JSON.stringify(item).includes(val)
  //   })
  //   setData(newFilter)
  // }

  return (
    <div className="App form-com">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="firstName" placeholder='First Name' {...register("firstName", { required: true })} />
        {errors.firstName && <p className="error">Please enter Fist Name</p>}
        <input type="text" name="lastName" placeholder='Last Name' {...register("lastName", {required:true})} />
        {errors.lastName && <p className="error">Please enter Last Name</p>}
        <input type="submit" value="Submit" className="button"/>
      
      </form>
      {/* <input type="text" placeholder="type here" onChange={(e) => searchData(e.target.value)} />
      {
        data && data.length ?
        data.map((item, index) => {
          return <li key={index}>{item.title}</li>

        })
        :
        'Data not found'
      } */}
      
    </div>
  );
}

export default App;
