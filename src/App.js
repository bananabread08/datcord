import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
//import LogIn from './pages/LogIn/LogIn';
//import Register from './pages/Register/Register';
import ProtectedRoute from './pages/ProtectedRoute.js/ProtectedRoute';
//import Home from './pages/Home/Home';
//import ChatPanel from './components/ChatPanel/ChatPanel';
import Loading from './components/Loading/Loading';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import React, { useEffect, useState, Suspense } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './firebase-config';

const LogIn = React.lazy(() => import('./pages/LogIn/LogIn'));
const Register = React.lazy(() => import('./pages/Register/Register'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const ChatPanel = React.lazy(() => import('./components/ChatPanel/ChatPanel'));
function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [servers, setServers] = useState([]);
  const [serverChannels, setServerChannels] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'servers'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setServers(data);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const channelRef = collection(
      db,
      'servers/1kU49xyjRsrEE6KlUXub',
      'channels'
    );
    const q = query(channelRef, orderBy('createdAt', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setServerChannels(data);
    });
    return () => unsub();
  }, []);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <UserAuthContextProvider>
          <Suspense
            fallback={
              <div style={{ height: '100vh' }}>
                <Loading />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<Register />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home
                      toggleTheme={toggleTheme}
                      servers={servers}
                      serverChannels={serverChannels}
                      theme={theme}
                    />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<ChatPanel serverChannels={serverChannels} />}
                />
                <Route
                  path=":channelId"
                  element={<ChatPanel serverChannels={serverChannels} />}
                />
              </Route>
            </Routes>
          </Suspense>
        </UserAuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
