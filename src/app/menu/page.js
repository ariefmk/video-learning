import Header from './../components/header.js'

import Link from 'next/link'

export default function Home() {
  return (
		<>
			<Header />
			<main className='my-20'>
				<div className='menu-list flex items-center justify-center text-center font-semibold'>
					<ul className='flex flex-col gap-y-4 '>
						<li className='w-56 bg-sky-400 h-16 flex items-center rounded-2xl'><Link className='h-full w-full flex items-center justify-center' href='menu/sinopsis'>SINOPSIS</Link></li>
						<li className='w-56 bg-sky-400 h-16 flex items-center rounded-2xl'><Link className='h-full w-full flex items-center justify-center' href='menu/kostum'>KOSTUM DAN PROPERTI</Link></li>
						<li className='w-56 bg-sky-400 h-16 flex items-center rounded-2xl'><Link className='h-full w-full flex items-center justify-center' href='menu/tutorial'>TUTORIAL</Link></li>
						<li className='w-56 bg-sky-400 h-16 flex items-center rounded-2xl'><Link className='h-full w-full flex items-center justify-center' href='menu/tari'>PERSEMBAHAN TARI MANARAI</Link></li>
					</ul>
				</div>
			</main>
		</>
  )
}
