import { useEffect, useContext } from "react";
import io from "socket.io-client";

const AdminSocket = () => {
  useEffect(() => {
    const socket = io.connect(process.env.REACT_APP_COORDINATOR_HOST, {
      "sync disconnect on unload": true,
    });

    socket.on("connect", () => {
      socket.emit("signin", {
        user_name: process.env.REACT_APP_ADMIN_USERNAME,
        password: process.env.REACT_APP_ADMIN_PASSWORD,
        tournament_id: parseInt(
          process.env.REACT_APP_COORDINATOR_TOURNAMENT_ID
        ),
        user_role: process.env.REACT_APP_ADMIN_ROLE,
      });
    });
  }, []);

  return null;
};

export default AdminSocket;
