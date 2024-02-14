import React from "react";
import CV from "../assets/Sukhad Sharma Final CV.pdf";

const myPhoto =
  "https://github.com/SCORLEOs773/CV-React/blob/main/src/assets/Profile%20Pic.jpg?raw=true";

const AboutMe = () => {
  const downloadCV = () => {
    window.open(CV, "_blank");
  };

  return (
    <div
      style={{
        textAlign: "left",
        padding: "20px",
        backgroundColor: "#f0f0f0", // Light background color
        borderRadius: "10px", // Rounded corners
      }}
    >
      <img
        src={myPhoto}
        alt="Sukhad Sharma"
        style={{
          width: "200px",
          borderRadius: "50%",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      />

      <h2>Sukhad Sharma</h2>
      <p>
        <strong>
          Computer Science Engineering (CSE) Hons. | 3rd Year | 20 years old
        </strong>
      </p>

      <p>
        I am SUKHAD SHARMA, a dedicated and passionate individual pursuing a
        Bachelor's degree in Computer Science with a focus on Full Stack
        Software Development. My academic journey has equipped me with a strong
        foundation in computer science and honed my skills in full-stack
        development.
      </p>

      <p>
        With a proactive attitude, I stay updated with the latest technologies
        and industry trends. My goal is to contribute innovative solutions to
        real-world problems through software development. I have a keen interest
        in areas such as digital transformation, data analytics, and deep
        learning.
      </p>

      <p>
        Committed to continuous learning, I actively participate in
        certifications and projects to enhance my skills. As a dynamic and
        adaptable individual, I am eager to collaborate with like-minded
        professionals and contribute to impactful projects.
      </p>

      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#3498db",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          border: "none",
          marginTop: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onClick={downloadCV}
      >
        Download CV
      </button>
    </div>
  );
};

export default AboutMe;
