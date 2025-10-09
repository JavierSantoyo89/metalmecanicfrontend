//   import { useEffect } from 'react';
import { useEffect } from 'react'
import { Flip, ToastContainer, toast } from 'react-toastify'

interface ToastifyProps {
	Message: string
}
export const ToastMessage: React.FC<ToastifyProps> = ({ Message }) => {
	const notify = () => toast(Message)
	useEffect(() => {
		notify()
	})
	return (
		<>
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
				transition={Flip}
			/>
		</>
	)
}
