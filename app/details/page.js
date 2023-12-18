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
          content={
            <ul className="list-disc pl-4">
              <li key={1}>Guest count of under 100: 1 bartender</li>
              <li key={2}>Guest count of 100 or over: 2 bartenders</li>
              <li key={3}>Guest count maximum of 200</li>
            </ul>
          }
        />
        <CollapsibleInfo
          title="GRATUITY"
          content="If client requests that GroovySips not provide a tip jar, then a 20% gratuity will be added"
        />
        <CollapsibleInfo
          title="BOOKING"
          content="50% of total is due within 24 hours of signing the contract. Once this payment is received, your date is booked and contract is valid. Final payment is due 14 days prior to event. Payment methods include cash, check, PayPal, and Venmo. Cash and check payments must be accepted in person."
        />
        <CollapsibleInfo
          title="CANCELLATION POLICY"
          content="All retainer fees and deposits are non-refundable. Client must provide written notice of cancellation at least 3 business days prior to event for final payment to be refunded."
        />
      </div>
    </div>
  );
};

export default Details;
