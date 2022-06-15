const aboutImg = require('../assets/about.jpeg')

function About() {
	return (
		<div className="tw-w-full bg-blur">
			<div className="tw-relative tw-px-10 tw-pt-10 md:tw-w-[80%] md:tw-mx-auto tw-pb-10">
				<div className="tw-hidden sm:tw-block tw-absolute tw-shadow-lg tw-top-10 tw-left-14 tw-w-[500px] tw-h-[600px] xl:tw-h-[550px] tw-bg-yellow-500 sm:tw-rounded-full [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] sm:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"></div>
				<img
					className="tw-w-[500px] tw-h-[600px] xl:tw-h-[550px] tw-float-left tw-aspect-[1/1] lg:tw-aspect-[1/2] sm:tw-rounded-full tw-shadow-lg tw-object-cover tw-object-center tw-mb-0 tw-mr-6 [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] sm:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
					src={aboutImg}
					alt="About_Photo"
				/>
				<h1 className="tw-text-2xl tw-font-bold">ABOUT SOSOLUXXE</h1>
				<div className="tw-relative">
					<h3 className="tw-font-semibold tw-text-neutral-400 tw-mb-[15px]">
						OFFERING THE BEST HAIR PRODUCTS
					</h3>
				</div>
				<p className="tw-text-neutral-100 tw-font-light">
					Welcome and thank you for visiting Sosoluxxe, we hope you have a nice
					time browsing through our collection and get some thing for yourself
					or loved one. Sosoluxxe was born out of my love for looking good and I
					know to begin that journey you have to be conscious of your crown
					first which is Hair. A woman’s hair is her crown and once you have
					that covered, everything else flows. In these day and age wearing
					luxury hair is almost one that breaks the bank and I want to make sure
					everyone can afford to look good without necessarily going broke. At
					Sosoluxxe we are devoted to providing the best luxury human, 100%
					unprocessed, raw/single donor Hair/Wigs to women of all backgrounds at
					affordable prices
					<br />
					<br />
					We understand the importance of a woman’s hair to her appearance and
					we take pride in making sure we provide quality products that will
					help achieve whatever vision you have for your various hair styles.
					<br />
					<br />
					<span className="tw-italic tw-text-sm tw-font-semibold tw-text-left">
						{' '}
						...we serve everyone and leave no one behind!
					</span>
					<br />
					<br />
					Sosoluxxe hair is easy to wear and maintain. You can color, curl,
					straighten as desired and with the right maintenance our hair is
					guaranteed long lasting and reusable.
					<br />
					<br />
					Though situated in Canada, our clientele stretches across borders and
					we deliver worldwide, packaging your hair with love and care to make
					sure it arrives to you on time.
					<br />
					<br />
					Please feel free to follow us on all our social media handles below
					and email us if you have any inquires or concern.
					<br />
					<br />
					We can’t wait to serve you and see you rock your beautiful crowns❤️
					<br />
					<br />
					<span className="tw-italic tw-text-sm tw-font-semibold tw-text-left">
						For inquiry, please contact us via:
					</span>
					<span className="tw-italic tw-text-xs"> sosoluxxe@gmail.com</span>
				</p>
			</div>
		</div>
	)
}

export default About
