import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 mb-10">
      <div className="">{children}</div>
    </section>
  );
}
