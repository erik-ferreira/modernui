import React from "react";

import unitedImg from "../../assets/united.png";

import { Container, Image, Title, Foundation } from "./styles";

function Card() {
  return (
    <Container animation="slideInDown" duration={2000}>
      <Image
        source={unitedImg}
        resizeMode="contain"
        animation="pulse"
        delay={100}
        iterationCount="infinite"
      />
      <Title style={{ fontFamily: "Roboto_500Medium" }}>
        Manchester United
      </Title>
      <Foundation style={{ fontFamily: "Roboto_400Regular" }}>1878</Foundation>
    </Container>
  );
}

export { Card };
