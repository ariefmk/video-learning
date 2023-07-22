import dataVideo from './videos.json'

export default function BackgroundVideo() {
	return (
		<div className='video-background'>
			<video autoPlay loop muted playsInline>
				<source src={dataVideo.list[0].tautan} type='video/mp4' />
			</video>
		</div>
	)
}
