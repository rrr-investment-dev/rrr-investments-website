"use client";

import { useState, useEffect, useRef } from "react";
import DiscoveryCallForm from "@/components/DiscoveryCallForm";
import "@/styles/offerings.css";

export default function StrategicGrowthFundPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const canvasRef = useRef(null);

  // Prevent scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  // Interactive background canvas constellation animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles with random coordinates and velocities
    const particleCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 25000));
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 3.5 + 1.5,
        glow: Math.random() * 0.5 + 0.3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on borders
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Particle circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 162, 203, ${p.glow})`;
        ctx.fill();

        // Subtle outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 162, 203, ${p.glow * 0.15})`;
        ctx.fill();
      });

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          // Connect if distance is short enough
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 180) * 0.12;
            ctx.strokeStyle = `rgba(138, 162, 203, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fund-page-wrapper">
        {/* Dynamic canvas backdrop */}
        <canvas ref={canvasRef} className="fund-canvas-bg" />

        {/* Content Container */}
        <div className="fund-content-container">
          <div className="fund-hero-section">
            <div className="fund-info-left">
              <span className="fund-category-tag">
                <strong>Category II</strong> Alternative Investment Fund (AIF)
              </span>

              <h1 className="fund-main-title">
                RRR STRATEGIC <br />
                GROWTH FUND
              </h1>

              <blockquote className="fund-tagline">
                &ldquo;The Fund offers investors the kind of access that has traditionally been reserved for institutions.&rdquo;
              </blockquote>
            </div>

            <div className="fund-cta-right">
              <button
                className="fund-cta-btn"
                onClick={() => setIsPopupOpen(true)}
              >
                Schedule a Discovery Call
              </button>
            </div>
          </div>

          {/* Highlights Row */}
          <div className="fund-highlights-grid">
            <div className="fund-highlight-card">
              <span>PRE-IPO GROWTH CAPITAL</span>
            </div>
            <div className="fund-highlight-card">
              <span>&#8377;50 Cr + &#8377;50 Cr Green Shoe</span>
            </div>
            <div className="fund-highlight-card">
              <span>Five Strategic Growth Themes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Inquiry Modal */}
      <div
        className={`popup-overlay ${isPopupOpen ? "active" : ""}`}
        id="discoveryCallPopup"
        onClick={(e) => {
          if (e.target.id === "discoveryCallPopup") setIsPopupOpen(false);
        }}
      >
        <div className="popup-content">
          <button
            className="close-popup"
            aria-label="Close popup"
            onClick={() => setIsPopupOpen(false)}
          >
            &times;
          </button>
          <div className="form-container">
            <DiscoveryCallForm />
          </div>
        </div>
      </div>
    </>
  );
}
