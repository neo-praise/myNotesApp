import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Styles from "../css-module/button.module.css";

export default function Button() {
  return (
    <>
      <Link to="/addNote">
        <button className={Styles.styleBtn}>
          <FiPlus />
        </button>
      </Link>
    </>
  );
}
