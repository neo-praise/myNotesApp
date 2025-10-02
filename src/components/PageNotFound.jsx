import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function PageNotFound() {
  const styleBtn = {
    width: "40px",
    height: "40px",
    background: "#ccc",
    marginLeft: "10px",
    fontSize: "44px",
    border: "none",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Link to="/">
        <button style={styleBtn}>
          <MdOutlineKeyboardArrowLeft />
        </button>
      </Link>
      <h1 style={{ color: "white", padding: "50px" }}>Page not found</h1>
    </>
  );
}
