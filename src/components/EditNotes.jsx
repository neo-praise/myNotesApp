import { useParams, Link, useNavigate } from "react-router-dom";
import Styles from "../css-module/editnotes.module.css";
import { MdOutlineKeyboardArrowLeft, MdSpellcheck } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import PageNotFound from "./PageNotFound";
import { useState } from "react";

export default function EditNotes({ notes, setNotes }) {
  const { id } = useParams();
  const theNote = notes.find((note) => note.id === Number(id));

  if (!theNote) return <PageNotFound />;

  const [edited, setEdited] = useState(theNote);
  const navigate = useNavigate();

  function updateNote() {
    const isUnchanged =
      edited.title === theNote.title && edited.content === theNote.content;

    const updatedNote = notes.map((note) =>
      note.id === edited.id ? { ...edited, edited: !isUnchanged } : note
    );

    setNotes(updatedNote);
    navigate("/");
  }

  function trashItem(id) {
    if (confirm("Are you sure you want to delete note?")) {
      let selectedNotes = notes.filter((note) => note.id !== Number(id));
      setNotes(selectedNotes);
      navigate("/");
    }
  }

  return (
    <>
      <div className={Styles.mainHeader}>
        <Link to="/" style={{ color: "#eee" }}>
          <div className={Styles.arrowDiv}>
            <MdOutlineKeyboardArrowLeft />
          </div>
        </Link>
        <button className={Styles.btn} type="submit" onClick={updateNote}>
          Update
        </button>

        <button className={Styles.trash} onClick={() => trashItem(id)}>
          <GoTrash />
        </button>
      </div>
      <form>
        <div className={Styles.textDiv}>
          <textarea
            type="text"
            className={Styles.title}
            placeholder="Title"
            value={edited.title}
            onChange={(e) => setEdited({ ...edited, title: e.target.value })}
            spellcheck="false"
          ></textarea>
        </div>
        <div className={Styles.textareaDiv}>
          <textarea
            placeholder="note details..."
            className={Styles.textarea}
            value={edited.content}
            onChange={(e) => setEdited({ ...edited, content: e.target.value })}
            spellcheck="false"
          ></textarea>
        </div>
      </form>
    </>
  );
}
