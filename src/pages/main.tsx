import { useEffect, useRef, useState, useMemo, FunctionComponent } from "react";

const SnakeSite: FunctionComponent = () => {
  // about
  const ref1 = useRef(null);
  //team
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  //donation
  const ref5 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  const isInViewport4 = useIsInViewport(ref4);
  const isInViewport5 = useIsInViewport(ref5);

  return (
    <>
      <section id="stick-nav-bar">
        <div id="menu-wrapper">
          <a>SNAKE</a>
          <div id="menubar">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="menu">
                <path
                  id="Vector"
                  d="M4 12H20M4 6H20M4 18H20"
                  stroke="#FCD34D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section id="hero">
        <div id="gd-flag" />
        <div id="text-transition">
          <h2>
            Time to <span>FREE</span> the <span>WORLD </span> <br />
            One Day at a Time
          </h2>
        </div>
      </section>
      <section id="action-call">
        <div id="action-wrapper">
          <button ref={ref5} className="donate">
            <div id="click">
              <span id="letra-1" className="bounce">
                C
              </span>
              <span id="letra-2" className="bounce">
                L
              </span>
              <span id="letra-3" className="bounce">
                I
              </span>
              <span id="letra-4" className="bounce">
                C
              </span>
              <span id="letra-5" className="bounce">
                K
              </span>
              <span id="letra-6" className="bounce">
                !
              </span>
            </div>
            Donate Now
          </button>
          <div id="go-down">
            <p>SCROLL</p>
          </div>
        </div>
      </section>
      <button
        className="stick-donate donate"
        style={
          {
            "--in-view5": isInViewport5 ? "none" : "block",
          } as React.CSSProperties
        }
      >
        <div id="click">
          <span id="letra-1" className="bounce">
            C
          </span>
          <span id="letra-2" className="bounce">
            L
          </span>
          <span id="letra-3" className="bounce">
            I
          </span>
          <span id="letra-4" className="bounce">
            C
          </span>
          <span id="letra-5" className="bounce">
            K
          </span>
          <span id="letra-6" className="bounce">
            !
          </span>
        </div>
        DONATE
      </button>
      <section id="about" ref={ref1}>
        <div id="about-wrapper">
          <div
            id="about-card"
            style={
              {
                "--in-view": isInViewport1 || !isInViewport5 ? "block" : "none",
              } as React.CSSProperties
            }
          >
            <img alt="Snakes" src="public/snakesss.png"></img>
            <div id="dialog-wrapper">
              <h2>THE IDEA</h2>
              <hr />
              <p>
                Empowering Individuals through Crypto. We advocate for a future
                where individuals have the power to control their finances and
                share information freely. By harnessing the potential of crypto
                and Web3, we aim to break free from the constraints imposed by
                traditional systems and create a more equitable world.
                <br />
                <br />
                Our mission is to empower those who are underserved by
                traditional institutions, providing them with the knowledge and
                resources to leverage crypto and Web3 for their own benefit. We
                advocate for the ethical use of these Technologies.
              </p>
            </div>
            <div id="circle-wrapper">
              <div id="mini" className="circle"></div>
              <div id="big" className="circle"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="team">
        <div id="team-wrapper">
          <div id="faixa">
            <h1>THE TEAM</h1>
          </div>
          <div className="team-p" ref={ref2}>
            <div
              id="team1"
              style={
                {
                  "--in-view1": isInViewport2 ? "block" : "none",
                } as React.CSSProperties
              }
            ></div>
          </div>
          <div className="team-p" ref={ref3}>
            <div
              id="team2"
              style={
                {
                  "--in-view2": isInViewport3 ? "block" : "none",
                } as React.CSSProperties
              }
            ></div>
          </div>
          <div className="team-p" ref={ref4}>
            <div
              id="team3"
              style={
                {
                  "--in-view3": isInViewport4 ? "block" : "none",
                } as React.CSSProperties
              }
            ></div>
          </div>
        </div>
      </section>
      <section id="footer"></section>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default SnakeSite;
