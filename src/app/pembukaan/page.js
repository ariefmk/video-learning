import dataVideo from '../components/videos.json'
import VideoContainer from '../components/videoContainer'
import ImageBackground from '../components/imageBackground'

export default function Pembukaan() {
	return (
		<>
			<ImageBackground />
			<main className='mt-20 flex items-center justify-center flex-col gap-y-4'>
				<h1 className='text-2xl font-semibold'>PEMBUKAAN</h1>
				<VideoContainer src={dataVideo.list[0].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
			</main>
		</>
	)
}
