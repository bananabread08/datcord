import Servers from '../../components/Servers/Servers';
import Channels from '../../components/Channels/Channels';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import UserPanel from '../../components/UserPanel/UserPanel';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default function Home({ toggleTheme }) {
  return (
    <Wrapper>
      <Servers toggleTheme={toggleTheme} />
      <Channels />
      <ChatPanel />
      <UserPanel />
    </Wrapper>
  );
}
