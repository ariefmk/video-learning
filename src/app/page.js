import BackgroundVideo from './components/backgroundVideo.js';

export default function Home() {
  return (
		<>
			<header className='mt-5 mx-5 flex justify-between'>
				<div className='info bg-white text-black p-6 rounded-br-xl'>
					<div className='info-title text-base'>
						<h1>Pengembangan Media Pembelajaran</h1>
					</div>
					<div className='info-person font-bold text-2xl'>
						<p>Amilia Raisitami</p>
						<p>306193002</p>
					</div>
				</div>
				<div className='nav'>
					<ul className='flex font-semibold text-xl gap-x-5'>
						<li><a href='/'>Beranda</a></li>
						<li><a href='#'>Tentang</a></li>
					</ul>
				</div>
			</header>
			<main className='h-60 my-60'>
				<BackgroundVideo />
				<div>
					<div className='judul mx-auto mb-16 flex items-center justify-center font-bold text-4xl'>
						<h1>TARI MANARAI</h1>
					</div>
					<div className='video-start'>
						<div>
							<a href='#' className='bg-sky-500 hover:bg-sky-700 rounded-full flex items-center justify-center space-x-3 p-5 mx-auto text-2xl font-semibold  w-40'>
								MULAI
							</a>
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
