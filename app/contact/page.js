import ContactForm from "../components/ContactForm";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div className="h-full mx-auto">
      <div className="p-4">
        <h1
          className={`${notoSerif.className} flex justify-center font-bold text-2xl md:text-4xl`}
        >
          Contact Us
        </h1>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
