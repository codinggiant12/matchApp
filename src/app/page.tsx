import Image from "next/image";
import MatchCard from "./components/MatchCard";
import Header from "./components/Header";
import TeamsTable from "./components/TeamsTable";
import MatchCalculate from "./components/MatchCalculate";

export default function Home() {
  return (
    <>
      <MatchCalculate />
    </>
  );
}
