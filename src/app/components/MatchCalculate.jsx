"use client"
import React, { useState } from 'react'
import TeamList from "./TeamList"
import Allmatches from './Allmatches';

function MatchCalculate() {
    const [isTeams, setisTeams] = useState(false);
    const [AllTeams, setAllTeams] = useState();
    const [display, setdisplay] = useState("teams");
    const [count, setcount] = useState(0);
    const handleTeams = () => {
        setAllTeams(count)
        if (count > 0) {
            setisTeams(true)
        }
        if (count <= 0) {
            alert("Enter the number of team first")
        }
    }

    const handlecount = (e) => {

        if (e.target.value >= 0) {
            setcount(e.target.value)
        }
    }

    let content = "plz select"
    if (display === 'teams') {
        content = <TeamList />
    } else if (display === "matches") {
        content = <Allmatches />
    } else {
        content = "no players"
    }

    return (
        <div className='text-white mt-15 '>
            <div className='w-full border-b-5 border-amber-600 bg-gray-800 h-22 flex justify-center items-center gap-3'>
                <label htmlFor="count">Enter the number of teams </label>
                <input id='count' type="number" className='border-2 rounded w-25 h-9 text-center'
                    value={count} onChange={handlecount} />

                <button onClick={handleTeams} className='mx-8 border px-3 pt-1 font-semibold
                 rounded hover:bg-white hover:border-none hover:text-black'>Make Teams</button>
            </div>
            <div className='flex' >
                <div className='h-[calc(100vh-148px)] w-1/6 h-70 bg-black text-white flex flex-col gap-4 pt-3'>
                    <button className='font-semibold text-3xl hover:bg-white hover:text-black' onClick={() => setdisplay("teams")}>Teams</button>
                    <button className='font-semibold text-3xl hover:bg-white hover:text-black' onClick={() => setdisplay("matches")}>Matches</button>
                    <button className='font-semibold text-3xl hover:bg-white hover:text-black' onClick={() => setdisplay("Players")}>Players</button>
                </div>
                <div className='text-black border w-5/6 h-[calc(100vh-148px)]'>{content}</div>
            </div>


            {/* <div className=' text-black border max-h-screen'>{isTeams ? <TeamList count={AllTeams} /> : "Calculate teams"}</div> */}
        </div>
    )
}

export default MatchCalculate
