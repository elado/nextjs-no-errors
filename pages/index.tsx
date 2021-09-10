import type { NextPage } from "next";
import dynamic from "next/dynamic";

const X = dynamic(() => import("../components/X"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <X />
    </div>
  );
};

export default Home;
