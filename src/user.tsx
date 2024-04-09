import { useState } from "react";
import More from "./service/More";
import { UserProps } from "./interface/userinterface";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BiHandicap } from "react-icons/bi";

function User({ user, setUser }: UserProps) {
  const [moreData, setMoreData] = useState(false);
  const navigate = useNavigate();

  const handleMore = () => {
    navigate(`/more/${user.login}`);
  };


  return (
    <>
      <Card style={{ width: '18rem' }} className='card-container'>
        <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Img variant="top" src={user.avatar_url} alt={user.name} className="avatar" />
          <Card.Text>
            {user.name}
          </Card.Text>
          <Card.Text>
            {user.bio}
          </Card.Text>
          <Button variant="primary" onClick={() => setUser(undefined)}>Reset</Button>
          {/* <Link to={`/more/${encodeURIComponent(user.repos_url)}`}> */}
            <Button variant="primary" onClick={handleMore}>More</Button>
          {/* </Link> */}
        </Card.Body>
      </Card>
      {moreData && <More/>}
      {console.log(user.repos_url)};
    </>
  );
}

export default User;