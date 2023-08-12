export const CardBody = ({ user }: any) => {
  return (
    <div className="card-body">
      <span className="body-title">{`${user?.employment?.title} @ ${user?.employment?.key_skill}`}</span>
      <span className="body-contact">{`${user?.email} - ${user?.phone_number}`}</span>
    </div>
  )
}
