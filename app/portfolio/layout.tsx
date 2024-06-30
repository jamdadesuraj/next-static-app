import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio ",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-24">
      <div className="">{children}</div>
    </section>
  );
}
