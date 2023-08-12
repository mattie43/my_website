import { Newspaper, Home } from '@mui/icons-material';
import { useNavigate, Outlet } from "react-router-dom";
import '~/styles/sidebar.scss'

export const Sidebar = () => {
  const nav = useNavigate();
  const path = window.location.pathname;

  const handleClick = (page: string) => {
    nav(`/${page}`)
  }

  return (
    <>
      <div className="sidebar">
        <Home className={path === "/" ? "active" : ""} fontSize="large" onClick={() => handleClick("")} />
        <Newspaper className={path === "/stream" ? "active" : ""} fontSize="large" onClick={() => handleClick("stream")} />
      </div>
      <Outlet />
    </>
  )
}
