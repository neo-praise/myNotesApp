import { useState } from "react";
import Styles from "../css-module/header.module.css";
import { CiSearch } from "react-icons/ci";

export default function Header({ setSearchItem }) {
  const [myNote, setMyNote] = useState(true);

  function handleClick() {
    setMyNote(!myNote);
  }
  return (
    <div className={Styles.mainHeader}>
      {myNote ? (
        <span className={Styles.myNotes}>My Notes</span>
      ) : (
        <input
          type="text"
          placeholder="Search..."
          className={Styles.input}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      )}
      <button className={Styles.searchIcon} onClick={handleClick}>
        <CiSearch />
      </button>
    </div>
  );
}
