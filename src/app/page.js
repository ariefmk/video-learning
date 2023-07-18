import Link from 'next/link'
import Image from 'next/image'

import karamunting from './media/sanggar_seni_karamunting.png'
import stkip from './media/stkip_banjarmasin.png'
import seni from './media/seni_tari.png'

import BackgroundVideo from './components/backgroundVideo.js';

export default function Home() {
  return (
		<main className='h-60 mt-40'>
			<BackgroundVideo />
			<div>
				<div className='logo-list flex justify-center gap-x-3 mb-10'>
					<Image
						src={stkip}
						alt='STKIP PGRI Banjarmasin'
						height={100}
					/>
					<Image
						src={seni}
						alt='Pendidikan Seni Tari'
						height={100}
					/>
					<Image
						src={karamunting}
						alt='Sanggar Karamunting'
						height={100}
					/>
				</div>
				<div className='judul mx-auto mb-16 flex items-center justify-center font-bold text-4xl'>
					<h1>TARI MANARAI</h1>
				</div>
				<div className='video-start'>
					<div>
						<Link href='intro' className='bg-sky-500 hover:bg-sky-700 rounded-full flex items-center justify-center space-x-3 p-3 mx-auto text-2xl font-semibold  w-40'>
							MULAI
						</Link>
					</div>
				</div>
			</div>
		</main>
  )
}
