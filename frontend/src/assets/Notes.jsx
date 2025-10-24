import React from "react";

const Notes = () => (
  <>
    <header>
      <h1>Media 2 Note</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="upload.html">Upload</a>
        <a href="notes.html">Notes</a>
      </nav>
    </header>

    <section className="notes-section">
      <h2>Your Generated Notes</h2>
      <textarea readOnly rows="15">
        [This is where your AI-generated notes would appear.]
      </textarea>
      <div className="note-actions">
        <button onClick={() => copyNotes()}>Copy</button>
        <button onClick={() => alert('Downloaded!')}>Download .txt</button>
      </div>
    </section>
  </>
);

export default Notes; 