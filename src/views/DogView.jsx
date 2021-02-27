import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "components/Button";
import MenuToggle from "components/MenuToggle";

const View = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  position: relative;
`;

const StyledMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  max-width: 640px;
  max-height: 480px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

function DogView() {
  const [src, setSrc] = useState("");

  function onButtonClick() {
    axios
      .get("https://dog.ceo/api/breed/shiba/images/random")
      .then((res) => {
        setSrc(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <View>
        <StyledMenuToggle />
        <Container>
          <Image src={src} />
          <Button onClick={onButtonClick}>Get a dog!</Button>
        </Container>
      </View>
    </>
  );
}

export default DogView;
