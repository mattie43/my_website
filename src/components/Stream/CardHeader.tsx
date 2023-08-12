export const CardHeader = ({ user }: any) => {
  return (
    <div className="card-header">
      <span className="header-name">{`${user?.first_name} ${user?.last_name}`}</span>
      <span className="header-location">{`${user?.address?.country} - ${user?.address?.state}`}</span>
    </div>
  )
}
