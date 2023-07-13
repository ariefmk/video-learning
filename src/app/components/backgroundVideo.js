export default function BackgroundVideo() {
	return (
		<div className='video-container'>
			<video autoPlay loop muted playsInline>
				<source src='./background.mp4' type='video/mp4' />
			</video>
		</div>
	)
}
