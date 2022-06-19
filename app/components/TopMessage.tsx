import React from "react";
import { Container, Row } from "react-bootstrap";

type Props = {
  data?: string;
};

export default function TopMessage({ data }: Props) {
  const defaultColor = data?.color ? data?.color : "#803160";
  if (data && data?.active)
    return (
      <Container
        fluid
        style={{
          background: defaultColor,
          textAlign: "center",
          color: "white",
          padding: 15,
          // position: "fixed",
        }}
      >
        <Row>
          <div
            dangerouslySetInnerHTML={{
              __html: `
      ${data?.message}
      `,
            }}
          ></div>
        </Row>
      </Container>
    );
  else return null;
}
