import { useState } from "react";
import More from "./service/More";
import { UserProps } from "./interface/userinterface";

function User({user,setUser}: UserProps) {
  const [moreData, setMoreData] = useState(false);

  return (
    <div className="user">
      <button onClick={() => setUser(undefined)}>Reset</button>
      <button onClick={() => setMoreData(true)}>More</button>
      <img src={user.avatar_url} alt={user.name} className="avatar" />
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      {moreData && <More repo_url={user.repos_url} />}
    </div>
  );
}

export default User;