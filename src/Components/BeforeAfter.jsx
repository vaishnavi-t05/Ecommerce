// ============================================================
// BeforeAfter.jsx — "REAL TRANSFORMATIONS" drag slider
// ============================================================
// WHAT YOU SEE:
//   One photo with a white divider line + square handle (< >).
//   LEFT of the line  = acne photo (before)
//   RIGHT of the line = clear-skin photo (after)
//   Drag the handle (or click, or use arrow keys) to compare.
//
// HOW IT WORKS (simple idea):
//   - Both photos sit exactly on top of each other, same size.
//   - The AFTER photo is clipped: clipPath hides its left part.
//     Example: pos = 50 means "hide the left 50% of the after photo",
//     so you see before-left + after-right.
//   - Moving the divider changes pos (0 to 100).
//
// PHOTOS: your own files in src/assets/
//   transform-before.jpg = acne (left), transform-after.jpg = clear (right)
//
// ACCESSIBILITY: keyboard arrows move the handle 5% per press,
// screen readers hear the current position (aria-valuenow).
// No props needed.
// ============================================================

import { useState, useRef, useCallback } from "react";
import beforeImg from "../assets/transform-before.jpg";
import afterImg from "../assets/transform-after.jpg";

export default function BeforeAfter() {
  // pos = divider position from the left, in percent (starts in the middle)
  const [pos, setPos] = useState(50);
  // dragging = true while the mouse button / finger is held down
  const [dragging, setDragging] = useState(false);
  // containerRef = a "pointer" to the slider box, so we can measure it
  const containerRef = useRef(null);

  // Turn a cursor X position into a 0-100 percent number.
  // Math.min/Math.max keep it inside 0...100 so the line never escapes.
  const updatePos = useCallback((clientX) => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const xInside = clientX - rect.left;
    const percent = (xInside / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, percent)));
  }, []);

  // Mouse controls: press to grab, move to slide, release to drop
  const onMouseDown = (e) => { setDragging(true); updatePos(e.clientX); };
  const onMouseMove = (e) => { if (!dragging) return; updatePos(e.clientX); };
  const onMouseUp = () => setDragging(false);

  // Touch controls (phones): same idea with finger position
  const onTouchStart = (e) => { setDragging(true); updatePos(e.touches[0].clientX); };
  const onTouchMove = (e) => { if (!dragging) return; updatePos(e.touches[0].clientX); };
  const onTouchEnd = () => setDragging(false);

  // Clicking anywhere on the photo jumps the divider there
  const onTrackClick = (e) => updatePos(e.clientX);

  return (
    <section className="transform-section">
      {/* Headings */}
      <div className="transform-head">
        <p className="transform-eyebrow">FLAWLESS SKIN STARTS HERE</p>
        <h2 className="transform-title">REAL TRANSFORMATIONS</h2>
      </div>

      {/* Slider box + outer label */}
      <div className="transform-wrap">
        <div
          className={`transform-slider ${dragging ? "dragging" : ""}`}
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={onTrackClick}
          role="slider"
          aria-label="Before and after — drag to compare"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
        >
          {/* Bottom layer: acne photo, always fully visible */}
          <img src={beforeImg} alt="Before — skin with acne spots" className="transform-img transform-img--before" draggable={false} />

          {/* Top layer: clear photo, left part hidden by pos */}
          <img
            src={afterImg}
            alt="After — clear glowing skin in 15 days"
            className="transform-img transform-img--after"
            draggable={false}
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          />

          {/* White vertical line at the divider */}
          <div className="transform-divider" style={{ left: `${pos}%` }} />

          {/* White square handle with arrows (decorative) */}
          <div className="transform-handle" style={{ left: `${pos}%` }} aria-hidden="true">
            <span className="handle-arrow">&lt;</span>
            <span className="handle-arrow">&gt;</span>
          </div>
        </div>

        {/* Text sitting outside the photo, on the right */}
        <span className="transform-side-label transform-side-label--outer">VISIBLE RESULT IN<br />JUST 15 DAYS</span>
      </div>
    </section>
  );
}