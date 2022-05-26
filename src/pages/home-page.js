import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import Layout from '../components/shared/Layout'
import Products from '../components/Products'
import { FaTiktok } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineConstruction } from 'react-icons/md'

const logo = require('../assets/logo.png')

function HomePage() {
	const [allProducts, setAllproducts] = React.useState([])
	const isReady = true

	async function fetchProducts() {
		try {
			const {
				data: {
					products,
					//  curUser
				},
			} = await axios.get('/api/v1/products')

			setTimeout(() => {
				setAllproducts(products.sort((a, b) => a.name.localeCompare(b.name)))
			}, 3000)
		} catch (error) {
			console.log(error)
		}
	}

	React.useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<div className="tw-bg-neutral-200 relative">
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Layout>
				<div className="tw-relative">
					<div
						className={`tw-flex tw-flex-col tw-items-center ${
							allProducts.length === 0 ? 'tw-mt-[70px]' : 'tw-pt-[100px]'
						} md:tw-py-[70px] lg:tw-w-[100%] xl:tw-w-[90%] 2xl:tw-w-[80%] lg:tw-mx-auto`}>
						{allProducts.length !== 0 ? (
							<Products allProducts={allProducts} />
						) : (
							<div className="tw-rounded-full progress">
								<div className="inner"></div>
							</div>
						)}
					</div>
					{isReady && (
						<div className="tw-z-40 tw-h-[100vh] tw-mt-[-70px] tw-w-[100%] bg-blur3 tw-absolute tw-top-0 tw-bottom-0 z-10 tw-items-center tw-justify-center tw-flex tw-flex-col">
							<div className="tw-w-[300px] tw-ml-5">
								<img src={logo} alt="company logo" />
							</div>
							<div className="tw-relative tw-text-neutral-600 tw-text-[40px] md:tw-text-[50px] tw-flex tw-flex-col tw-items-center">
								<span className="-tw-mb-8">UNDER</span>
								<span>CONSTRUCTION</span>
								<MdOutlineConstruction className="tw-mb-5" />
							</div>
							<span className="tw-font-light tw-ml-5 tw-text-center tw-text-white tw-tracking-[12px] md:tw-tracking-[20px] tw-text-[10px]">
								SITE ALMOST READY
							</span>
							<div className="load-wrapper tw-mt-10">
								<div className="circle"></div>
								<div className="circle"></div>
								<div className="circle"></div>
							</div>
							<div className="social-media-list tw-mt-[150px]">
								<a
									href="https://www.instagram.com/hairposey/"
									target="_blank"
									rel="noopener noreferrer">
									<AiOutlineInstagram size={20} />
								</a>
								<a
									href="https://www.tiktok.com/search?q=hairposey&t=1652981534762"
									target="_blank"
									rel="noopener noreferrer">
									<FaTiktok size={20} />
								</a>
							</div>
							<div className="tw-flex tw-text-xs tw-text-neutral-500 tw-font-light tw-mt-[50px] tw-mb-[30px]">
								<div className="tw-pr-1 tw-border-r-2 tw-border-r-neutral-800 md:tw-flex">
									<p className="">
										&copy; {new Date().getUTCFullYear()} <span>hairposey</span>
										<span> • All right reserved</span>
									</p>
								</div>
								<div className="md:tw-flex tw-ml-1">
									<p className="">
										develop by{' '}
										<span className="tw-text-yellow-600">
											<a
												href="https://www.linkedin.com/in/oluwatosin-isijola-33333ba8/"
												target="_blank"
												rel="noopener noreferrer">
												- Tony Isijola
											</a>
										</span>
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</Layout>
		</div>
	)
}

export default HomePage
