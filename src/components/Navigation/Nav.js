import React from 'react'
import { Link } from 'react-router-dom'
import ImageComponent from './ImageComponent'
import LinksComponent from './LinksComponent'
import NavIcons from './NavIcons'

const links = [
	{
		id: '1',
		name: 'Brazillian',
		route: '/all-brazilian',
	},
	{
		id: '2',
		name: 'Vietnamese',
		route: '/all-vietnamese',
	},
	{
		id: '3',
		name: 'Indian',
		route: '/all-indian',
	},
]

function Nav() {
	const [menu, setMenu] = React.useState(false)
	const [active, setActive] = React.useState('')
	return (
		<div>
			<div className="tw-flex bg-blur4 tw-w-[100%] tw-grow tw-flex-row tw-items-center tw-justify-between tw-my-0 tw-mx-auto tw-h-[70px] tw-border-b-[1px] tw-border-neutral-700">
				<div className="tw-flex tw-grow tw-items-center tw-h-full">
					<ImageComponent />
					<div className="tw-hidden md:tw-flex md:tw-flex-row md:tw-justify-between md:tw-w-[25%] navStyle">
						{links.map((nav) => (
							<Link
								onClick={() => setActive(nav.name)}
								className={`tw-mx-3 ${
									active === nav.name
										? 'tw-text-yellow-500 tw-font-bold'
										: 'tw-text-gray-50'
								} hover:tw-text-gray-400 tw-uppercase tw-ease tw-duration-300 tw-text-[11px] tw-font-light navStyleChild`}
								key={nav.id}
								to={nav.route}>
								{nav.name}
							</Link>
						))}
					</div>
				</div>
				<div className="">
					<NavIcons setMenu={setMenu} menu={menu} />
				</div>
			</div>
			<LinksComponent menu={menu} setActive={setActive} active={active} />
		</div>
	)
}

export default Nav
