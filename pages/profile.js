import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  // const [userDetails, setUserDetails] = useState({});
  const { user } = useAuth();

  return (
    <>
      <h2>Hello, {user.first_name}!</h2>
    </>
  );
}
