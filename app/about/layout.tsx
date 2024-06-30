import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-24 mt-10">
      <div className="">{children}</div>
    </section>
  );
}
