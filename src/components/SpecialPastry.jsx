import React, { useState } from "react";
import pastryImg from "../assets/pastry.jpg"; // Change name if needed

const SpecialPastry = () => {
  const [age, setAge] = useState("");
  const [eligible, setEligible] = useState(false);

  const handleCheck = () => {
    if (parseInt(age) == 18 || parseInt(age) == 21 || parseInt(age) ==  50 || parseInt(age) == 75 || parseInt(age) == 100) {
      setEligible(true);
    } else {
      setEligible(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 py-12 px-6 text-center">
      <h2 className="text-4xl font-bold text-brown-800 mb-6">
        🎉 Special Pastry Gift! 🎂
      </h2>
      <p className="text-lg text-brown-700 mb-6">
        Enter your age to see if you qualify for a <span className="font-semibold">FREE Pastry</span> 
        on your milestone birthday!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={pastryImg}
          alt="Special Pastry"
          className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-amber-300"
        />

        <div className="flex flex-col items-center">
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-3 rounded-xl border-2 border-amber-400 w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            onClick={handleCheck}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Check Eligibility
          </button>

          {age && (
            <p
              className={`mt-4 text-lg font-semibold ${
                eligible ? "text-green-600" : "text-red-600"
              }`}
            >
              {eligible
                ? "🎉 Congrats! You get a FREE pastry! 🍰"
                : "Sorry! No free pastry this time 😔"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpecialPastry;
