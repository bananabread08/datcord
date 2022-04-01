import styled from 'styled-components';

const ProfileWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 7px;
`;

export { ProfileWrapper, ProfileInner };
