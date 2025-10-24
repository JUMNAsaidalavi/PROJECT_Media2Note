import React, { useEffect, useRef, useState } from 'react';

function MicRecorder() {
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error('Mic access error:', err);
      setError('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    const tracks = mediaRecorderRef.current.stream?.getTracks?.() || [];
    tracks.forEach((t) => t.stop());
    setRecording(false);
  };

  const downloadRecording = () => {
    const blob = new Blob(recordedChunks, { type: 'audio/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'microphone.webm';
    a.click();
  };

  useEffect(() => () => {
    try {
      if (mediaRecorderRef.current?.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach((t) => t.stop());
      }
    } catch {}
  }, []);

  return (
    <section className="hero">
      <h2>Record Microphone</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!recording ? (
        <button className="btn-primary" onClick={startRecording}>Start Mic</button>
      ) : (
        <button className="btn-secondary" onClick={stopRecording}>Stop</button>
      )}
      {recordedChunks.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary" onClick={downloadRecording}>Download</button>
        </div>
      )}
    </section>
  );
}

export default MicRecorder;
