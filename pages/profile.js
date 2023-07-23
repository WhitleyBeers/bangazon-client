/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { deleteUser } from '../api/userData';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  const deleteProfile = () => {
    if (window.confirm('Are you sure you would like to delete your profile? This CANNOT be undone.')) {
      deleteUser(user.id).then(() => signOut());
      router.push('/');
    }
  };

  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className="d-flex flex-column mt-3">
        <img
          className="plant-image"
          src={user.profile_image_url}
          alt={user.id}
          style={{
            width: '300px', borderRadius: '0px', border: '3px solid black',
          }}
        />
      </div>
      <div className="profile-font" style={{ marginTop: '25px' }}>
        <h2>Hello, {user.username}</h2>
        <hr />
        <h5>User Info</h5>
        <p>Name: {user.first_name} {user.last_name}</p>
        <p>Email: {user.email}</p>
        <p>Account created: {user.registered_on}</p>
      </div>
      <Button className="mb-5" variant="danger" onClick={deleteProfile}>Delete Account</Button>
    </>
  );
}
