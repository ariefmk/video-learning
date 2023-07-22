import ImageBackground from '../components/imageBackground'

export default function Tentang () {
	return (
		<>
			<ImageBackground />
			<main className='mt-10 md:mt-30 flex items-center justify-center flex-col'>
				<div className='bg-pink flex flex-col gap-y-5 justify-center align-center items-center'>
					<h1 className='text-2xl font-semibold'>TENTANG</h1>
					<div className='flex flex-col gap-y-3 items-center justify-center'>
						<h2 className='text-center w-96 text-lg font-semibold'>PENGEMBANGAN MEDIA PEMBELAJARAN TARI MANARAI BERBASIS VIDEO DI SANGGAR SENI KARAMUNTING KABUPATEN HULU SUNGAI TENGAH</h2>
						<div className='flex flex-col items-center text-lg'>
							<p>Peneliti</p>
							<p>Amilia Raisitami</p>
							<p>NPM 305193002</p>
						</div>
						<div className='flex flex-col items-center'>
							<p>Dosen Pembimbing 1</p>
							<p>Drs. Suwarjiya, M.Pd</p>
							<p>NIK 080401085</p>
						</div>
						<div className='flex flex-col items-center'>
							<p>Dosen Pembimbing 2</p>
							<p>Andi Wijaya, S.Pd, M.Sn</p>
							<p>NIK 110401088</p>
						</div>
					</div>
					<div className='flex flex-col items-center'>
						<p>SEKOLAH TINGGI KEGURUAN DAN ILMU PENDIDIKAN</p>
						<p>PERSATUAN GURU REPUBLIK INDONESIA BANJARMASIN</p>
						<p>PROGRAM STUDI PENDIDIKAN SENI TARI</p>
						<p>2023</p>
					</div>
				</div>
			</main>
		</>
	)
}
