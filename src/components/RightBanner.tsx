import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp,FaTwitter, } from "react-icons/fa";

import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["The Court room Strategist.", "As Advocate & Attorny.", "Ensuring Justice Prevails."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
    
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"> Hi, I'm </h4>
        <h1 className="text-4xl font-bold text-white">
        Naseer<span className="text-designColor capitalize"> Khan Yousafzai</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaWhatsapp />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
              <span className="bannerIcon">
                <FaTwitter />
                
              </span>
            </a>
            <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF/>
              </span>
            </a>
          </div>
        </div>
        
      </div>
    </FadeIn>
  );
};

export default LeftBanner;


