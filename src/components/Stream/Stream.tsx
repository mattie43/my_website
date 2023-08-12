import { Card } from "@mui/material";
import { CardsWrapper } from "./CardsWrapper";
import { Header } from "./Header";
import '~/styles/stream.scss'

export const Stream = () => {
  return (
    <div className="stream">
      <Card>
        <Header />
        <CardsWrapper />
      </Card>
    </div>
  )
}
