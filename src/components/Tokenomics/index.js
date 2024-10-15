import React from "react";
import "./index.css";

const Tokenomics = () => {
  return (
    <section className="tokenomics-cont" id="tokenomics">
      <h1>Tokenomics</h1>
      <div className="tokenomics-grid">
        <div className="tokenomics-item item-1">
          <h2>Supply Distribution</h2>
          <p>Details about supply distribution go here.</p>
        </div>
        <div className="tokenomics-item item-2">
          <h2>Use Cases</h2>
          <p>Information about the use cases of the token.</p>
        </div>
        <div className="tokenomics-item item-3">
          <h2>Token Utility</h2>
          <p>Explanation of token utility and benefits.</p>
        </div>
        <div className="tokenomics-item item-4">
          <h2>Roadmap</h2>
          <p>Outline of the token development roadmap.</p>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="footer-cont">
        <div className="footer-social">
        <p className="aa">© 2024 AI.GEN. All rights reserved.</p>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        
      </footer>
    </section>
  );
};

export default Tokenomics;
