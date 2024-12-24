import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 16px;
  margin-top: 12px;
`;

const ButtonContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-auto-flow: column;
  color: black;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  padding: 4px 16px;
  border-radius: 8px;
  border: 2px solid gray;
`;

const Icon = styled.img`
  height: 50px;
  object-fit: cover;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DownloadButton = (props: Props) => {
  return (
    <Main>
      <ButtonContainer>
        <Button>
          <Icon src={"https://cdn-icons-png.flaticon.com/512/0/747.png"} />
          <div className="ios">
            <p>Download on the</p>
            <b>App Store</b>
          </div>
        </Button>
        <Button>
          <Icon
            src={
              "https://static-00.iconduck.com/assets.00/google-play-icon-icon-1917x2048-2fljsw4s.png"
            }
          />
          <div className="android">
            <p>Get it on</p>
            <b>Google Play</b>
          </div>
        </Button>
      </ButtonContainer>
    </Main>
  );
};
