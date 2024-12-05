import React from 'react';
import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faDumbbell, faSquarePollVertical, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'; // Icons
import { generateClient } from "aws-amplify/data";
import "@aws-amplify/ui-react/styles.css";
import './Styles.css';

const client = generateClient({
  authMode: "userPool",
});

export default function Profile() {
  const navigate = useNavigate();
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [userprofiles, setUserProfiles] = useState([]);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  return (
    <div className="container">
      <div className="title-section">
        <div className="header-title">Profile</div>
        <div className="header-text">
          Manage your profile and preferences.
        </div>
      </div>

      <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >

      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
        {userprofiles.map((userprofile) => (
          <Flex
            key={userprofile.id || userprofile.email}
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            border="1px solid #ccc"
            padding="2rem"
            borderRadius="5%"
            className="box"
          >
            <View>
              <Heading level="3" color="green">{userprofile.email}</Heading>
            </View>
          </Flex>
        ))}
      </Grid>
    </Flex>

      {/* Profile Information */}
      <div className="profile-card">
        <div className="profile-photo-placeholder"></div>
        <div className="profile-details">
        {userprofiles.map((userprofile) => (
            <div key={userprofile.id || userprofile.email} className="profile-email">
              {userprofile.email}
            </div>
          ))}
        </div>
      </div>

      <div className="profile-actions">
        <button className="pfp-button" onClick={() => navigate('/EditProfile')}>
          Edit Profile
        </button>
        <button className="pfp-button" onClick={() => navigate('/ChangePassword')}>
          Change Password
        </button>
      </div>
      <Button onClick={signOut}>Sign Out</Button>

      {/* Footer Menu */}
      <footer className="footer">
        <div className="footer-menu">
          <MenuItem name="Routines" icon={faDumbbell} onClick={() => navigate('/Routines')} />
          <MenuItem name="Progress" icon={faSquarePollVertical} onClick={() => navigate('/Progress')} />
          <MenuItem name="Community" icon={faUsers} onClick={() => navigate('/Community')} />
          <MenuItem name="Profile" icon={faUser} isActive onClick={() => navigate('/Profile')} />
        </div>
      </footer>
    </div>
  );
}

const MenuItem = ({ name, icon, isActive, onClick }) => (
  <div className={`menu-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <FontAwesomeIcon icon={icon} className="icon" />
    <div className="menu-label">{name}</div>
  </div>
);