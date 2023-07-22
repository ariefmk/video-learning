import dataVideo from '../../../components/videos.json'
import VideoContainer from '../../../components/videoContainer'

export default function Ragam({ params }) {
	const { id } = params
	const ragamId = id - 1;
	return (
		<main className='mt-20 flex items-center justify-center flex-col gap-y-4'>
			<h1 className='text-2xl font-semibold'>RAGAM {id}</h1>
			<VideoContainer src={dataVideo.list[5].ragam[ragamId].tautan} addControls={true} addClass={'rounded-xl'} autoPlay={true} />
		</main>
	)
}

export async function generateStaticParams() {
	const ragamData = dataVideo.list[5].ragam

	return ragamData.map((data) => ({
		id: data.id
	}))
}

export const dynamicParams = false
