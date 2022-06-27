import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonImageSrc from "./imgs/AI-imaginary-picture.jpg";
import twitter from "./icons/Twitter Icon.svg";
import facebook from "./icons/Facebook Icon.svg";
import instagram from "./icons/Instagram Icon.svg";
import github from "./icons/GitHub Icon.svg";

function PersonName() {
  return <p className="personName">Laura Smith</p>;
}

function MyButton() {
  return (
    <div className="myButtons">
      <Button className="btn btn-light">
        <i class="fa fa-envelope" aria-hidden="true"></i> Email
      </Button>
      <Button className="btn btn-primary">
        <i class="fa fa-linkedin-square"></i> LinkedIn
      </Button>
    </div>
  );
}

function PersonImage() {
  return (
    <img
      src={PersonImageSrc}
      width="317"
      height="317"
      alt="AI female generated picture"
    />
  );
}

function FrontEndDeveloper() {
  return <p className="frontend">Frontend Developer</p>;
}

function Website() {
  return <p className="website">laurasmith.website</p>;
}

function About() {
  return <p className="about">About</p>;
}

function AboutText() {
  return (
    <p className="abouttext">
      I am a frontend developer with a particular interest in making things
      simple and automating daily tasks. I try to keep up with security and best
      practices, and am always looking for new things to learn.
    </p>
  );
}

function Interests() {
  return <p className="about">Interests</p>;
}

function InterestsText() {
  return (
    <p className="abouttext">
      Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
    </p>
  );
}

function Footer() {
  return (
    <footer className="mainFooter">
      <a href="#">
        <img className="firstImage" src={twitter} />
      </a>
      <a href="#">
        <img src={facebook} />
      </a>
      <a href="#">
        <img src={instagram} />
      </a>
      <a href="#">
        <img src={github} />
      </a>
    </footer>
  );
}

export {
  PersonImage,
  PersonName,
  FrontEndDeveloper,
  Website,
  MyButton,
  About,
  AboutText,
  Interests,
  InterestsText,
  Footer,
};
