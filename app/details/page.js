import CollapsibleInfo from "../components/CollapsibleInfo";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const Details = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <h1
          className={`${notoSerif.className} flex justify-center font-bold text-2xl md:text-4xl`}
        >
          Details
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <CollapsibleInfo
          title="STAFFING"
          content="asdas asdasdas asdasdasd asdasdasd asdasda asadds asdasd asda sda"
        />
        <CollapsibleInfo
          title="GRATUITY"
          content="asdas asdasdas asdasdasd asdasdasd asdasda asadds asdasd asda sda"
        />
        <CollapsibleInfo
          title="BOOKING"
          content="asdas asdasdas asdasdasd asdasdasd asdasda asadds asdasd asda sda"
        />
        <CollapsibleInfo
          title="CANCELLATION POLICY"
          content="asdas asdasdas asdasdasd asdasdasd asdasda asadds asdasd asda sda"
        />
      </div>
    </div>
  );
};

export default Details;
