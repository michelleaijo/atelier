import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__frame">
        <p className="hero__meta">PLATE 00 · PORTFOLIO · 2026</p>

        <h1 className="hero__mark">Atelier</h1>

        <p className="hero__lede">
          YOUR NAME. Computer science graduate building fast, considered
          full-stack software.
        </p>

        <div className="hero__row">
          <p className="hero__status">
            <span className="dot" aria-hidden="true" />
            Available, Jan 2027
          </p>
          <a className="btn" href="mailto:you@email.com">Get in touch</a>
        </div>
      </div>
    </header>
  );
}