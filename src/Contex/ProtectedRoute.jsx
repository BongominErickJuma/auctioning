

import React, { useContext, useState } from 'react'
import { Navigate, Outlet,useNavigate } from "react-router-dom";


import { AppContext } from "./AppContext";

function ProtectedRoute() {
  // const { user, loading } = useContext(AppContext);

  // // Show spinner while loading

  // if (loading) {
  //   return (
  //     <div style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '100vh'  // Full screen height
  //     }}>
  //     <div className="spinner-border" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //     </div>

  //   );
  // }
  const user = window.localStorage.getItem("loggedIn");
  
  return user==="true"?<Outlet/>:<Navigate to="/auctioning/login"/>;
}

export default ProtectedRoute;