import { useState } from 'react';
import RepositoriesModal from './repositoryModel';
import { UserDataType } from '../types';
// import { Link } from 'react-router-dom';
// import {useParams} from  "react-router-dom";

type Props = {
	user: UserDataType;
	html_url: string;
};

function Repositories({ user }: Props) {
	const [showrepo, setShowRepo] = useState(false);
	// const { userId } = useParams();

	const handleOpenModal = () => {
		setShowRepo(true);
	};

	const handleCloseModal = () => {
		setShowRepo(false);
	};

	return (
		<div className='repositories'>
			<h3>Repositories</h3>
			{/* <Link to='/repositories'>View repositories</Link> */}
			<button onClick={handleOpenModal}>View Repositories</button>
			{showrepo && (
				<RepositoriesModal user={user} onClose={handleCloseModal} html_url={''} />
			)}
		</div>
	);
}

export default Repositories;