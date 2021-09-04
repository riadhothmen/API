import React from "react";
import {Link} from "react-router-dom"
import "./ProfileCard.css"

const ProfileCard = ({ user }) => {
  return (
    // <div className="col-md-4 my-3">
    //   <div className="card" style={{ width: "18rem" }}>
    //   <div className="avatar-flip">
    //     <img 
    //       src="https://github.com/Sirajeddine2020/first_repo/blob/master/profile2.svg?raw=true"
    //       height="70px"
    //       width="70px"
    //      alt="profile pic"
    //       className="avatar1"
    //     />
    //      <img 
    //       src="https://github.com/Sirajeddine2020/first_repo/blob/master/profile.jpg?raw=true"
    //       height="70px"
    //       width="70px"
    //      alt="profile pic"
    //       className="avatar2"
    //     />
    //     </div>
    //     <Link to={`/users/${user.id}`}>
    //     <div className="card-body">
    //       <h5 className="card-title">{user.name}</h5>
    //       <p className="card-text">{user.email}</p>
    //     </div>
    //     </Link>
    //   </div>

      
    // </div>

<div className="container">
    <div className="row"style={{ width: "18rem" , marginLeft:"120px"}}>
        <div className="col-md-4">
            <div className="card user-card">
                <div className="card-header">
                    <h5>Profile</h5>
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-radius" alt="User-Profile-Image"/>
                    </div>
                    <Link to={`/users/${user.id}`}>
                      <h6 className="f-w-600 m-t-25 m-b-10">{user.name}</h6>
                      <p className="text-muted">{user.email}</p>
                    </Link>
                    
                </div>
            </div>
        </div>
      </div>
	</div>


  );
};

export default ProfileCard;