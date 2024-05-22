import "./index.css";
import "./fonts.css";

import gusferLogo from "./assets/gusfer-logo.png";

function Main() {
  return (
    <>
      <div id="webview">
        <div id="navbar">
          <span className="gusferText font-semibold">Gusfer</span>
          <a href="/projects">Projects</a>
          <a href="/github">GitHub</a>
          <a href="/members">Members</a>
          <button>Contact Us</button>
        </div>
        <div className="centered">
          <h1 className="title">
            Say hello to,
            <br />
            <div className="wrapper">
              <svg>
                <svg
                  color="rgba(55,65,81, 0.7)"
                  width="350"
                  height="420"
                  fill="none"
                >
                  <defs>
                    <pattern
                      id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        fill="currentColor"
                      ></rect>
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="404"
                    fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                  ></rect>
                </svg>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                  Gusfer
                </text>
              </svg>
            </div>
          </h1>
          <p>Here at Gusfer, we're developing the present.. and the future.</p>
          <p>🚀</p>
          <a href="/github">
            <button>Our GitHub</button>
          </a>
          <button className="btn2">Members</button>
        </div>
      </div>
    </>
  );
}

export default Main;
