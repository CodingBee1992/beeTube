import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { API_KEY, valueConverter } from '../data'


const Recommended = ({categoryId}) => {

	const [apiData,setApiData]=useState([])

	const fetchData = async () => {
		try{
			const rec = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `

		const res = await fetch(rec)
		const resData = await res.json()

		setApiData(resData.items)
		}catch(error){
			console.log(`Error: ${error}`);
		}
	}

	useEffect(()=>{
		fetchData()
	},[])
		
	return (
		<div className='w-[100%] lg:w-[30%] mt-10 lg:mt-0'>
			{apiData ? apiData.map(({snippet,id,statistics})=>(
				<Link to={`/beeTube/video/${snippet.categoryId}/${id}`} key={id} className='flex justify-between gap-2 mb-3'>
				<img src={snippet.thumbnails.medium.url} alt="" className="rounded-[8px] basis-[49%] h-[50%] w-[50%]" />
				<div className='basis-[49%]'>
                    <h4 className='text-[13px] mb-2 font-semibold'>{snippet.title}</h4>
                    <p>{snippet.channelTitle}</p>
                    <p>{valueConverter(statistics.viewCount)} Views</p>
                </div>
			</Link>
			)): 'error'}
			
			
			
		</div>
	)
}

export default Recommended
