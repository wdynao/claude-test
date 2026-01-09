import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Studio - Modern Design" },
    { name: "description", content: "Create beautiful experiences with intuitive tools." },
  ];
};

export default function Index() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">Studio</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Design that
            <br />
            <span className="gradient-text">inspires.</span>
          </h1>
          <p className="hero-subtitle">
            Create beautiful experiences with intuitive tools.
            <br />
            Simple, powerful, and designed for everyone.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">&#9670;</div>
            <span>Design</span>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">&#9679;</div>
            <span>Create</span>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">&#9632;</div>
            <span>Share</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2>Powerful features</h2>
          <p>Everything you need to bring your ideas to life.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-blue">&#x2728;</div>
            <h3>Intuitive Design</h3>
            <p>Create stunning visuals with our easy-to-use interface that feels natural from day one.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-purple">&#x26A1;</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance ensures your workflow stays smooth and responsive.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-pink">&#x1F510;</div>
            <h3>Secure & Private</h3>
            <p>Your data is protected with enterprise-grade security and encryption.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Join thousands of creators who trust Studio.</p>
          <button className="btn-primary btn-large">Start Your Journey</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Studio</div>
          <p>&copy; 2026 Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
