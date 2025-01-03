import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({element}) {
    const {isAdminLoggedIn} = useAuth();

  return (
    isAdminLoggedIn ? element : <Navigate to="/admin/login" replace/>
  )
}

export default ProtectedRoute
