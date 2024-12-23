import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: inline-block;
  background: #0070f3;
  padding: 4px 8px;
  border-radius: 16px;
  margin-top: 12px;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  const { children } = props;
  return <Main className="button">{children}</Main>;
};
