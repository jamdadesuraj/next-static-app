import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type aboutDataProps = {
  mission: string;
  vission: string;
  description: string;
  vissionDescription: string;
  aboutImg: string;
};

export type portfolioDataProps = {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  subDesc: string;
  desc: string;
  author: string;
  authImg: string;
  thumbnail: string;
  rating: number;
  year: string;
  genre: string;
  rank: number;
  imdbid: string;
  description: string;
  myanimelist_id: number;
  picture_url: string;
  myanimelist_url: string;
};

export type blogProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  body: string;
};

export type contactProps = {
  name: string;
  email: string;
  mobile: string;
  desc: string;
};
