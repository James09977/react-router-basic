import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const { name, email, phone, website } = user;
  return (
    <div>
      <h2>Details About user</h2>
      <h4>Name: {name} </h4>
      <p>Email: {email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
