import dataVideo from './../../components/videos.json'
import VideoContainer from './../../components/videoContainer.js'

export default function Sinopsis() {
	return (
		<main className='mt-5 md:mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>SINOPSIS</h1>
			<VideoContainer src={dataVideo.list[3].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}
