import { useEffect, useState, useCallback } from "react";
import io from "socket.io-client";

const HomeTitle = ({ title }) => (
  <h1 className="font-bold mt-8 mb-4 text-2xl text-center text-gray-900">
    { title }
  </h1>
);

const Home = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io.connect(process.env.REACT_APP_COORDINATOR_HOST, {
      "sync disconnect on unload": true,
    });

    setSocket(socket);
  }, []);

  const handleStartTournament = useCallback(() => {
    console.log(socket)
    socket.emit("start_tournament", parseInt(process.env.REACT_APP_COORDINATOR_TOURNAMENT_ID));
  }, [socket]);

  return (
    <main>
      <HomeTitle title={`Tournament ${process.env.REACT_APP_COORDINATOR_TOURNAMENT_ID}`} />
      <div className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto px-8">
        <button className="bg-slate-600 text-white px-4 py-2 rounded-lg" onClick={handleStartTournament}>
          Start tournament
        </button>
      </div>
    </main>
  );
};

export default Home;
