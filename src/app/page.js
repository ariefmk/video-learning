import Link from 'next/link'
import Image from 'next/image'

import karamunting from './media/sanggar_seni_karamunting.png'
import stkip from './media/stkip_banjarmasin.png'
import seni from './media/seni_tari.png'

import BackgroundVideo from './components/backgroundVideo.js';

export default function Home() {
  return (
		<main className='h-60 mt-10 md:mt-40'>
			<BackgroundVideo />
			<div>
				<div className='logo-list flex justify-center gap-x-3 mb-5 md:mb-10'>
					<Image
						src={stkip}
						alt='STKIP PGRI Banjarmasin'
						className='w-20 md:w-40'
					/>
					<Image
						src={seni}
						alt='Pendidikan Seni Tari'
						className='w-20 md:w-40'
					/>
					<Image
						src={karamunting}
						alt='Sanggar Karamunting'
						className='w-20 md:w-40'
					/>
				</div>
				<div className='judul mx-auto mb-10 md:mb-16 flex items-center justify-center font-bold text-3xl md:text-4xl'>
					<h1>TARI MANARAI</h1>
				</div>
				<div className='video-start'>
					<div>
						<Link href='/pembukaan' className='bg-pink rounded-full flex items-center justify-center space-x-3 p-3 mx-auto text-2xl font-semibold  w-40'>
							MULAI
						</Link>
					</div>
				</div>
			</div>
		</main>
  )
}
