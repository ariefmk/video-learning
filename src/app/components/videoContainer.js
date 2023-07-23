'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VideoContainer({ id, src, addClass, addControls, autoPlay }) {
	const videoRef = useRef(null);
	const router = useRouter();
	const [isVideoEnded, setIsVideoEnded] = useState(false);
	const [isPlaying, setIsPlaying] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const videoElement = videoRef.current;

		//Mengatur agar video dimulai otomatis
		const playVideo = () => {
			videoElement.play()
		}
		
		videoElement.autoplay = autoPlay

		const handleTimeUpdate = () => {
			const { currentTime, duration } = videoElement;
			const progressPercent = (currentTime / duration ) * 100;
			setProgress(progressPercent)
		}

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
		//Menambahkan event pada waktu video
		videoElement.addEventListener('timeupdate', handleTimeUpdate);

		return () => {
			videoElement.removeEventListener('ended', handleEnded);
			videoElement.removeEventListener('timeupdate', handleTimeUpdate);
		}
	}, [router])

	const handlePlayPause = () => {
		const videoElement = videoRef.current;

		if (isPlaying) {
			videoElement.pause();
		} else {
			videoElement.play();
		}
		
		setIsPlaying(!isPlaying);
	}

	const handleSeek = (e) => {
		const videoElement = videoRef.current;
		const { duration } = videoElement;
		const seekTime = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * duration;
		videoElement.currentTime = seekTime
	}

	return (
		<div>
			<div className='video-container flex justify-center'>
				<video id={id} ref={videoRef} className={`${addClass} ${isVideoEnded ? 'fade-out' : ''} w-72 md:w-8/12`} controls={addControls}>
					<source src={src} type='video/mp4' />
					Browser tidak mendukung
				</video>
			</div>
		</div>
	)
}
