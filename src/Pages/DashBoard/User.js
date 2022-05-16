import React from 'react';

const User = ({user}) => {
    return (
        <tr>
        <th>1</th>
        <td>{user.email}</td>
        <td><button class="btn btn-outline btn-accent">Make Admin</button></td>
        <td>
        <button class="btn btn-circle btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </td>
         <td>
         </td>
      </tr>
     
    );
};

export default User;