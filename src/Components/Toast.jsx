import React from "react";

// Simple bottom-center notification. Renders nothing when there's no message.
export default function Toast({ message }) {
  if (!message) return null;
  return <div className="toast">{message}</div>;
}
