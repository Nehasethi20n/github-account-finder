import { useEffect, useState } from 'react';
import { RepositoriesDataType, UserDataType } from '../types';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function More() {
	const [repos, setRepos] = useState<RepositoriesDataType[]>([]);
	const[user,setUser]=useState<UserDataType>({} as UserDataType);
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	// const{user_url}=useParams<{user_url:string}>();

	const {id} = useParams<{ id: string }>();
	useEffect(() => {

        const fetchUser = async () => {
			setLoading(true);
			try {
			  const userResponse = await fetch(`https://api.github.com/users/${id}`);
			  if (userResponse.ok) {
				const userData = await userResponse.json();
				setUser(userData);
				setLoading(false);
			  } else {
				throw new Error('Failed to fetch user data');
			  }
			} catch (error) {
			  console.error('Error fetching user data:', error);
			}
		  };

		  const fetchRepos = async () => {
			try {
			  const response = await fetch(`https://api.github.com/users/${id}/repos`);
			  if (response.ok) {
				const data = await response.json();
				setRepos(data);
			  } else {
				throw new Error('Failed to fetch repositories');
			  }
			} catch (error) {
			  console.error('Error fetching repositories:', error);
			} finally {
			  setLoading(false);
			}
		  };

		
        fetchUser();
		fetchRepos();
	}, [id]);

	const handleBack = () => {
		navigate('/');
	  };

	return (
		<div>
			<Link to="/">
				<Navbar bg='dark' data-bs-theme="dark">
					<Container>
						<Navbar.Brand href="#home">
							<FaGithub />
							{' '}
							GitHub Account Finder
						</Navbar.Brand>
					</Container>
				</Navbar>
			</Link>

     <button onClick={handleBack}>Back</button>
			<h3>User Information:</h3>
	 
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
			<div>
			<b><a className="view-profile" href={user.html_url}>View User Profile</a></b>
          <img style={{height:150}}src={user.avatar_url} alt={user.login} />
		  <p><strong>Username:</strong> {user.login}</p>
		  
		  </div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Id:</strong> {user.id}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Public Repositories:</strong> {user.public_repos}</p>
		 
        </div>
      )}

			<ul>
				<h3>Repositories</h3>
				{repos.map((repo: RepositoriesDataType) => (
					<li key={repo.id}>
						<a href={repo.html_url}>{repo.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}