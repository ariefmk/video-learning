import Link from 'next/link'

export default function Home() {
  return (
		<main className='mt-20 md:mt-30 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>MENU</h1>
			<div className='menu-list flex items-center justify-center text-center font-semibold text-xl'>
				<ul className='flex flex-col gap-y-4 '>
					<li className='w-60 bg-pink h-20 flex items-center rounded-2xl'><Link className='p-4 h-full w-full flex items-center justify-center' href='menu/sinopsis'>SINOPSIS</Link></li>
					<li className='w-60 bg-pink h-20 flex items-center rounded-2xl'><Link className='p-4 h-full w-full flex items-center justify-center' href='menu/kostum'>KOSTUM DAN PROPERTI</Link></li>
					<li className='w-60 bg-pink h-20 flex items-center rounded-2xl'><Link className='p-4 h-full w-full flex items-center justify-center' href='menu/tutorial'>TUTORIAL</Link></li>
					<li className='w-60 bg-pink h-20 flex items-center rounded-2xl'><Link className='p-4 h-full w-full flex items-center justify-center' href='menu/tari'>PERSEMBAHAN TARI MANARAI</Link></li>
				</ul>
			</div>
		</main>
  )
}
