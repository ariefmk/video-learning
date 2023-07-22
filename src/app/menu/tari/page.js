import dataVideo from './../../components/videos.json'
import VideoContainer from './../../components/videoContainer.js'

export default function Tari() {
	return (
		<main className='mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>PERSEMBAHAN TARI MANARAI</h1>
			<VideoContainer src={dataVideo.list[0].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}
