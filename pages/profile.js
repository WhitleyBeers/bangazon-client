/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { deleteUser, getSingleUser } from '../api/userData';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const router = useRouter();

  useEffect(() => {
    getSingleUser(user.id).then(setUserInfo);
  }, [user]);

  const formattedDate = new Date(userInfo.registered_on).toLocaleDateString();

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
          src={userInfo.profile_image_url}
          alt={userInfo.id}
          style={{
            width: '300px', borderRadius: '0px', border: '3px solid black',
          }}
        />
      </div>
      <div className="profile-font" style={{ marginTop: '25px' }}>
        <h2>Hello, {userInfo.username}</h2>
        <hr />
        <h5>User Info</h5>
        <p>Name: {userInfo.first_name} {user.last_name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Account created: {formattedDate}</p>
      </div>
      <Button className="mb-5 me-3" variant="success" onClick={() => router.push(`/users/edit/${userInfo.id}`)}>Edit Profile</Button>
      <Button className="mb-5" variant="danger" onClick={deleteProfile}>Delete Account</Button>
    </>
  );
}
