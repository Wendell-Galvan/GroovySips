import { Noto_Serif, Playfair } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });
const playFair = Playfair({ subsets: ["latin"] });

const Pricing = () => {
  return (
    <div className="h-screen mx-auto">
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
        <p className="flex justify-center m-4">
          asdas asd asadasdasd asdasda asdasd aasdasdas asdasd asdasd sadas asd
          asdasd asda dasdas dasdas das fasfsadf asfa fasd afs asf
        </p>
      </div>
      <div className="container mx-auto mt-10">
        <h2 className={`${playFair.className} flex justify-center text-xl`}>
          Included
        </h2>
        <p className="flex justify-center m-4">
          asdas asd asadasdasd asdasda asdasd aasdasdas asdasd asdasd sadas asd
          asdasd asda dasdas dasdas das fasfsadf asfa fasd afs asf
        </p>
      </div>
    </div>
  );
};

export default Pricing;
