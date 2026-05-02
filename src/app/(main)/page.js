import { redirect } from "next/navigation";


const defaultPath = "08";

export default async function Home() {
  redirect(`/category/${defaultPath}`);

}
