import Image from "next/image";
import { Noto_Serif, Montserrat } from "next/font/google";
import profile from "/public/images/profile.png";

const notoSerif = Noto_Serif({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full mx-auto">
      <div className="mt-4">
        <h1
          className={`${notoSerif.className} flex justify-center font-bold text-2xl md:text-4xl`}
        >
          So Happy You're Here
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-evenly">
        <Image
          src={profile}
          alt="profile"
          height={500}
          width={400}
          className="object-cover"
        />
        <div className={`${montserrat.className} text-left max-w-md`}>
          <p className="mb-2">
            We are GroovySips. With over a decade of service industry experience
            and 8 years experience of operating a family owned business, we are
            so excited to be joining the event and wedding industry. Being a
            part of other’s special events brings us joy and getting to make
            connections through these interactions, no matter how small, is what
            drives our business.
          </p>
          <p className="my-4">
            Whether you are planning a large wedding, small holiday party, or
            anything in between. We are thrilled to help make your event
            extraordinary by providing our friendly and professional services.
          </p>
          <p className="mb-2">
            We understand that life looks differently for everyone. Please,
            reach out to us if there is not an option or package that fits your
            budget and we would be more than happy to chat. Afterall, it’s YOUR
            special event that is important.
          </p>
        </div>
      </div>
    </div>
  );
}
