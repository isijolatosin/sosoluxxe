import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiDatabase2Fill } from 'react-icons/ri'
import { SUPER_USER1, SUPER_USER2 } from '../../constant'
import { UserContext } from '../../context/user-context'
import CursorText from '../shared/CursorText'

function ImageComponent() {
	const { user } = useContext(UserContext)
	const [showText, setShowText] = React.useState(false)
	// const logo = require('../../assets/logo.png')

	const handleShow = () => {
		!showText && setShowText(true)
	}
	const handleHide = () => {
		setShowText(false)
	}
	return (
		<div className="tw-relative tw-flex tw-flex-row tw-items-center">
			<Link to="/">
				<div className="tw-text-lg tw-font-extrabold tw-w-[100px]">
					<span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-yellow-900 tw-via-yellow-600 tw-to-yellow-700 tw-ml-2">
						Sosoluxxe
					</span>
					{/* <img
						src={logo}
						loading="lazy"
						className="tw-w-full"
						alt="company-logo"
					/> */}
				</div>
			</Link>
			{(SUPER_USER1 === user?.email || SUPER_USER2 === user?.email) && (
				<Link
					to="/admin-portal"
					className="tw-ml-2"
					onMouseOver={handleShow}
					onMouseOut={handleHide}>
					<div className="tw-w-30 tw-h-30 tw-p-2 tw-text-black tw-text-xl hover:tw-cursor-pointer tw-bg-neutral-600 tw-rounded-full tw-ease-in tw-duration-300">
						<RiDatabase2Fill />
					</div>
					<CursorText showText={showText}>Admin</CursorText>
				</Link>
			)}
		</div>
	)
}

export default ImageComponent
