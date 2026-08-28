import "./CircuitAnimation.css";

function CircuitAnimation({ active = true }) {
  return (
    <div
      className={`circuit-animation ${
        active ? "circuit-active" : "circuit-paused"
      }`}
      aria-hidden="true"
    >
      <svg
        className="circuit-svg"
        viewBox="0 0 520 100"
        preserveAspectRatio="none"
      >
        {/* Left outer trace */}
        <path
          className="circuit-trace trace-left"
          d="M260 50 H218 H185 V28 H135 V50 H92 V70 H38"
        />

        {/* Left upper branch */}
        <path
          className="circuit-trace trace-left-upper"
          d="M220 50 H198 V14 H155 V14 H118"
        />

        {/* Left lower branch */}
        <path
          className="circuit-trace trace-left-lower"
          d="M220 50 H198 V84 H155 V84 H110"
        />

        {/* Right outer trace */}
        <path
          className="circuit-trace trace-right"
          d="M260 50 H302 H335 V28 H385 V50 H428 V70 H482"
        />

        {/* Right upper branch */}
        <path
          className="circuit-trace trace-right-upper"
          d="M300 50 H322 V14 H365 V14 H402"
        />

        {/* Right lower branch */}
        <path
          className="circuit-trace trace-right-lower"
          d="M300 50 H322 V84 H365 V84 H410"
        />

        {/* Connection points */}
        <circle className="circuit-node node-1" cx="38" cy="70" r="2.2" />
        <circle className="circuit-node node-2" cx="118" cy="14" r="2.2" />
        <circle className="circuit-node node-3" cx="110" cy="84" r="2.2" />

        <circle className="circuit-node node-4" cx="482" cy="70" r="2.2" />
        <circle className="circuit-node node-5" cx="402" cy="14" r="2.2" />
        <circle className="circuit-node node-6" cx="410" cy="84" r="2.2" />

        {/* Small circuit blocks */}
        <rect
          className="circuit-chip"
          x="75"
          y="62"
          width="9"
          height="9"
          rx="1.5"
        />

        <rect
          className="circuit-chip"
          x="436"
          y="62"
          width="9"
          height="9"
          rx="1.5"
        />

        {/* Moving pulses */}
        <circle className="circuit-pulse pulse-left" r="3" />
        <circle className="circuit-pulse pulse-right" r="3" />
      </svg>
    </div>
  );
}

export default CircuitAnimation;