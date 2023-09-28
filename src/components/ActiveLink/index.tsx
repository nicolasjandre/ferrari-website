import { Link, useLocation } from "react-router-dom";

interface ActiveLinkProps {
  path: string;
  title: string;
}

export const ActiveLink = ({ path, title }: ActiveLinkProps) => {
  let isActive = false;
  const { pathname } = useLocation();

  if (pathname === path) {
    isActive = true;
  }

  return (
    <Link style={{ color: isActive ? "red" : "white" }} to={path}>
      {title}
    </Link>
  );
};
