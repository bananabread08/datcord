import React, { useEffect, useState } from 'react';
import { ChatSection, MenuBtn, UsersBtn } from './ChatPanel.style';
import { ScrollToBottom } from '../ScrollToBottom/ScrollToBottom';
import { useOutletContext, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import User from '../User/User';
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../firebase-config';

export default function ChatPanel({ serverChannels }) {
  let { channelId = 'NyrtCoRvt0WIHPJMHwyv' } = useParams();
  const [channelMsgs, setChannelMsgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentChannel = [...serverChannels].filter((x) => x.id === channelId);
  const [message, setMessage] = useState('');
  const [currentUser, allUsers, handleRightNav, handleLeftNav] =
    useOutletContext(); //context hook from Outlet

  useEffect(() => {
    setLoading(true);
    const messageRef = collection(
      db,
      `servers/1kU49xyjRsrEE6KlUXub/channels/${channelId}`,
      'messages'
    );
    const q = query(messageRef, orderBy('createdAt', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setChannelMsgs(data);
      setLoading(false);
    });
    return () => unsub();
  }, [channelId]);

  function handleChange(e) {
    setMessage(e.target.value);
  }

  async function sendMessage(e) {
    e.preventDefault();
    const msg = message;
    setMessage('');
    try {
      await addDoc(
        collection(
          db,
          `servers/1kU49xyjRsrEE6KlUXub/channels/${channelId}`,
          'messages'
        ),
        {
          ownerId: currentUser.uid,
          content: msg,
          createdAt: serverTimestamp(),
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ChatSection>
      <div className="channel-name">
        <div className="showLeftCont">
          <MenuBtn size="25" onClick={handleLeftNav} />
        </div>
        <h3>#{currentChannel[0]?.name}</h3>
        <div className="showRightCont">
          <UsersBtn size="25" onClick={handleRightNav} />
        </div>
      </div>
      <ul>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>
              {currentChannel[0]?.id === 'NyrtCoRvt0WIHPJMHwyv'
                ? "Welcome to Datcord's Test Server!"
                : `Welcome to #${currentChannel[0]?.name}`}
            </h1>
            {channelMsgs.map((msg) => {
              return (
                <li key={msg.ownerId + msg.createdAt}>
                  <User
                    x={[...allUsers].filter((x) => x.uid === msg.ownerId)[0]}
                    chat
                  >
                    <p>{msg.content}</p>
                  </User>
                </li>
              );
            })}
            <ScrollToBottom channelMsgs={channelMsgs} />
          </>
        )}
      </ul>
      <div className="msg-container">
        <form onSubmit={sendMessage}>
          {currentChannel[0]?.id === 'NyrtCoRvt0WIHPJMHwyv' ? (
            <div className="admin-msg">
              <p>Permission denied...</p>
            </div>
          ) : (
            <input
              type="text"
              placeholder="Message..."
              onChange={handleChange}
              value={message}
            />
          )}
        </form>
      </div>
    </ChatSection>
  );
}
