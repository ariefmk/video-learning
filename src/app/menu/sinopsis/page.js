'use client'
import dataVideo from './../../components/videos.json'
import Header from './../../components/header.js'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Intro() {
	const videoRef = useRef(null)
	const router = useRouter()
	const [isVideoEnded, setIsVideoEnded] = useState(false)

	useEffect(() => {
		const videoElement = videoRef.current;

		//Mengatur agar video dimulai otomatis
		const playVideo = () => {
			videoElement.play()
		}
		
		playVideo()

		const handleEnded = () => {
			//Mengatur video fade menjadi true
			setIsVideoEnded(true)
			//Menunda pengalihan selama 2 detik
			setTimeout(() => {
				//router.push berfungsi untuk memindahkan ke halaman berikutnya yaitu menu
				router.push('/menu');
			}, 2000)
		}

		//Menambahkan event setelah video berakhir
		videoElement.addEventListener('ended', handleEnded);

		return () => {
			videoElement.removeEventListener('ended', handleEnded);
		}
	}, [router])
	return (
		<>
			<Header />
			<main className='my-10 flex items-center justify-center'>
				<div className='video-container'>
					<video ref={videoRef} className={isVideoEnded ? 'sinopsis-video rounded-xl fade-out' : 'sinopsis-video rounded-xl'} width={900} height={600} controls>
						<source src={dataVideo.list[0].tautan} type='video/mp4' />
						Browser tidak mendukung
					</video>
				</div>
			</main>
		</>
	)
}
