import { Link } from 'react-router'
import thumb1 from '../assets/thumbnail1.png'
import { API_KEY, valueConverter } from '../data'
import { useEffect, useState } from 'react'
import moment from 'moment'
// import thumb2 from '../assets/thumbnail2.png'
// import thumb3 from '../assets/thumbnail3.png'
// import thumb4 from '../assets/thumbnail4.png'
// import thumb5 from '../assets/thumbnail5.png'
// import thumb6 from '../assets/thumbnail6.png'
// import thumb7 from '../assets/thumbnail7.png'
// import thumb8 from '../assets/thumbnail8.png'

const Feed = ({category}) => {

	const [data,setData]=useState([])

	const fetchData = async () => {

		const videoListURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `

		const res = await fetch(videoListURL)

		const resData = await res.json()

		setData(resData.items)
	}

	useEffect(()=>{
		fetchData()
	},[category])
	console.log(data);
	return (
		<div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4'>
			{data.map(({id,statistics,snippet}) =>(
				
				<Link to={`/beetube/video/${snippet.categoryId}/${id}`} key={id} className="card">
				<img src={snippet.thumbnails.medium.url} alt="" className="rounded-[8px] w-full"/>
				<h2 className="text-[16px] font-semibold text-black mt-2.5">{snippet.title}</h2>
				<h3 className="text-[14px] font-semibold text-[#555] mt-2.5 mb-1">{snippet.channelTitle}</h3>
				<p>{valueConverter(statistics.viewCount)} views &bull; {moment(snippet.publishedAt).fromNow()}</p>
			</Link>
			))}
			
		</div>
	)
}

export default Feed
