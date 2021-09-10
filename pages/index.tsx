import type { NextPage } from "next";
import dynamic from "next/dynamic";

const X = dynamic(() => import("../components/X"), {
  ssr: false,
  loading: (props) => {
    if (props.error) {
      console.log("error caught in dynamic() loading option", props.error);
    }
    return <div>Loading</div>;
  },
});

const Home: NextPage = () => {
  return (
    <div>
      <X />
    </div>
  );
};

export default Home;
