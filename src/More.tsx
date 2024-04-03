import { useEffect, useState } from 'react';
import { RepositoriesDataType } from './types';

interface MoreProps {
	repo_url: string;
}
export default function More({ repo_url }: MoreProps) {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchRepo = async () => {
			const res = await fetch(repo_url);
			const data = await res.json();
			setRepos(data);
		};
		fetchRepo();
	}, []);
	return (
		<div>
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