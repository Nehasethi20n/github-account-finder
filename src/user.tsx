import { useState } from "react";
import More from "./service/More";
import { UserProps } from "./interface/userinterface";
import { useNavigate } from "react-router-dom";

function User({ users, setUsers }: UserProps) {
  const [moreData] = useState(false);
  const navigate = useNavigate();

  const handleMore = (str: string) => {
    navigate(`/more/${str}`);
  };

  console.log(users)

  return (
    <>
      {users?.map((user) => (
        <div className="user-profile">
          <img className="avatar"src={user.avatar_url} alt={user.name} />
          <h2>{user.login}</h2>
          <h2>{user.bio}</h2>
          <button className="btn"onClick={() => setUsers(undefined)}>Reset</button>
          <button className="btn"onClick={() => handleMore(user.login)}>More</button>

        </div>
      ))}
      {moreData && <More />}
    </>
  );
}

export default User;