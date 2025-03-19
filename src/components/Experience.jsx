import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <p>
        Please visit my Github account to see my projects and contributions.
        Thanks.
      </p>
      <div className="github-contributions">
        <div>
          <h2>My GitHub Contributions</h2>
          <img
            src="https://ghchart.rshah.org/budhathokidinesh"
            alt="Dinesh Budhathoki's GitHub contributions chart"
            style={{ width: "100%", maxWidth: "800px" }}
          />
        </div>
        <a
          href="https://github.com/budhathokidinesh"
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-link"
        >
          View My GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Experience;
