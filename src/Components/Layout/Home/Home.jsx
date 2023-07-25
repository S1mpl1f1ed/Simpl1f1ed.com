import React, { useEffect } from "react";
import "./style.scss";

function Home() {
  const polygons = (
    <>
      <polygon
        className="animated-polygon"
        id="1"
        points="412.01 190.84 360.01 223.42 360.01 158.26 412.01 190.84"
      />
      <polygon
        className="animated-polygon"
        id="2"
        points="360.01 158.26 360.01 223.42 308.01 190.84 360.01 158.26"
      />
      <polygon
        className="animated-polygon"
        id="3"
        points="360.01 158.26 308.01 190.84 308.01 125.68 360.01 158.26"
      />
      <polygon
        className="animated-polygon"
        id="4"
        points="308.01 125.68 308.01 190.84 256.02 158.26 308.01 125.68"
      />
      <polygon
        className="animated-polygon"
        id="5"
        points="308.01 125.68 256.02 158.26 256.02 93.1 308.01 125.68"
      />
      <polygon
        className="animated-polygon"
        id="6"
        points="256.02 93.1 256.02 158.26 203.99 125.68 256.02 93.1"
      />
      <polygon
        className="animated-polygon"
        id="7"
        points="203.99 125.68 203.99 190.84 151.99 158.26 203.99 125.68"
      />
      <polygon
        className="animated-polygon"
        id="8"
        points="203.99 190.84 151.99 223.42 151.99 158.26 203.99 190.84"
      />
      <polygon
        className="animated-polygon"
        id="9"
        points="203.99 190.84 203.99 256 151.99 223.42 203.99 190.84"
      />
      <polygon
        className="animated-polygon"
        id="10"
        points="256.02 223.42 203.99 256 203.99 190.84 256.02 223.42"
      />
      <polygon
        className="animated-polygon"
        id="11"
        points="256.02 223.42 256.02 288.58 203.99 256 256.02 223.42"
      />
      <polygon
        className="animated-polygon"
        id="12"
        points="308.01 256 256.02 288.58 256.02 223.42 308.01 256"
      />
      <polygon
        className="animated-polygon"
        id="13"
        points="308.01 256 308.01 321.16 256.02 288.58 308.01 256"
      />
      <polygon
        className="animated-polygon"
        id="14"
        points="360.01 288.58 308.01 321.16 308.01 256 360.01 288.58"
      />
      <polygon
        className="animated-polygon"
        id="15"
        points="360.01 288.58 360.01 353.74 308.01 321.16 360.01 288.58"
      />
      <polygon
        className="animated-polygon"
        id="16"
        points="360.01 353.74 308.01 386.32 308.01 321.16 360.01 353.74"
      />
      <polygon
        className="animated-polygon"
        id="17"
        points="308.01 386.32 256.02 418.9 256.02 353.74 308.01 386.32"
      />
      <polygon
        className="animated-polygon"
        id="18"
        points="256.02 353.74 256.02 418.9 203.99 386.32 256.02 353.74"
      />
      <polygon
        className="animated-polygon"
        id="19"
        points="256.02 353.74 203.99 386.32 203.99 321.16 256.02 353.74"
      />
      <polygon
        className="animated-polygon"
        id="20"
        points="203.99 321.16 203.99 386.32 151.99 353.74 203.99 321.16"
      />
      <polygon
        className="animated-polygon"
        id="21"
        points="203.99 321.16 151.99 353.74 151.99 288.58 203.99 321.16"
      />
      <polygon
        className="animated-polygon"
        id="22"
        points="151.99 288.58 151.99 353.74 99.99 321.16 151.99 288.58"
      />
    </>
  );

  useEffect(() => {
    // Function to set the transform-origin to the center of each polygon
    function setTransformOriginForPolygons() {
      const polygons = document.querySelectorAll(".animated-polygon");
      polygons.forEach((polygon) => {
        const bbox = polygon.getBBox();
        const centerX = bbox.x + bbox.width / 2;
        const centerY = bbox.y + bbox.height / 2;
        polygon.style.transformOrigin = `${centerX}px ${centerY}px`;
      });
    }

    // Call the function when the component mounts
    setTransformOriginForPolygons();
  }, []);

  return (
    <div id="Home" className="page">
      <div className="header">Coming Soon</div>
      <div className="sub-header">New Look &#8226; New Purpose</div>
      <div className="extra"></div>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 512 512"
        >
          {polygons}
        </svg>
      </div>
    </div>
  );
}

export default Home;
