import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="">{children}</div>
    </section>
  );
}
