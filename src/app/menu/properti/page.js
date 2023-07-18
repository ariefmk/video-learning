import dataVideo from './../../components/videos.json'
import VideoContainer from './../../components/videoContainer.js'

export default function Properti () {
	return (
		<main className='mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>PENJELASAN PROPERTI</h1>
			<VideoContainer src={dataVideo.list[1].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}
