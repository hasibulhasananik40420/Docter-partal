import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import User from './User';

const AllUsers = () => {
     const {data:users, isLoading, refetch} = useQuery('users', ()=> fetch('http://localhost:5000/user',{
         method:'GET',

         headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
         }

     }).then(res=>res.json()))
      if(isLoading){
          return <Spinner></Spinner>
      }
     return (
        <div>
            all users :{users?.length}

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
       {
           users.map(user=> <User key={user._id} user={user}> </User>)
       }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;