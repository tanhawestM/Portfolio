export const StrengthSection = () => {
  return (
    <section id="strength" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          My <span className="text-primary">Strengths </span>&
          <span className="text-amber-600"> Weakness</span>
        </h2>
        <div className="inline-flex flex-wrap gap-3 justify-center mb-10">
          <span className="cosmic-button">Time management</span>
          <span className="cosmic-button">Creative</span>
          <span className="cosmic-button">Flexible</span>
          <span className="cosmic-button">Fast learner</span>
          <span className="cosmic-button">Teamwork</span>
          <span className="cosmic-button">Determination</span>
          <span className="cosmic-button">Time management</span>
          <span className="cosmic-button">Problem solving</span>
          <span className="cosmic-button">Collaborative</span>
          <span className="cosmic-button">Patient</span>
          <span className="cosmic-button">Responsibility</span>
          <span className="cosmic-button">Eager to learn new skills</span>
          <span className="cosmic-button">Critical thinking</span>
        </div>
        <div className="inline-flex flex-wrap gap-3 justify-center">
          <span className="cosmic-button bg-amber-600 text-white">
            Self-criticism
          </span>
          <span className="cosmic-button bg-amber-600 text-white">
            Perfectionism
          </span>
          <span className="cosmic-button bg-amber-600 text-white">
            Too detailed oriented
          </span>
        </div>
      </div>
    </section>
  );
};
