import Styles from "../css-module/notes.module.css";
import Header from "./Header";
import Button from "./Button";
import NoteLists from "./NoteLists";
import { useState } from "react";

export default function Notes({ notes, setNotes }) {
  const [searchItem, setSearchItem] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <Header notes={notes} setNotes={setNotes} setSearchItem={setSearchItem} />
      {notes.length === 0 ? (
        <div className={Styles.empty}>
          <span>no notes found.</span>
        </div>
      ) : (
        <div className={Styles.notes}>
          <NoteLists notes={filteredNotes} />
        </div>
      )}

      <Button />
    </>
  );
}
