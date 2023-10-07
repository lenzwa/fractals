export default function DynamicalPos({ setScaling, setPos }) {
	return (
		<div className='posText'>
			<div className='posInput'>
				<h1>Set position</h1>
				<input
					onChange={event => {
						setPos(rest => ({ ...rest, x: event.target.value }))
					}}
					type='text'
					placeholder='x'
				/>
				<input
					onChange={event => {
						setPos(rest => ({ ...rest, y: event.target.value }))
					}}
					type='text'
					placeholder='y'
				/>
				<input
					onChange={event => {
						setPos(rest => ({ ...rest, z: event.target.value }))
					}}
					type='text'
					placeholder='z'
				/>
			</div>
			<div className='scaling'>
				<input
					onChange={event => {
						setScaling(rest => ({
							...rest,
							scaleX: event.target.value,
						}))
					}}
					type='text'
					placeholder='ScaleX'
				/>
				<input
					onChange={event => {
						setScaling(rest => ({
							...rest,
							scaleY: event.target.value,
						}))
					}}
					type='text'
					placeholder='ScaleY'
				/>
				<input
					onChange={event => {
						setScaling(rest => ({
							...rest,
							scaleZ: event.target.value,
						}))
					}}
					type='text'
					placeholder='ScaleZ'
				/>
			</div>
		</div>
	)
}
