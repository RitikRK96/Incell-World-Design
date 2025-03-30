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
          Since our inception, <strong>Incell World</strong> has been driven by a
          passion for delivering cutting-edge telecom solutions that empower
          seamless connectivity. What started as a small venture with a vision
          to revolutionise network infrastructure has grown into a trusted
          global partner, providing innovative solutions in <strong>4G LTE, 5G,
          VoLTE</strong>, and beyond.
        </p>
        <p className="our-story-text">
          Our journey began with a focus on enhancing network performance and
          ensuring robust, scalable, and future-ready telecom solutions. Through
          years of dedication and continuous learning, we have evolved into a
          company that not only adapts to industry advancements but also
          pioneers innovative technologies that redefine the digital landscape.
        </p>
        <p className="our-story-text">
          Today, <strong>Incell World</strong> is at the forefront of transforming
          telecom ecosystems by providing intelligent solutions that meet the
          ever-growing demands of modern communication networks. As we move
          forward, we remain dedicated to innovation, sustainability, and
          creating a connected future where technology enhances every aspect of
          life.
        </p>
      </div>
    </div>
  );
};

export default Banner;
