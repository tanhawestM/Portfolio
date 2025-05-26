export const WorkExpSection = () => {
  return (
    <section id="work" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          My <span className="text-primary">Work Experience</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-15">
          I have around 1 year of work experience, during which I have worked on
          various projects that contributed to my growth as a developer.
        </p>

        {/* Timeline Entry */}
        <div className="flex items-start gap-6 text-left mt-10 gradient-border p-6 rounded-lg shadow-lg card-hover">
          {/* Circle */}
          <div className="w-6 h-6 rounded-full  bg-amber-500 border border-amber-50 mt-1 shrink-0"></div>

          {/* Timeline Details */}
          <div className="space-y-2">
            <div className="text-2xl font-semibold">2024 - 2025</div>
            <div className="text-md text-foreground/70">Chiang Mai</div>
            <p className="text-2xl">Frontend Developer</p>
            <p className="text-lg font-medium">IN2IT Company</p>
            <p className="text-lg">
              I've been working part-time as a Frontend Developer at IN2IT
              Company for the past year. My main focus is on designing and
              building user-friendly websites with a strong eye for UX/UI. I
              also use Airtable as a backend and database platform to help
              manage content and workflows. During my time here, I’ve worked on
              three main projects — OCSC International Education Expo 2024,
              International Agricultural Forum 2024, and ACDelco Lucky Draw.
              Each project gave me a chance to create smooth, modern web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
