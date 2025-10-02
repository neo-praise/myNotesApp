import { BrowserRouter, Routes, Route, href } from "react-router-dom";
import Notes from "./components/Notes";
import EditNotes from "./components/EditNotes";
import AddNotes from "./components/AddNotes";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("myNotesApp");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("myNotesApp", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Notes notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/editNote/:id"
            element={<EditNotes notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/addNote"
            element={<AddNotes notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="*"
            element={<Notes notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
