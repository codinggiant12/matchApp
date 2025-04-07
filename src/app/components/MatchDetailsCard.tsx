"use client";
import { useState } from "react";

function MatchDetailsCard() {
  const matchData = {
    date: "April 5, 2025",
    time: "7:30 PM",
    team1: {
      name: "Manchester United",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
      squad: ["Rashford", "Bruno", "Casemiro", "Varane", "Onana"],
      winProbability: 55, // %
    },
    team2: {
      name: "Real Madrid",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      squad: ["Vinicius Jr", "Bellingham", "Modric", "Rudiger", "Courtois"],
      winProbability: 45, // %
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 bg-white rounded-2xl shadow-xl border border-gray-300">
      {/* Match Date & Time */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{matchData.date}</h2>
        <p className="text-gray-600">{matchData.time}</p>
      </div>

      {/* Teams & V/S */}
      <div className="flex items-center justify-center gap-8 mb-4">
        <div className="text-center w-1/3">
          <img
            src={matchData.team1.logo}
            alt={matchData.team1.name}
            className="h-20 mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">{matchData.team1.name}</h3>
        </div>

        <div className="text-center w-1/3">
          <p className="text-xl font-bold text-gray-700 bg-gray-200 px-4 py-2 rounded-lg">
            V/S
          </p>
        </div>

        <div className="text-center w-1/3">
          <img
            src={matchData.team2.logo}
            alt={matchData.team2.name}
            className="h-20 mx-auto"
          />
          <h3 className="text-lg font-semibold mt-2">{matchData.team2.name}</h3>
        </div>
      </div>

      {/* Prediction Section */}
      <div className="text-center bg-blue-100 p-4 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-semibold text-gray-700">Winning Chances</h4>
        <div className="flex justify-around">
          <p className="text-xl font-bold text-blue-600">
            {matchData.team1.name}: {matchData.team1.winProbability}%
          </p>
          <p className="text-xl font-bold text-red-600">
            {matchData.team2.name}: {matchData.team2.winProbability}%
          </p>
        </div>
      </div>

      {/* Team Squads */}
      <div className="grid grid-cols-2 gap-6 border-t border-gray-300 pt-4">
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            {matchData.team1.name} Squad
          </h4>
          <ul className="list-disc pl-4 text-gray-700 space-y-1">
            {matchData.team1.squad.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">
            {matchData.team2.name} Squad
          </h4>
          <ul className="list-disc pl-4 text-gray-700 space-y-1">
            {matchData.team2.squad.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MatchDetailsCard;
