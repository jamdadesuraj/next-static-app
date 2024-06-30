"use client";

import { Image } from "@nextui-org/image";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";

import style from "../styles/home.module.css";

import AboutPage from "./about/page";
import Contact from "./contact/page";

import CustomButton from "@/components/common/CustomButton";

export default function Home() {
  return (
    <>
      <section className="flex flex-wrap gap-20 items-start">
        <div className="w-full md:w-1/2 lg:w-6/12 flex justify-center flex-col h-screen">
          <h1 className={`text-6xl font-bold mb-4 ${style.title}`}>
            Better Design For Your Digital assets Products
          </h1>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            itaque ullam nesciunt nisi placeat ratione debitis laborum provident
            facere commodi! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Vero itaque ullam nesciunt nisi placeat ratione debitis
            laborum provident facere commodi!
          </p>
          <div className="flex gap-5 items-center mb-4">
            <Badge color="primary" content="5">
              <Avatar
                isBordered
                radius="full"
                src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
              />
            </Badge>
            <p>
              Developed by ||{" "}
              <span className="text-green-600">Suraj Jamdade</span>
            </p>
          </div>
          <Link href="/portfolio">
            <CustomButton className="">See Our Works</CustomButton>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-4/12">
          <Image
            isBlurred
            alt="NextUI Album Cover"
            className="m-5 img"
            src="/hero.png"
            width={500}
          />
        </div>
      </section>
      <AboutPage />
      <Contact />
    </>
  );
}
