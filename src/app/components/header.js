import Link from 'next/link'

export default function Header() {
	return (
		<header className='mt-5 mx-5 flex gap-3 justify-between'>
			<div className='info bg-white text-black md:p-6 p-2 rounded-br-xl'>
				<div className='info-title text-base text-sm md:text-base'>
					<h1>Pengembangan Media Pembelajaran</h1>
				</div>
				<div className='info-person font-bold text-xl md:text-2xl'>
					<p>Amilia Raisitami</p>
					<p>306193002</p>
				</div>
			</div>
			<div className='nav'>
				<ul className='flex md:flex-row flex-col font-semibold text-xl gap-x-5'>
					<li><Link href='/'>Beranda</Link></li>
					<li><Link href='/menu'>Menu</Link></li>
					<li><Link href='/tentang'>Tentang</Link></li>
				</ul>
			</div>
		</header>
	)
}
