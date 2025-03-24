import { Link } from 'react-router'
import thumb1 from '../assets/thumbnail1.png'
// import thumb2 from '../assets/thumbnail2.png'
// import thumb3 from '../assets/thumbnail3.png'
// import thumb4 from '../assets/thumbnail4.png'
// import thumb5 from '../assets/thumbnail5.png'
// import thumb6 from '../assets/thumbnail6.png'
// import thumb7 from '../assets/thumbnail7.png'
// import thumb8 from '../assets/thumbnail8.png'

const Feed = () => {
	return (
		<div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-4'>
			<Link to={`/beetube/video/20/69`} className="card">
				<img src={thumb1} alt="" className="rounded-[8px]"/>
				<h2 className="text-[16px] font-semibold text-black mt-2.5">CodingBee channel to learn coding that help you to be a wev developer</h2>
				<h3 className="text-[14px] font-semibold text-[#555] mt-2.5 mb-1">CodingBee</h3>
				<p>777k views &bull; in 24h</p>
			</Link>
			
		
	
		
		
		</div>
	)
}

export default Feed
