'use client'
import dataVideo from './../../components/videos.json'
import Header from './../../components/header.js'
import VideoContainer from './../../components/videoContainer.js'

import { useEffect, useRef } from 'react'

export default function Intro() {
	return (
		<>
			<Header />
			<main className='my-10 flex items-center justify-center'>
				<VideoContainer src={'/background'} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
			</main>
		</>
	)
}
