export default function Triangle({ pos }) {
	return (
		<>
			<mesh position={pos}>
				<circleGeometry args={[5, 0, 10]} />
				<meshBasicMaterial color='white'></meshBasicMaterial>
			</mesh>
		</>
	)
}
