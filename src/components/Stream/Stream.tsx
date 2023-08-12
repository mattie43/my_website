import { Card, Button } from "@mui/material";
import { CardsWrapper } from "./CardsWrapper";
import { Header } from "./Header";
import { UserContext } from "~/context/UserContext";
import { useContext } from "react";
import '~/styles/stream.scss'

export const Stream = () => {
  const { fetchMore } = useContext(UserContext);

  return (
    <div className="stream">
      <Card>
        <Header />
        <CardsWrapper />
        <Button variant="outlined" onClick={fetchMore}>Button</Button>
      </Card>
    </div>
  )
}
