import React from 'react';
import './Profile.css';
import person from '../../images/person.jpg';
import { findUser } from '../../CustomHook/utilities';
import GetUser from '../../CustomHook/getUser';

const Profile = () => {
   
     //const [person , setPerson] = useState([]);
     const user1 = findUser();
   
     const personInfo = GetUser(user1);
     console.log(personInfo);

    return (
        <div className="container">
           <div className='row'>
               <div className='col-md-4 col-sm-4'>
               <img src={person} className="img-fluid" alt="" />
               </div>
               <div className='col-md-7 col-sm-7 mt-5'>
                <h1>{personInfo.name}</h1>
                <h4>{personInfo.city}</h4>
                <p><small>Word no: {personInfo.word}</small></p>
                <p>Email:{personInfo.email}</p>
               </div>
           </div>
        </div>
    );
};

export default Profile;