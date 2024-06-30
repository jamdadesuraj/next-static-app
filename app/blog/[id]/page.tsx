"use client";

import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";

import { blogProps } from "@/types";

const SingleBlog = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [data, setData] = useState<blogProps | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const blogData = await res.json();

        setData(blogData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl text-green-600">{data.title}</h2>
      </div>
      <div key={data.id}>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="w-full md:w-1/2">
            <p className="text-justify">{data.title}</p>
            <p className="text-justify">{data.body}</p>
            <p className="text-justify">{data.body}</p>
            <p className="text-justify">{data.body}</p>
            <p className="text-justify">{data.body}</p>
            <p className="text-justify">{data.body}</p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              alt="Relaxing app background"
              className="z-0 w-full h-full object-contain"
              src="https://nextui.org/images/card-example-5.jpeg"
              width={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
