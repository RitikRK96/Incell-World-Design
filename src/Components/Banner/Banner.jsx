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
          At{" "}
          <strong style={{ color: "var(--primary-color)" }}>
            Incell Build & Design Ltd
          </strong>
          , our story begins with a vision to streamline and elevate the world
          of retrofit planning and energy efficiency solutions across the UK.
          Founded on the principles of innovation, precision, and compliance, we
          set out to support the nation's sustainability goals through expertly
          delivered Retrofit PAS assessments and design services.
        </p>
        <p className="our-story-text">
          From our early days, we recognised the growing need for professional
          and standardised retrofit services in line with{" "}
          <strong style={{ color: "var(--primary-color)" }}>PAS 2035</strong>{" "}
          guidelines. Our team of certified professionals has since delivered
          comprehensive{" "}
          <strong style={{ color: "var(--primary-color)" }}>
            Retrofit Assessments, Coordination, and Design
          </strong>{" "}
          services, helping housing providers, landlords, and homeowners
          transition towards greener, more energy-efficient buildings.
        </p>
        <p className="our-story-text">
          Today,{" "}
          <strong style={{ color: "var(--primary-color)" }}>
            Incell Build & Design Ltd
          </strong>{" "}
          stands as a trusted partner in the retrofit and energy sector. From
          capturing on-site data through smart digital inspection forms, to
          delivering fully compliant, ready-to-implement design packages, we
          ensure every stage of the retrofit journey is seamless, efficient, and
          future-ready.
        </p>
        <p className="our-story-text">
          As we continue to grow, our commitment remains clear: to empower
          sustainable transformations, ensure regulatory compliance, and build a
          future where every property is energy-efficient and environmentally
          responsible.
        </p>
      </div>
    </div>
  );
};

export default Banner;
