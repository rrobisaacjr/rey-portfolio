import { Link, useNavigate } from "react-router-dom";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({ to, children, ...props }) {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const wrapper = document.querySelector("#page-wrapper");

    wrapper?.classList.add("page-transition");

    await sleep(500);
    navigate(to);
    await sleep(500);

    wrapper?.classList.remove("page-transition");
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
