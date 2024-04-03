import React, { useState } from 'react';
import RepositoriesModal from './repositoryModel';
import { UserDataType } from '../types';

type Props = {
	user: UserDataType;
	html_url: string;
};

function Repositories({ user }: Props) {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className='repositories'>
			<h3>Repositories</h3>
			<button onClick={handleOpenModal}>View Repositories</button>
			{showModal && (
				<RepositoriesModal user={user} onClose={handleCloseModal} html_url={''} />
			)}
		</div>
	);
}

export default Repositories;