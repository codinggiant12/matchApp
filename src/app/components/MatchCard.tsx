function MatchCard() {
  return (
    <>
      <div className="bg-blue-100 w-96 h-48 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
        {/* Match Type & Date */}
        <div className="flex justify-between w-full text-gray-700 text-sm mb-4">
          <span className="font-semibold">Match Type & No</span>
          <span className="font-semibold">Date</span>
        </div>

        {/* Teams */}
        <div className="flex justify-center items-center space-x-6 text-xl font-bold text-gray-900 my-4">
          <span>Team 1</span>
          <span className="text-red-500">V/S</span>
          <span>Team 2</span>
        </div>

        {/* Start Time */}
        <div className="text-center text-gray-600 text-sm">Starting at</div>
      </div>
    </>
  );
}

export default MatchCard;
