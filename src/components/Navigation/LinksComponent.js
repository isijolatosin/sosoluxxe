import React from 'react'
import { Link } from 'react-router-dom'

const links = [
	{
		id: '1',
		name: 'Brazillian',
		route: '/hair-bundles',
	},
	{
		id: '2',
		name: 'Vietnamese',
		route: '/closure-frontal',
	},
	{
		id: '3',
		name: 'Indian',
		route: '/jet-black-&-blonde-hair',
	},
]

function LinksComponent({ menu, setActive, active }) {
	React.useEffect(() => {
		const pathArr = window?.location?.pathname.split('/').filter((x) => x)
		// eslint-disable-next-line array-callback-return
		links.map((itm) => {
			if (pathArr?.[0] === itm.navName) {
				setActive(pathArr?.[0]) || setActive(itm.navName)
			}
			if (window.location?.pathname === '/') {
				setActive('home')
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active])

	return (
		<div
			className={`${
				menu ? 'plumpMenuClick' : 'plumpMenu'
			} plumpMenu md:tw-hidden tw-z-40`}>
			{links.map((nav) => (
				<Link
					onClick={() => setActive(nav.name)}
					className={`tw-text-[13px] tw-w-full tw-rounded-lg tw-shadow-lg tw-flex tw-flex-row tw-items-center tw-justify-end tw-h-[60px] tw-mb-1 bg-blur2 tw-p-1 ${
						active === nav.name
							? 'tw-text-yellow-700 tw-font-bold'
							: 'tw-text-neutral-900'
					} hover:tw-text-gray-400 tw-px-3 tw-uppercase tw-ease tw-duration-300`}
					key={nav.id}
					to={nav.route}>
					{nav.name}
				</Link>
			))}
		</div>
	)
}

export default LinksComponent
