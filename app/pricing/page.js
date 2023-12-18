import { Noto_Serif, Playfair, Montserrat } from "next/font/google";
import PackageCards from "../components/PackageCards";

const notoSerif = Noto_Serif({ subsets: ["latin"] });
const playFair = Playfair({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const Pricing = () => {
  const serviceItems = [
    "Professional and friendly bartenders",
    "Licensed and insured",
    "Minimum of 3 hours of service required",
    "Serving utensils, bar tools, and recyclable glassware",
    "All ice needed for event",
    "Complimentary water station",
    "Setup and breakdown of bar service area",
    "Optional: bar sign and personalised bar menu",
    "Optional: 8ft table with white or black linens",
    "No additional travel fees for Skagit, Snohomish, or King county",
  ];

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
        <h2
          className={`${playFair.className} flex justify-center text-xl md:text-2xl`}
        >
          PACKAGES
        </h2>
        <PackageCards />
      </div>
      <div
        className={`${montserrat.className} mx-auto max-w-md mt-16 text-sm md:text-base`}
      >
        <h2
          className={`${playFair.className} flex justify-center text-xl md:text-2xl`}
        >
          INCLUDED
        </h2>
        <ul className="list-disc pl-4 py-6">
          {serviceItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
