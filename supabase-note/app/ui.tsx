"use client";

import EmptyNote from "./component/EmptyNote";
import Header from "./component/Header";
import NewNote from "./component/NewNote";
import NoteViewer from "./component/NoteViewer";
import Sidebar from "./component/Sidebar";
import { useState } from "react";

const notes = [
  {
    id: 1,
    title: "노트 1",
    content: "노트 내용입니다 1",
  },
  {
    id: 2,
    title: "노트 2",
    content: "노트 내용입니다 2",
  },
];

export default function UI() {
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
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
          <NewNote setIsCreating={setIsCreating} />
        ) : activeNoteId ? (
          <NoteViewer note={notes.find((note) => note.id === activeNoteId)} />
        ) : (
          <EmptyNote />
        )}
      </div>
    </main>
  );
}
