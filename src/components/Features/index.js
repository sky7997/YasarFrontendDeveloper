import "./index.css";

const Features = () => {
  return (
    <section className="features-cont" id="features">
      <h1>Features</h1>
      <div className="features-content">
        <div className="feature-item">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" 
            alt="Feature 1" 
            className="feature-image"
          />
          <p className="feature-text">High-quality content on web development and design trends.</p>
        </div>
        <div className="feature-item">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
            alt="Feature 2" 
            className="feature-image"
          />
          <p className="feature-text">Regular updates with the latest programming tutorials and tips.</p>
        </div>
        <div className="feature-item">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" 
            alt="Feature 3" 
            className="feature-image"
          />
          <p className="feature-text">A community-driven platform with user engagement and feedback.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
