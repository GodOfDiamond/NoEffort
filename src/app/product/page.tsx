import { redirect } from "next/navigation";

export const metadata = {
  title: "Product | Redirecting",
  description: "Redirecting to the Wealth Lifestyle product page.",
};
export default function ProductRedirect() {
  redirect("/wealth-lifestyle/product");
}
