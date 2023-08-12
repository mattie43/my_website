export const ContactCard = ({ user }: any) => {
  return (
    <div>{`${user.first_name} ${user.last_name}`}</div>
  )
}
