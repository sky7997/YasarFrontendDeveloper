import "./index.css";

const Roadmap = () => {
  return (
    <section className="roadmap-cont" id="roadmap">
      <h1 className="roadmap-title">Roadmap</h1>
      <div className="milestones">
        <div className="milestone animated-fade-in">
          <h2>Phase 1</h2>
          <p>Research and Development</p>
        </div>
        <div className="milestone animated-fade-in">
          <h2>Phase 2</h2>
          <p>Beta Launch</p>
        </div>
        <div className="milestone animated-fade-in">
          <h2>Phase 3</h2>
          <p>Full Launch</p>
        </div>
        <div className="milestone animated-fade-in">
          <h2>Phase 4</h2>
          <p>Community Engagement</p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
