import { Container } from "./styles";

import { PiCopyright } from "react-icons/pi";

export function Footer() {
  return (
    <Container>
      <p>CAMILA NUNES ARENDT</p>

      <span>
        <PiCopyright />
        2024 - All rights reserved.
      </span>
    </Container>
  )
}