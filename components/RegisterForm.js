import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import { getSingleUser } from '../api/userData';

function RegisterForm({ user, updateUser }) {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user.fbUser.email,
    uid: user.uid,
    profileImageUrl: '',
    username: '',
  });

  useEffect(() => {
    if (id) {
      getSingleUser(id).then((userObj) => {
        setFormData((prevState) => ({
          ...prevState,
          id: userObj.id,
          firstName: userObj.first_name,
          lastName: userObj.last_name,
          profileImageUrl: userObj.profile_image_url,
          username: userObj.username,
        }));
      });
    }
  }, [user, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      const payload = {
        id: formData.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: user.email,
        profileImageUrl: formData.profileImageUrl,
        username: formData.username,
      };
      updateUser(payload, user.uid).then(() => router.push('/profile'));
    } else {
      registerUser(formData).then(() => updateUser(user.uid));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control as="textarea" name="firstName" required value={formData.firstName} onChange={handleChange} />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control as="textarea" name="lastName" required value={formData.lastName} onChange={handleChange} />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="profileImageUrl">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="url" name="profileImageUrl" required value={formData.profileImageUrl} onChange={handleChange} />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="textarea" name="username" required value={formData.username} onChange={handleChange} />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    fbUser: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
