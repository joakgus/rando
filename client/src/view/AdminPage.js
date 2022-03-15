import React, { useState } from 'react'
import UserGetter from '../model/UserGetter';

function AdminPage({userInfo}) {

 //const [userInfo2, setUserInfo2] = useState([]);
 const user = UserGetter.getCurrentUser();
console.log(user);
 const isAdmin = user.role==1;

  return (
     
    <div>
      <h1></h1>
          {isAdmin
                ? <h1>Welcome {user.username} to admin page</h1>
                : <h1>You don't have permission to access this page</h1>
            }
    </div>
  )
}

export default AdminPage

