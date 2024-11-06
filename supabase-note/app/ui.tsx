"use client";

import { useEffect, useState } from "react";

import { Database } from "@/types_db";
import { supabase } from "../utils/supabase";

import EmptyNote from "./component/EmptyNote";
import Header from "./component/Header";
import NewNote from "./component/NewNote";
import NoteViewer from "./component/NoteViewer";
import Sidebar from "./component/Sidebar";

export default function UI() {
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [notes, setNotes] = useState<
    Database["public"]["Tables"]["note"]["Row"][]
  >([]);

  const fetchNotes = async () => {
    const { data, error } = await supabase.from("note").select("*");
    if (error) {
      alert(error.message);
      return;
    }
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          setIsCreating={setIsCreating}
          notes={notes}
        />
        {isCreating ? (
          <NewNote
            fetchNotes={fetchNotes}
            setIsCreating={setIsCreating}
            setActiveNoteId={setActiveNoteId}
          />
        ) : activeNoteId ? (
          <NoteViewer
            note={notes.find((note) => note.id === activeNoteId)}
            setActiveNoteId={setActiveNoteId}
            fetchNotes={fetchNotes}
          />
        ) : (
          <EmptyNote />
        )}
      </div>
    </main>
  );
}
