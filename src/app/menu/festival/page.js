export default function Kostum () {
	return (
		<main className='mt-5 md:mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>PENAMPILAN FESTIVAL</h1>
			<div className='video-container flex justify-center'>
				<iframe id='penampilan' className='rounded-xl' src="https://www.youtube.com/embed/GqpFa3GQtLA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			</div>
		</main>
	)
}
