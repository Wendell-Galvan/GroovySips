import Image from "next/image";
import { Noto_Serif, Montserrat } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen mx-auto">
      <div className="p-4">
        <h1
          className={`${notoSerif.className} flex justify-center font-bold text-2xl md:text-4xl`}
        >
          So Happy You're Here
        </h1>
      </div>
      <div className="pt-10">
        <p
          className={`${montserrat.className} flex justify-center px-4 lg:mx-60`}
        >
          asdasd asd asda dsad asd adsada das dsada asd asd asd asdaasd asd
          adsada ads asd asdasd asdas dasd ada dasdada asd adaasd as dasdas
          dasdas dasd asdasd
        </p>
      </div>
    </div>
  );
}
