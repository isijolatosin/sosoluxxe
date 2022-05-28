const aboutImg = require('../assets/about.jpeg')

function About() {
	return (
		<div className="tw-w-full bg-blur">
			<div className="tw-relative tw-px-10 tw-pt-10 md:tw-w-[80%] md:tw-mx-auto tw-pb-10">
				<div className="tw-hidden sm:tw-block tw-absolute tw-shadow-lg tw-top-10 tw-left-14 tw-w-64 tw-h-[300px] tw-bg-pink-400 sm:tw-rounded-full [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] sm:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"></div>
				<img
					className="tw-w-64 tw-h-[300px] tw-float-left tw-aspect-[1/1] lg:tw-aspect-[1/2] sm:tw-rounded-full tw-shadow-lg tw-object-cover tw-object-bottom tw-mb-0 tw-mr-6 [clip-path:var(--my-shape)] [shape-outside:var(--my-shape)] sm:[--my-shape:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]"
					src={aboutImg}
					alt="About_Photo"
				/>
				<h1 className="tw-text-2xl tw-font-bold">ABOUT SOSOLUXXE</h1>
				<div className="tw-relative">
					<div className="tw-bg-clip-border tw-p-0.5 tw-mt-[-5px] tw-mb-[20px] tw-w-[40px] tw-ml-[280px] tw tw-bg-pink-400"></div>
					<h3 className="tw-font-semibold tw-text-neutral-400 tw-mb-[15px]">
						OFFERING THE BEST HAIR PRODUCTS
					</h3>
				</div>
				<p className="tw-text-neutral-100 tw-font-light">
					Sosoluxxe are many variations of passages of Lorem Ipsum available,
					but the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
					If you are going to use a passage of Lorem Ipsum, you need to be sure
					there isn't anything embarrassing hidden in the middle of text. All
					the Lorem Ipsum generators on the Internet tend to repeat predefined
					chunks as necessary, making this the first true generator on the
					Internet.
					<br />
					<br />
					Our mode of serve ranges is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book. It has survived
					not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged.
					<br />
					<br />
					<span className="tw-italic tw-text-sm tw-font-semibold tw-text-left">
						{' '}
						...we serve everyone and leave no one behind!
					</span>
					<br />
					<br />
					Beauty don’t cost much Contrary to popular belief, Lorem Ipsum is not
					simply random text. It has roots in a piece of classical Latin
					literature from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in Virginia,
					looked up one of the more obscure Latin words, consectetur, from a
					Lorem Ipsum passage, and going through the cites of the word in
					classical literature, discovered the undoubtable source.
					<br />
					<br />
					But I must explain to you how all this mistaken idea of denouncing
					pleasure and praising pain was born and I will give you a complete
					account of the system, and expound the actual teachings of the great
					explorer of the truth, the master-builder of human happiness.
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
