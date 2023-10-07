import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import MultiTriangle from './fractal/MultiTriangle'
import DynamicalPos from './fractal/input/DynamicalPos'

function App() {
	const [position, setPos] = useState({
		x: '',
		y: '',
		z: '',
	})
	const [scaling, setScaling] = useState({
		scaleX: 1,
		scaleY: 1,
		scaleZ: 1,
	})
	const infinite = [
		<MultiTriangle
			scale={Object.values(scaling)}
			pos={Object.values(position)}
		/>,
	]
	let newInfinite = []
	infinite.forEach(item => {
		for (let i = 0; i < 5; i++) {
			newInfinite.push(<mesh key={i}>{item}</mesh>)
		}
	})

	return (
		<div
			className='fractals'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<DynamicalPos setScaling={setScaling} setPos={setPos} />
			<Canvas
				style={{
					width: '50vw',
					height: '50vh',
					backgroundColor: '#181818',
				}}
				camera={{
					fov: '120',
					position: [80, 100, 300],
				}}
			>
				<OrbitControls></OrbitControls>
				<ambientLight intensity={0.8} />
				{newInfinite}
			</Canvas>
		</div>
	)
}

export default App
