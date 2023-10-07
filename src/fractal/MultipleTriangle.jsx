import TripleTriangle from './TripleTriangle'
export default function MultipleTriangle({ pos }) {
	return (
		<>
			<mesh position={pos}>
				<TripleTriangle pos={[0.4, 0, 0]}></TripleTriangle>
				<TripleTriangle pos={[17, 1, 0]}></TripleTriangle>
				<TripleTriangle pos={[7.5, 16, 0]} />
			</mesh>
		</>
	)
}
