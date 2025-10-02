import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Styles from "../css-module/addnotes.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function AddNotes({ notes, setNotes }) {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
    date: "",
    edited: false,
  });

  function getFormattedDate() {
    const now = new Date();

    // Day with suffix
    const day = now.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    // Month name
    const month = now.toLocaleString("en-US", { month: "long" });

    // Year
    const year = now.getFullYear();

    // Time (hours & minutes in 12-hour format)
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day}${suffix} ${month} ${year} ${hours}:${minutes}${ampm}`;
  }

  const navigate = useNavigate();

  function submitNote(e) {
    e.preventDefault();
    if (note.title.trim() === "" || note.content.trim() === "") {
      return;
    }
    const newNote = {
      ...note,
      id: Date.now(),
      date: getFormattedDate(),
      edited: false,
    };

    setNotes([...notes, newNote]);
    setNote({ title: "", content: "", date: "", edited: false });
    navigate("/");
  }

  return (
    <>
      <div className={Styles.mainHeader}>
        <Link to="/" style={{ color: "#eee" }}>
          <div className={Styles.arrowDiv}>
            <MdOutlineKeyboardArrowLeft />
          </div>
        </Link>
        <button
          className={Styles.btn}
          type="submit"
          onClick={(e) => submitNote(e)}
        >
          Save
        </button>
      </div>
      <form>
        <div className={Styles.titleDiv}>
          <textarea
            type="text"
            className={Styles.title}
            placeholder="Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            spellCheck="false"
          ></textarea>
        </div>
        <div className={Styles.textareaDiv}>
          <textarea
            placeholder="note details..."
            className={Styles.textarea}
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            spellCheck="false"
          ></textarea>
        </div>
      </form>
    </>
  );
}
