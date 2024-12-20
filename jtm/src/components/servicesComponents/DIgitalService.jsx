import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons4 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContentCreation = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598028/hzm18n7gqirt8nd0wmik.png";

  // Separate button items into two lists
  const firstList = buttons4.filter(
    (item) =>
      item.text === "Video production" || item.text === "Audio production"
  );
  const secondList = buttons4.filter(
    (item) => item.text === "Graphic design" || item.text === "Copywriting"
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animates only once on scroll
    });
  }, []);

  return (
    <section className="">
      <div className="sections digital">
        {/* Left texts */}
        <div
          className="digital-content"
          // className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-4 lg:gap-10"
          // data-aos="fade-right"
        >
          <div>
            <BodyProps
              header="Content Creation Services"
              paragraph="Bring your message to life with our professional content creation services, such as video production, audio production, graphic design, and copywriting. We specialize in crafting compelling, faith-inspired media content for Christian organizations, artists, and events."
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}

          <div className="list-wrapper">
            <div className="list-container">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  className={`list-item ${
                    item.text === "Video production" ||
                    item.text === "Audio production"
                      ? "list-item--social-media"
                      : "list-item--content-creation"
                  }`}
                >
                  {item.text}
                </li>
              ))}
            </div>

            <div className="list-container second">
              {secondList.map((item) => (
                <li
                  key={item.id}
                  className={`list-item ${
                    item.text === "Graphic design" ||
                    item.text === "Copywriting"
                  }`}
                >
                  {item.text}
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* Right side (Image) */}
        <div data-aos="fade-left">
          <ImageProps img={image} />
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
