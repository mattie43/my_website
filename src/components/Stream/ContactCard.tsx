import { CardBody } from "./CardBody"
import { CardHeader } from "./CardHeader"

export const ContactCard = ({ user }: any) => {
  return (
    <div className="stream-card">
      <CardHeader user={user} />
      <CardBody user={user} />
    </div>
  )
}
