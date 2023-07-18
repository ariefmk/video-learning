'use client'
import dataVideo from './../components/videos.json'
import Header from './../components/header.js'
import VideoContainer from './../components/videoContainer.js'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Intro() {
	return (
		<main className='mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-3xl font-semibold'>PEMBUKAAN</h1>
			<VideoContainer src={dataVideo.list[1].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}
