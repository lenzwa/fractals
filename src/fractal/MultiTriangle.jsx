import HectTriangle from './HectTriangle'
export default function MultiTriangle({ scale, pos }) {
	return (
		<mesh scale={scale} position={pos}>
			<HectTriangle />
			<HectTriangle pos={[68.5, 3.9, 0]} />
			<HectTriangle pos={[30, 63.8, 0]} />
		</mesh>
	)
}
