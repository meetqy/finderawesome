import data from "./data.json";
import LayoutX from "../components/layout-x";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

export default function Page() {
  return <LayoutX {...data} />;
}
