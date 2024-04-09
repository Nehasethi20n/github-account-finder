import { useEffect, useState } from 'react';
import { RepositoriesDataType } from '../types';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function More() {
	const [repos, setRepos] = useState<RepositoriesDataType[]>([]);
	const { repo_url } = useParams<{ repo_url: string }>();
	useEffect(() => {
		const fetchRepo = async () => {
			if (!repo_url) return;
			const res = await fetch(repo_url);
			const data = await res.json();
			setRepos(data);
		};
		fetchRepo();
	}, [repo_url]);

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

			<h3>Repositories:</h3>
			<ul>
				{repos.map((repo: RepositoriesDataType) => (
					<li key={repo.id}>
						<a href={repo.html_url}>{repo.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
