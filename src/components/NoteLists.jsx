import Styles from "../css-module/notelists.module.css";
import { Link } from "react-router-dom";

export default function NoteLists({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <Link to={`/editNote/${note.id}`} key={note.id} className={Styles.link}>
          <div className={Styles.theNote}>
            {note.edited === true ? (
              <span className={Styles.edit}>edited</span>
            ) : (
              ""
            )}
            <div className={Styles.text}>
              {note.title.length > 45
                ? note.title.substring(0, 45) + "..."
                : note.title}
            </div>
            <div className={Styles.date}>{note.date}</div>
          </div>
        </Link>
      ))}
    </>
  );
}
