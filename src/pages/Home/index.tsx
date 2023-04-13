import React from "react";

import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

import coverImg from "../../assets/cover.png";

import { Container, Header, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Input />
      </Header>

      <Content>
        <Card />
      </Content>
    </Container>
  );
}

export { Home };
