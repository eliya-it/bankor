import React from "react";
import Reveal from "../Animations/Reveal";
import List from "../List/List";
import Item from "../List/Item";
import Link from "../List/Link";

const Footer = () => {
  return (
    <footer>
      <Reveal
        hidden={{ y: 200, opacity: 0 }}
        visible={{ y: 0, opacity: 1 }}
        className="footer"
      >
        <List className="footer__list">
          <h6 className="footer__heading">Site links</h6>
          <Item className="footer__item">
            <Link href="#" className="footer__link">
              Privacy & Policy
            </Link>
          </Item>

          <Item className="footer__item">
            <Link href="#" className="footer__link">
              Terms of service
            </Link>
          </Item>
          <Item className="footer__item">
            <Link href="#" className="footer__link">
              Contact us
            </Link>
          </Item>
          <Item className="footer__item">
            <Link href="#" className="footer__link">
              Company
            </Link>
          </Item>
        </List>
        <p className="footer__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          doloremque ducimus fugiat sequi voluptatum voluptate, facere
          voluptatibus iste neque provident cum sit necessitatibus expedita qui!
        </p>
        <p className="footer__copyright">
          This project was developed by
          <a
            href="https://x.com/eliya_it"
            target="_blank"
            className="link link--colored u-margin-smallest"
          >
            Eliya
          </a>
          as part of his
          <a
            href="https://eliyait.com"
            target="_blank"
            className="link link--colored u-margin-smallest"
          >
            Portfolio
          </a>
          . <br /> &copy; All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
};

export default Footer;
