import dataVideo from './../../components/videos.json'
import VideoContainer from './../../components/videoContainer.js'

export default function Sinopsis() {
	return (
		<main className='mt-20 md:mt-30 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>SINOPSIS</h1>
			<VideoContainer src={dataVideo.list[0].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}
