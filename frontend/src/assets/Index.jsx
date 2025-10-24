import React from "react";
import './style.css';

const Index = ({ onGetStarted, onGoToLive, onRecordMic, onImportUrl }) => (
  <>
    <header>
      <h1>Media 2 Note</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="upload.html">Upload</a>
        <a href="notes.html">Notes</a>
      </nav>
    </header>

    <section className="hero">
      <h2>Your window into everything you capture</h2>
      <p>Automatic note generation from uploads, URLs, live screen, or mic.</p>

      <div className="action-grid" role="group" aria-label="Primary actions">
        <div className="action-card" onClick={onGetStarted} onKeyDown={(e)=> e.key==='Enter' && onGetStarted()} tabIndex={0}>
          <div className="action-title">Upload File</div>
          <div className="action-sub">Audio or video</div>
        </div>
        <div className="action-card" onClick={onImportUrl} onKeyDown={(e)=> e.key==='Enter' && onImportUrl()} tabIndex={0}>
          <div className="action-title">Import URL</div>
          <div className="action-sub">YouTube, Loom, public links</div>
        </div>
        <div className="action-card" onClick={onGoToLive} onKeyDown={(e)=> e.key==='Enter' && onGoToLive()} tabIndex={0}>
          <div className="action-title">Record Screen</div>
          <div className="action-sub">Capture a live session</div>
        </div>
        <div className="action-card" onClick={onRecordMic} onKeyDown={(e)=> e.key==='Enter' && onRecordMic()} tabIndex={0}>
          <div className="action-title">Record Microphone</div>
          <div className="action-sub">Voice-only notes</div>
        </div>
      </div>
    </section>
  </>
);

export default Index;
