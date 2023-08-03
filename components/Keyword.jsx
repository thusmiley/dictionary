import Image from "next/image";
import link from "../assets/icon-new-window.svg";
import { useEffect, useRef } from "react";

const Keyword = ({ data }) => {
  // const validPhonetics = data.phonetics?.find(
  //   (phonetics) => phonetics.text && phonetics.audio
  // );
  const phonetics = data.phonetics;
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(phonetics.audio);
  });

  function playAudio() {
    audioRef.current.play();
  }

  return (
    <section className="w-container mx-auto">
      <div>
        <div className="flexBetween mb-8 md:mb-10">
          <div>
            <h1 className="heading1 mb-2">{data.word}</h1>
            <h2 className="heading2">{data.phonetic}</h2>
          </div>
          <button onClick={playAudio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 75 75"
              className="cursor-pointer play"
            >
              <g fill="#A445ED">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                <path d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </button>
        </div>
        {/* noun  */}
        <div className="flexBetween mb-8 md:mb-10">
          <h3 className="heading3 mr-5">noun</h3>
          <span className="divider"></span>
        </div>

        <div>
          <h4 className="heading4 mb-6">Meaning</h4>
          <p className="paragraph definition">
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </p>
          <p className="paragraph definition">
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </p>
          <p className="paragraph definition">
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </p>
        </div>

        <div className="my-8 md:my-10">
          <h4 className="heading4">
            Synonyms
            <span className="text-[#a445ed] ml-7 font-bold hover:underline cursor-pointer">
              electronic keyboard
            </span>
          </h4>
        </div>

        {/* verb */}
        <div className="flexBetween mb-8 md:mb-10">
          <h3 className="heading3 mr-5">verb</h3>
          <span className="divider"></span>
        </div>

        <div>
          <h4 className="heading4 mb-6">Meaning</h4>
          <p className="paragraph definition">
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </p>
          <p className="paragraph example">
            “Keyboarding is the part of this job I hate the most.”
          </p>
        </div>

        <div className="flexStart mb-20 md:mb-28 mt-8 md:mt-10 pt-5 border-t-[1px]">
          <p className="mr-5 source text-[#757575]">Source</p>
          <p className="source">
            <span>https://en.wiktionary.org/wiki/keyboard</span>
          </p>
          <a href="/" target="_blank" className="ml-2">
            <Image src={link} alt="link" width={12} height={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Keyword;
