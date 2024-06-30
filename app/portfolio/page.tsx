"use client";

import { useState, useEffect } from "react";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";

import { title } from "@/components/primitives";
import { portfolioDataProps } from "@/types";

export default function PricingPage() {
  const [data, setData] = useState<portfolioDataProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const headers = {
      "x-rapidapi-key": "1b3657b9bfmshd0d6eaa08c67d79p1f3f9ajsn8b477cb48bb3",
      "x-rapidapi-host": "myanimelist.p.rapidapi.com",
    };

    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://myanimelist.p.rapidapi.com/v2/manga/search?q=Berserk&n=50&score=0&genre=1",
          {
            headers: headers,
          }
        );
        const data = await res.json();

        setData(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-4 px-5 rounded-md flex justify-center">
        <h1 className={title()}>Portfolio</h1>
      </div>
      <div className=" gap-4 grid grid-cols-12 grid-rows-2 px-8 mt-10">
        {currentData?.map((data) => (
          <Link
            key={data.myanimelist_id}
            className="col-span-12 sm:col-span-4"
            href={`/portfolio/${data.myanimelist_id}`}
          >
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-white/90 font-medium text-xl">
                  {data.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-contain"
                src={data.picture_url}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src={data.picture_url}
                  />
                  {/* <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{data.rating}</p>
                    <p className="text-tiny text-white/60">{data.year}</p>
                  </div> */}
                </div>
                <Button radius="full" size="sm">
                  Get App
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {data.length > dataPerPage && (
          <Pagination
            showControls
            color="warning"
            initialPage={1}
            total={Math.ceil(data.length / dataPerPage)}
            onChange={paginate}
          />
        )}
      </div>
    </>
  );
}
