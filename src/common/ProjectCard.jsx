import React from "react";

function ProjectCard({ src, link, title, descr }) {
  return (
    <a href={link} target="_blank">
      <img src={src} alt={`${title} logo`} className="hover" />
      <h3>{title}</h3>
      <p>{descr}</p>
    </a>
  );
}

export default ProjectCard;
