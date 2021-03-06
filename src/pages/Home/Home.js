import React, { useState, useEffect } from 'react';
import Servers from '../../components/Servers/Servers';
import Channels from '../../components/Channels/Channels';
import UserPanel from '../../components/UserPanel/UserPanel';
import Profile from '../../components/Profile/Profile';
import styled from 'styled-components';
import { useUserAuth } from '../../context/UserAuthContext';
import {
  doc,
  collection,
  onSnapshot,
  updateDoc,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Outlet, useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default function Home({ theme, toggleTheme, servers, serverChannels }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, `users/${user.uid}`), (snapshot) => {
      setCurrentUser(snapshot.data());
    });
    return () => unsub();
  }, [user]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
      setAllUsers(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

  const handleLeftNav = () => setShowLeft((prevState) => !prevState);
  const handleRightNav = () => setShowRight((prevState) => !prevState);
  const handleProfileView = () => setShowProfile((prevState) => !prevState);
  const handleLogOut = async () => {
    try {
      await logOut();
      await updateDoc(doc(db, 'users', `${user.uid}`), {
        isOnline: false,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputView = () => setShowInput((prevState) => !prevState);
  const handleChange = (e) => setChannelName(e.target.value);
  const addChannel = async (e) => {
    e.preventDefault();
    try {
      if (channelName === '' || channelName === ' ' || channelName.length < 3)
        return alert('Cannot be blank and must be greater than 2 characters');
      await addDoc(collection(db, 'servers/1kU49xyjRsrEE6KlUXub', 'channels'), {
        name: channelName,
        createdAt: serverTimestamp(),
      });
      setShowInput(false);
      setChannelName('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      {showProfile ? (
        <Profile
          handleProfileView={handleProfileView}
          handleLogOut={handleLogOut}
          currentUser={currentUser}
        />
      ) : (
        <>
          <Servers
            theme={theme}
            toggleTheme={toggleTheme}
            servers={servers}
            showLeft={showLeft}
          ></Servers>
          <Channels
            servers={servers}
            serverChannels={serverChannels}
            currentUser={currentUser}
            handleProfileView={handleProfileView}
            addChannel={addChannel}
            handleInputView={handleInputView}
            showInput={showInput}
            handleChange={handleChange}
            showLeft={showLeft}
          />
          <Outlet
            context={[currentUser, allUsers, handleRightNav, handleLeftNav]}
          />
          <UserPanel allUsers={allUsers} showRight={showRight} />
        </>
      )}
    </Wrapper>
  );
}
