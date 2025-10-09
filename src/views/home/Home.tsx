import { DeleteButton } from '../../components/botton/deleteButton/DeleteButton'
import DownloadButton from '../../components/botton/downloadButton/DownloadButton'
import EditButton from '../../components/botton/editButton/EditButton'
import { Loading } from '../../components/loading/Loading'
import { ToastMessage } from '../../components/ToastMessage/ToastMessage'

export const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<Loading />
			<ToastMessage Message='Hola, el sitio esta en mantenimiento!' />
			<DeleteButton />
			<DownloadButton />
			{EditButton(55, 55)}
		</div>
	)
}
