import React from 'react'
import axios from 'axios'
import Products from '../components/Products'
import Construction from '../components/Construction'

// const logo = require('../assets/logo.png')

function Home() {
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
		<div className="tw-relative">
			{!isReady && (
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
			)}
			{isReady && <Construction />}
		</div>
	)
}

export default Home
