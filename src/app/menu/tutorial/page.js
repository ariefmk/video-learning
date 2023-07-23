'use client'

import { useState, useEffect } from 'react'

import dataVideo from './../../components/videos.json'
import VideoContainer from '../../components/videoContainer'
import videoStamp from '../../components/videoTutorial'

export default function Tutorial() {
	const [waktu, setWaktu] = useState(0)

	useEffect(() => {
		const updateTime = () => {
			const videoElement = document.getElementById('ragam-video');
			setWaktu(videoElement.currentTime)
		}


		const intervalId = setInterval(updateTime, 10);
		return () => clearInterval(intervalId)
	}, [])

	const handleSegment = (timestamp) => {
		const videoElement = document.getElementById('ragam-video');
			videoElement.currentTime = timestamp
	}

	const handleUpdateColor = (timestamp) => {
		if (waktu >= timestamp) {
			return 'bg-pink'
		} else {
			return 'bg-black text-white'
		}
	}

	return (
		<main className='mt-5 md:mt-20 flex items-center justify-center flex-col'>
			<h1 className='text-2xl font-semibold'>TUTORIAL</h1>
			<VideoContainer id={'ragam-video'} src={dataVideo.list[5].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
			<div className='mt-5 w-72 md:w-5/12'>
				<ul className='flex flex-row gap-x-2 rounded-xl overflow-x-scroll'>
					{videoStamp.map((item, index) => (
						<li key={index} className=''>
							<button onClick={() => {handleSegment(item.timestamp)}} className={`text-lg font-semibold p-2 rounded-xl w-32 ${handleUpdateColor(item.timestamp)}`}>{item.title}</button>
						</li>
					))}
				</ul>
			</div>
		</main>
	)
}
