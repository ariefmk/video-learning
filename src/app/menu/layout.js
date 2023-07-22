import ImageBackground from '../components/imageBackground'

export default function MenuLayout({ children }) {
	return (
		<>
			<ImageBackground />
			{children}
		</>
	)
}
