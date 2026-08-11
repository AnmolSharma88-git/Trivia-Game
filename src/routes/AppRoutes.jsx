import {Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Setup from "../pages/Setup";
import Game from "../pages/Game";
import Scoreboard from "../pages/Scoreboard";

function AppRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/game" element={<Game />} />
            <Route path="/scoreboard" element={<Scoreboard />} />   
        </Routes>
    );
}

export default AppRoutes;