import "./Banner.css";
import background from "../../assets/banner-background.jpg";

const Banner = () => {
  return (
    <div
      className="our-story-banner-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="our-story-banner-content">
        <h1 className="our-story-title">Our Story</h1>
        <p className="our-story-text">
          Welcome to{" "}
          <strong style={{ color: "var(--primary-color)" }}>
            Incell Build and Design Ltd
          </strong>
          , your go-to for comprehensive, energy-efficient retrofitting services
          compliant with the{" "}
          <strong style={{ color: "var(--primary-color)" }}>PAS2035:2023</strong>{" "}
          standards. Our process starts with a detailed property assessment to
          identify optimal energy improvements, followed by tailored retrofit
          designs crafted by our expert team to enhance both efficiency and home
          comfort.
        </p>
        <p className="our-story-text">
          We manage every project from design to coordination, ensuring top
          quality and compliance. Before installations, we conduct a{" "}
          <strong style={{ color: "var(--primary-color)" }}>
            Pre-Installation Building Inspection (PIBI)
          </strong>{" "}
          and tests for thermal bridging and air leakage to minimize heat loss
          and maximize comfort.
        </p>
        <p className="our-story-text">
          At{" "}
          <strong style={{ color: "var(--primary-color)" }}>
            Incell Build and Design Ltd
          </strong>
          , we commit to sustainable, high-quality retrofit solutions that
          improve energy performance and living conditions. Contact us to
          transform your home into an energy-efficient space.
        </p>
      </div>
    </div>
  );
};

export default Banner;
