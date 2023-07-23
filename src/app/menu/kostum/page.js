import dataVideo from './../../components/videos.json'
import VideoContainer from './../../components/videoContainer.js'

export default function Kostum () {
	return (
		<main className='mt-5 md:mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>KOSTUM DAN PROPERTI</h1>
			<VideoContainer src={dataVideo.list[4].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}
