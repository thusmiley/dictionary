import Image from "next/image";
import linkIcon from "../assets/icon-new-window.svg";
import { useEffect, useRef } from "react";

const Keyword = ({ data }) => {
  const validPhonetics = data.phonetics?.find((phonetics) => phonetics.text && phonetics.audio);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio);
  }, [data]);

  function playAudio() {
    audioRef.current.play();
  }

  return (
    <section className="w-container mx-auto">
      <div>
        <div className="flexBetween mb-8 md:mb-10">
          <div>
            <h1 className="heading1 mb-2 md:mb-[11px]">{data.word}</h1>
            <h2 className="heading2">{validPhonetics?.text}</h2>
          </div>
          <button onClick={playAudio} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" className="play w-12 h-12 md:w-[75px] md:h-[75px]">
              <g fill="#A445ED">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                <path d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </button>
        </div>

        {/* meanings  */}
        {data.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <div className="flexBetween my-8 md:my-10">
                <h3 className="heading3 mr-5">{meaning.partOfSpeech}</h3>
                <span className="bg-dark-3a h-[1px] w-full"></span>
              </div>

              <div>
                <h4 className="heading4 mb-[17px] md:mb-6">Meaning</h4>
                {meaning.definitions.map((definition, index) => {
                  return (
                    <div key={index}>
                      <p className="paragraph bullet mb-[13px] relative ml-5 md:ml-[47px]">{definition.definition}</p>

                      {definition.example && <p className="paragraph text-grey-75 ml-5 mb-5 md:ml-[47px]">{definition.example}</p>}

                      {definition.synonyms.length !== 0 && (
                        <div className="my-8 md:my-10">
                          <h4 className="heading4">
                            Synonyms
                            <span className="text-[#a445ed] ml-7 font-bold md:ml-10">{definition.synonyms.join(", ")}</span>
                          </h4>
                        </div>
                      )}

                      {definition.antonyms.length !== 0 && (
                        <div className="my-8 md:my-10">
                          <h4 className="heading4">
                            Antonyms
                            <span className="text-[#a445ed] ml-7 font-bold md:ml-10">{definition.antonyms.join(", ")}</span>
                          </h4>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* source  */}
        <div className="flexStart mb-[85px] md:mb-[118px] mt-8 md:mt-10 pt-5 border-t-[1px] overflow-hidden">
          <p className="mr-5 decoration-grey-75 text-[14px] leading-[17px] underline text-[#757575] md:mr-[25px]">Source</p>
          <p className="text-[14px] leading-[17px] max-w-[240px] truncate md:max-w-full underline">
            <a href={data.sourceUrls[0]}>{data.sourceUrls[0]}</a>
          </p>
          <a href={data.sourceUrls[0]} target="_blank" className="ml-2">
            <Image src={linkIcon} alt="link" width={12} height={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Keyword;
