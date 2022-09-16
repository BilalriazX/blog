import React from "react";
import "./Home.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import researchgate from "../assests/logo1.png";
import ieee from "../assests/logo22.jpg";

const Home = () => {
  return (
    <>
      <div>
        <Typography className="intro">Gabriel Fernandes</Typography>
        <Typography className="intro-sub">
          I'm a software engineer with both front-end and back-end experience.
        </Typography>
      </div>
      <div className="link">
        <Typography variant="h4">
          Get in touch:{" "}
          <a className="links0" href="mailto:gabfernandes@outlook.pt">
            gabfernandes@outlook.pt
          </a>
        </Typography>
      </div>
      <div className="edu">
        <Typography variant="h2">Experience</Typography>
        <Typography variant="h3">Software Engineer @  <a
            className="links"
            href="https://web.q-better.com/"
          >
            Q-Better
          </a></Typography>
      </div>
      <div className="date">
        <p>March 2022 - Present </p>
      </div>
      <div className="edu">
        <Typography variant="h3">Braga Portugal</Typography>
      </div>
      <div className="edu2">
        <Typography variant="h3">Software Engineer @ <a
            className="links"
            href="https://www.vilt-group.com/en/"
          >
            VILT
          </a></Typography>
      </div>
      <div className="date2">
        <p>Feburary 2019 - Present </p>
      </div>

      <ul>
        <li>Front-end experience with JQuery and Rivets.js</li>
        <li>Back-end experience with Java/Spring</li>
        <li>Working with Opentext CMS WEM</li>
      </ul>
      <div className="edu">
        <Typography variant="h3">Braga Portugal</Typography>
      </div>
      <div className="edu">
        <Typography variant="h2">Publications</Typography>
      </div>
      <div className="edu2">
        <Typography variant="h3">
          Space Colonisation for Procedural Road Generation ·{" "}
        </Typography>
      </div>
      <div className="desc">
        <p>November 2018</p>
        <p>
          Procedural road layout generation has been traditionally approached
          using L-Systems, with some exceptions.
        </p>
        <p>
          In this context, it was presented an alternative approach for
          procedural road layout generation: space colonisation.
        </p>
        <p>
          This approach generates layouts in rural and urban environments. It
          can also be used with flow-fields, demographics, geographical, and
          boundary maps to further fine tune the layout.
        </p>
      </div>
      <strong>
        This article was presented at{" "}
        <a className="links" href="http://gpcg.pt/ICGI2018/">
          ICGI ‘18
        </a>
        , organized by LaSIGE and the Eurographics Portuguese Chapter, winning
        the prize for best paper.
      </strong>
      <p>
        <strong>DOI:</strong>
        "10.1109/ITCGI.2018.8602928"
      </p>
      <strong>LASIGE/FCUL, Lisbon, Portugal</strong>

      <div className="edu">
        <Typography variant="h2">Education</Typography>
        <Typography variant="h3">
          Software Engineer @{" "}
          <a className="links" href="https://www.utexas.edu/">
            The University of Texas at Austin
          </a>
        </Typography>
        <h4 className="edurange">July - August 2017</h4>
        <p>
          Summer Internship in Parallel and Distributed Computing recurring to
          the STAMPEDE2 supercomputer at
        </p>
        <a className="links" href="https://www.tacc.utexas.edu/">
          Texas Advanced Computing Center.
        </a>
        <Typography variant="h3">Austin, TX, USA</Typography>
        <Typography variant="h3">
          MSc in Computer Engineering @{" "}
          <a
            className="links"
            href="https://www.uminho.pt/EN/Pages/default.aspx"
          >
            Universidade do Minho
          </a>
        </Typography>
        <p className="edurange">2013 - 2018</p>
        <a
          className="links"
          href="https://repositorium.sdum.uminho.pt/handle/1822/64530"
        >
          Thesis:
        </a>
        <ul>
          <li>Space Colonisation for Procedural Road Generation</li>
        </ul>

        <p>Specialised in:</p>
        <ul>
          <li>Parallel and Distributed Computing</li>
          <li>Computer Graphics</li>
        </ul>
        <p>Proficient in:</p>
        <ul>
          <li>Parallel and Distributed Computing</li>
        </ul>
        <Typography variant="h3">Braga, Portugal</Typography>
      </div>
      <div className="edu">
        <Typography variant="h2">Get in touch</Typography>
        <ul className="logos">
          <li>
            <a className="icons" href="mailto:gabfernandes@outlook.pt">
              <AlternateEmailIcon />
            </a>
          </li>
          <li>
            <a className="icons" href="https://github.com/Nosferatu31">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              className="icons"
              href="https://www.linkedin.com/in/gabriel-fernandes/" width={40}
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              className="icons"
              href="https://www.linkedin.com/in/gabriel-fernandes/"
            >
              <img src={researchgate} alt="Logo" width={40} />
            </a>
          </li>
          <li>
            <a
              className="icons"
              href="https://www.linkedin.com/in/gabriel-fernandes/"
            >
              <img src={ieee} alt="Logo" width={40} />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer">Designed and built by Gabriel Fernandes</p>
    </>
  );
};

export default Home;
