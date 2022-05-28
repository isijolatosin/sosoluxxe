import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'

function Construction() {
	return (
		<div className="tw-h-[100vh] tw-w-[100%] bg-blur3 tw-items-center tw-justify-center tw-flex tw-flex-col">
			<div className="tw-flex tw-flex-row tw-items-center tw-my-[50px]">
				<span className="tw-text-xl tw-mb-10 tw-text-center tw-text tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-yellow-900 tw-via-yellow-600 tw-to-yellow-700">
					SOSOLUXXE
				</span>
				{/* <img src={logo} alt="company logo" /> */}
			</div>
			<div className="tw-relative tw-text-neutral-600 tw-text-[40px] md:tw-text-[40px] tw-flex tw-flex-col tw-items-center">
				<span className="-tw-mb-0">UNDER</span>
				<span>CONSTRUCTION</span>
			</div>
			<span className="tw-font-light tw-ml-5 tw-text-center tw-text-white tw-tracking-[12px] md:tw-tracking-[20px] tw-text-[10px]">
				SITE ALMOST READY
			</span>
			<div className="spin-container">
				<div className="gearbox">
					<div className="gear one">
						<div className="gear-inner">
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="inner-circle"></div>
						</div>
					</div>
					<div className="gear two">
						<div className="gear-inner">
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="inner-circle"></div>
						</div>
					</div>
					<div className="gear three">
						<div className="gear-inner">
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="inner-circle"></div>
						</div>
					</div>
					<div className="gear four large">
						<div className="gear-inner">
							<div className="large-bar"></div>
							<div className="large-bar"></div>
							<div className="large-bar"></div>
							<div className="large-bar"></div>
							<div className="large-bar"></div>
							<div className="large-bar"></div>
							<div className="inner-circle"></div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="load-wrapper tw-mt-10">
								<div className="circle"></div>
								<div className="circle"></div>
								<div className="circle"></div>
							</div> */}
			<div className="social-media-list tw-mt-[50px]">
				<a
					href="https://www.instagram.com/Sosoluxxe/"
					target="_blank"
					rel="noopener noreferrer">
					<AiOutlineInstagram size={20} />
				</a>
				<a
					href="https://www.tiktok.com/search?q=Sosoluxxe&t=1652981534762"
					target="_blank"
					rel="noopener noreferrer">
					<FaTiktok size={20} />
				</a>
			</div>
			<div className="tw-flex tw-text-xs tw-text-neutral-500 tw-font-light tw-mt-[50px] tw-mb-[30px]">
				<div className="tw-pr-1 tw-border-r-2 tw-border-r-neutral-800 md:tw-flex">
					<p className="">
						&copy; {new Date().getUTCFullYear()} <span>Sosoluxxe</span>
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
	)
}

export default Construction
