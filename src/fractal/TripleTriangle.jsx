import Triangle from './Triangle'
export default function TripleTriangle({ pos }) {
	return (
		<>
			<mesh position={pos}>
				<Triangle pos={[15, 10, 10]}></Triangle>
				<Triangle pos={[19, 18, 10]}></Triangle>
				<Triangle pos={[24, 10.5, 10]}></Triangle>
			</mesh>
		</>
	)
}
