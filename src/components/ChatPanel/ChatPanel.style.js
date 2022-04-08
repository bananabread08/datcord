import styled from 'styled-components';

export const ChatSection = styled.section`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  height: 100vh;
  .channel-name {
    //display: flex;
    padding: 0.5rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    position: relative;
  }

  /* .showLeftCont,
  .showRightCont {
    display: none;
    @media screen and (max-width: 850px) {
      display: block;
    }
  }

  .showLeftCont {
    position: absolute;
    left: 0;
  }

  .showRightCont {
    position: absolute;
    right: 0;
  } */

  ul {
    flex-basis: 100%;
    overflow-y: auto;
    line-height: 1.6;

    h1 {
      padding: 0.5rem 1rem;
    }

    li {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      padding: 0 1rem;

      &:hover {
        background-color: ${(props) => props.theme.hoverbg};
      }
    }
  }
  .msg-container {
    padding: 0.5rem 1rem;
  }
  input {
    padding: 0.5rem;
    font-size: 1.2rem;
    min-width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.form};
    color: ${(props) => props.theme.text};
    border: none;
    outline: none;
    border-radius: 7px;
    &:disabled {
      filter: brightness(0.7);
    }
  }
`;
