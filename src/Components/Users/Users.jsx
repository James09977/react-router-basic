import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./user.css";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);

  return (
    <div>
      <h2>Our Users: {users.length} </h2>
      <p>Fantastick and good users</p>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
