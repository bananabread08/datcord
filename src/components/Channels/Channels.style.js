import styled from 'styled-components';
import { Settings } from '@styled-icons/evaicons-solid/Settings';
import { Plus } from '@styled-icons/bootstrap/Plus';
const ChannelSection = styled.section`
  background-color: ${(props) => props.theme.accent};
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media screen and (max-width: 850px) {
    display: ${(props) => (props.showLeft ? 'flex' : 'none')};
  }
`;

const ChannelHead = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;

const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  flex-basis: 100%;
  overflow-y: auto;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    padding: 0.25rem;
    cursor: pointer;
    margin-left: 0.2rem;
    margin-right: 0.2rem;

    span {
      color: #6e7278;
      font-size: 1.2rem;
      vertical-align: middle;
    }
  }
  & li:hover {
    background-color: ${(props) => props.theme.hoverbg};
    color: ${(props) => props.theme.hovertxt};
  }

  input {
    padding: 0.3rem;
  }
`;

const ChannelLower = styled.div`
  padding: 0.5rem 1rem;
  border-top: 1px solid ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
`;

const SettingsBtn = styled(Settings)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: rotate(90deg);
  }
`;

const PlusBtn = styled(Plus)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transform: ${(props) => (props.close ? 'rotate(45deg)' : '')};
  transition: 0.3s ease-in-out;
`;

export {
  ChannelSection,
  ChannelHead,
  ChannelList,
  ChannelLower,
  SettingsBtn,
  PlusBtn,
};
