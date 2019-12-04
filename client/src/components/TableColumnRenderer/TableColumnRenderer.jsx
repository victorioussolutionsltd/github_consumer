import React from 'react'
import Link from '@material-ui/core/Link';
import RepositoryDetails from '../RepositoryDetails'
export default function TableColumnRenderer({ jsonInformation}) {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [information] = React.useState(JSON.parse(jsonInformation));

    const handleLink = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div>
        <Link href="#" onClick={handleLink}>
        { information.name}
        </Link>
        <RepositoryDetails 
        visible={modalOpen} 
        githubRepositoryInformation={information} 
        onModalClosed={closeModal}
        />
        </div>
    )
}
