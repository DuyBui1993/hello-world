import * as React from "react";
import styled from "styled-components";

const Main = styled.p<{ $fontSize: number; $fontWeight: number }>`
  font-family: Inter sans-serif;
  font-size: ${(p) => p.$fontSize || 14}px;
  font-weight: ${(p) => p.$fontWeight || 400};
`;

interface TypoProps extends React.HTMLAttributes<HTMLDivElement> {
  fontSize: 12 | 14 | 16 | 20 | 24 | 28 | 48 | 96;
  fontWeight: 400 | 500 | 600 | 700;
}

export const TypoParagraph = (props: TypoProps) => {
  const { children, fontWeight, fontSize } = props;
  return (
    <Main $fontSize={fontSize} $fontWeight={fontWeight} className="typo">
      {children}
    </Main>
  );
};
