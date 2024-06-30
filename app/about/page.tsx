"use client";

import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import { aboutData } from "@/config/about";

const AboutPage = () => {
  return (
    <>
      <div className="py-4 px-5 rounded-md flex justify-center mb-8">
        <h1 className={title()}>About</h1>
      </div>
      {aboutData?.map((data) => (
        <div key={data.id} className="flex flex-wrap gap-20 items-start">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h3 className="text-2xl mb-3 text-green-600">{data.mission}</h3>
            <p className="text-justify">{data.description}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12">
            <Image alt="NextUI Album Cover" src={data.aboutImg1} />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12">
            <Image alt="NextUI Album Cover" src={data.aboutImg2} />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h3 className="text-2xl mb-3 text-green-600">{data.vision}</h3>
            <p className="text-justify">{data.visionDescription}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutPage;
