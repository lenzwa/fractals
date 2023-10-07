import MultipleTriangle from './MultipleTriangle'
export default function HectTriangle({ pos }) {
	return (
		<>
			<mesh position={pos}>
				<MultipleTriangle></MultipleTriangle>
				<MultipleTriangle pos={[34, 2, 0]}></MultipleTriangle>
				<MultipleTriangle pos={[14.8, 32, 0]}></MultipleTriangle>
			</mesh>
		</>
	)
}
