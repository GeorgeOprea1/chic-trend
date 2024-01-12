import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="link-container">
        <Link
          to="/"
          aria-label="home page"
          className="shrink-0 transition duration-150 ease-in-out active:scale-95"
        >
          Chic-Trend
        </Link>
        {new Date().getFullYear()} | All Rights Reserved
      </div>
      <div className="github-container">
        <div className="name">George Oprea</div>
        <a
          href="https://github.com/GeorgeOprea1/chic-trend"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" />
        </a>
      </div>
    </footer>
  );
}
