import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const PackageCards = () => {
  const data = [
    {
      package: "STAY GOLDEN",
      drinks: ["Beer, Wine, and Seltzer"],
      cost: "$170/hr",
    },
    {
      package: "GOOD VIBES ONLY",
      drinks: ["Beer, Wine, and Seltzer", "Champagne", "Champagne Toast"],
      cost: "$200/hr",
    },
    {
      package: "PEACE, LOVE, AND LOTS OF POURS",
      drinks: ["Beer, Wine, and Seltzer", "Two Cocktails"],
      cost: "$230/hr",
    },
  ];

  return (
    <div
      className={`${montserrat.className} max-w-4xl mx-auto m-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
    >
      {data.map((val, key) => (
        <div
          key={key}
          className="bg-stone-100 text-stone-800 border border-stone-50 drop-shadow-lg hover:shadow-pink-200 shadow-pink-100 hover:drop-shadow-xl rounded-md m-4"
        >
          <h2 className="text-xl font-bold m-2">{val.package}</h2>
          <ul className="list-disc ml-6">
            {val.drinks.map((drink, index) => (
              <li key={index}>{drink}</li>
            ))}
          </ul>
          <p className="mt-4 ml-2 font-bold">{val.cost}</p>
        </div>
      ))}
      <div className="bg-stone-100 text-stone-800 mx-auto border border-stone-50 drop-shadow-lg p-2">
        <h3 className="font-bold">Add on:</h3>
        <ul>
          <li>Champagne</li>
          <li>Champagne Toast</li>
          <li className="mt-4 font-bold">$260/hr</li>
        </ul>
      </div>
    </div>
  );
};

export default PackageCards;

//table for packages

// return (
//   <div
//     className={`${montserrat.className} max-w-4xl mx-auto mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
//   >
//     <table className="bg-stone-100 text-stone-880 border border-stone-880 shadow-lg rounded-md p-4">
//       <thead>
//         <tr>
//           <th className="py-2 px-4 border-b">Package</th>
//           <th className="py-2 px-4 border-b">Drinks</th>
//           <th className="py-2 px-4 border-b">Cost</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td className="py-2 px-4 border-b">{val.package}</td>
//               <td className="py-2 px-4 border-b">
//                 <ul>
//                   {val.drinks.map((drink, index) => {
//                     return (
//                       <li key={index} className="my-2">
//                         {drink}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </td>
//               <td className="py-2 px-4 border-b">{val.cost}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   </div>
// );
