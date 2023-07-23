import React from 'react';
import { useAuth } from '../../../utils/context/authContext';
import RegisterForm from '../../../components/RegisterForm';
import { editUser } from '../../../api/userData';

export default function EditUser() {
  const { user } = useAuth();

  return (
    <>
      <h1>Edit Profile</h1>
      <RegisterForm user={user} updateUser={editUser} />
    </>
  );
}
