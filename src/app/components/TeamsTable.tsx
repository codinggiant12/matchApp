"use client";
import { useState } from "react";

function TeamsTable() {
  // Sample Data
  const [teams] = useState([
    { name: "Manchester United", played: 10, won: 7, lost: 3, points: 21 },
    { name: "Real Madrid", played: 10, won: 6, lost: 4, points: 18 },
    { name: "Barcelona", played: 10, won: 5, lost: 5, points: 15 },
    { name: "Bayern Munich", played: 10, won: 4, lost: 6, points: 12 },
    { name: "Juventus", played: 10, won: 3, lost: 7, points: 9 },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🏆 League Standings
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Team</th>
              <th className="py-3 px-6 text-center">Played</th>
              <th className="py-3 px-6 text-center">Won</th>
              <th className="py-3 px-6 text-center">Lost</th>
              <th className="py-3 px-6 text-center">Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6 font-medium">{team.name}</td>
                <td className="py-3 px-6 text-center">{team.played}</td>
                <td className="py-3 px-6 text-center">{team.won}</td>
                <td className="py-3 px-6 text-center">{team.lost}</td>
                <td className="py-3 px-6 text-center font-bold">
                  {team.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamsTable;
