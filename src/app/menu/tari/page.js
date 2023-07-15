'use client'
import dataVideo from './../../components/videos.json'
import Header from './../../components/header.js'
import VideoContainer from './../../components/videoContainer.js'


export default function Intro() {
	return (
		<>
			<Header />
			<main className='my-10 flex items-center justify-center'>
				<VideoContainer src={dataVideo.list[0].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
			</main>
		</>
	)
}
