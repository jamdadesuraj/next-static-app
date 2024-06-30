"use client";

import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { Pagination } from "@nextui-org/pagination";

import { title } from "@/components/primitives";
import CustomButton from "@/components/common/CustomButton";
import { blogProps } from "@/types";

export default function BlogPage() {
  const [data, setData] = useState<blogProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 2;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const blogData = await res.json();

        setData(blogData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <>
      <div className="text-center mb-4">
        <h1 className={title()}>Blog</h1>
      </div>

      {currentData.map((data) => (
        <div key={data.id} className="mb-4">
          <Link href={`/blog/${data.id}`}>
            <Card>
              <CardBody>
                <div className="flex gap-4">
                  <div className="flex gap-5">
                    <div className="w-full md:w-1/2">
                      <Image
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-contain"
                        src="https://nextui.org/images/card-example-5.jpeg"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl mb-2 text-green-700 font-bold">
                        {data.title}
                      </h2>
                      <p className="text-sm mb-4">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <hr />
                      <p className="py-4">{data.body}</p>
                      <CustomButton>Read More</CustomButton>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>
      ))}

      <div className="flex justify-center">
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
