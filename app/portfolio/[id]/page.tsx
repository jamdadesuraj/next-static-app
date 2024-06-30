"use client";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { portfolioDataProps } from "@/types";

const SinglePortfolio = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [data, setData] = useState<portfolioDataProps | null>(null);

  useEffect(() => {
    const headers = {
      "x-rapidapi-key": "1b3657b9bfmshd0d6eaa08c67d79p1f3f9ajsn8b477cb48bb3",
      "x-rapidapi-host": "myanimelist.p.rapidapi.com",
    };

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://myanimelist.p.rapidapi.com/v2/manga/${id}`,
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
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl">{data.title}</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="w-full md:w-1/2">
          <p className="text-justify">{data.description}</p>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>MyAnimeList URL</TableColumn>
              <TableColumn>MyAnimeList ID</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>{data.myanimelist_url}</TableCell>
                <TableCell>{data.myanimelist_id}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            alt="Portfolio Image"
            className="z-0 w-full h-full object-contain"
            src={data.picture_url}
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
