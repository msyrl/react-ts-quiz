import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  margin-bottom: 16px;

  > p {
    margin: 0 0 16px 0;
  }

  .number {
    font-size: 20px;
    font-weight: 700;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#00ff00" : !correct && userClicked ? "#ff0000" : "transparent"};
    border: 1px solid #000;
    border-radius: 10px;
    color: #000;
  }
`;
