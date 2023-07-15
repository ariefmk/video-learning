import BackgroundVideo from './components/backgroundVideo.js';
import Header from './components/header.js'

import Link from 'next/link'

export default function Home() {
  return (
		<>
			<Header />
			<main className='h-60 my-60'>
				<BackgroundVideo />
				<div>
					<div className='judul mx-auto mb-16 flex items-center justify-center font-bold text-4xl'>
						<h1>TARI MANARAI</h1>
					</div>
					<div className='video-start'>
						<div>
							<Link href='intro' className='bg-sky-500 hover:bg-sky-700 rounded-full flex items-center justify-center space-x-3 p-5 mx-auto text-2xl font-semibold  w-40'>
								MULAI
							</Link>
						</div>
					</div>
				</div>
			</main>
			<footer className='flex items-center justify-center py-5'>
				<p>Amilia Raisitami</p>
			</footer>
		</>
  )
}
