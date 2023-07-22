import Image from 'next/image'
import backgroundImage from '../media/background.jpg'

const imageStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	opacity: '0.3',
}

const devStyle = {
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	zIndex: '-2',
}

export default function ImageBackground() {
	return (
		<div style={devStyle}>
			<Image
				src={backgroundImage}
				style={imageStyle}
				alt='Background Image'
			/>
		</div>
	)
}
