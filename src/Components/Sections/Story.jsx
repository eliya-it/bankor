import React from "react";
import story from "../../assets/img/story-photo.webp";
import userPhoto from "../../assets/img/user-1.jpg";
import Reveal from "../Animations/Reveal";
import Heading from "../UI/Heading";
import Section from "../Section/Section";

const Story = () => {
  return (
    <Section className="section--story" id="story">
      <Heading text="Hear from our clients" />
      <div className="story">
        <Reveal
          hidden={{ x: "-100%", opacity: 0 }}
          visible={{ x: "0", opacity: 1 }}
          className="story__photo-box"
        >
          <img src={story} alt="Women at the office" className="story__photo" />
        </Reveal>
        <Reveal
          hidden={{ x: "100%", opacity: 0 }}
          visible={{ x: "0", opacity: 1 }}
          className="story__text"
        >
          <p className="story__heading">We had the best experience on Bankor</p>

          <p className="paragraph story__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            atque rerum illo eum similique vitae in corrupti, placeat dicta at
            labore corporis assumenda. Delectus earum consequuntur quibusdam
            iste, voluptatum dolor distinctio soluta omnis, consectetur at
            officia veniam enim nostrum repellendus.
          </p>
          <figure className="story__user">
            <img
              src={userPhoto}
              alt="User 1 photo"
              className="story__user__photo"
            />
            <figcaption className="story__user__name">Max Smith</figcaption>
            <p className="story__user__job">CEO of Company</p>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
};

export default Story;
