import { Noto_Serif, Playfair } from "next/font/google";
import Table from "../components/Table";

const notoSerif = Noto_Serif({ subsets: ["latin"] });
const playFair = Playfair({ subsets: ["latin"] });

const Pricing = () => {
  return (
    <div className="h-full mx-auto">
      <div className="p-4">
        <h1
          className={`${notoSerif.className} flex justify-center font-bold text-2xl md:text-4xl`}
        >
          Pricing
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <h2 className={`${playFair.className} flex justify-center text-xl`}>
          PACKAGES
        </h2>
        <Table />
      </div>
      <div></div>
    </div>
  );
};

export default Pricing;
