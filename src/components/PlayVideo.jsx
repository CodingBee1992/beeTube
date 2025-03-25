import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
// import bee from '../assets/logoBee.jpg'
import { useEffect, useState } from 'react'
import { API_KEY, valueConverter } from '../data'
import moment from 'moment'
import { useParams } from 'react-router'

const PlayVideo = () => {
	const { videoId } = useParams()

	const [apiData, setApiData] = useState(null)
	const [channelData, setChannelData] = useState(null)
	const [commentData, setCommentData] = useState([])

	const [isOpen, setIsOpen] = useState(false)
	const [commentOpen, setCommentOpen] = useState(false)
	const [targetId, setTargetId] = useState('')

	const handleClick = e => {
		setTargetId(e.target.id)
		console.log(targetId)
		setCommentOpen(!commentOpen)
	}
	console.log(commentOpen)

	const fetchData = async () => {
		const videoData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

		await fetch(videoData)
			.then(res => res.json())
			.then(data => setApiData(data.items[0]))

		// const res = await fetch(videoData)

		// const resData = await res.json()

		// setApiData(resData.items[0])
	}

	const fetchChannelData = async () => {
		const channelData = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`

		const res = await fetch(channelData)

		const resData = await res.json()

		setChannelData(resData.items[0])

		// fetching comment data
		const commentData = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

		const response = await fetch(commentData)
		const responseData = await response.json()

		setCommentData(responseData.items)
	}

	useEffect(() => {
		fetchData()
	}, [videoId])

	useEffect(() => {
		fetchChannelData()
	}, [apiData])

	return (
		<div className="w-[100%] lg:w-[69%] ">
			<iframe
				className="w-full h-[35vw] min-h-[350px] rounded-2xl"
				src={`https://www.youtube.com/embed/${videoId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
			<h3 className="mt-4 text-2xl font-semibold ">{apiData ? apiData.snippet.title : 'Random title'}</h3>
			<div className="flex items-center justify-between text-[14px] text-[#5a5a5a]">
				<p>
					{apiData ? valueConverter(apiData.statistics.viewCount) : '570K'} Views &bull;{' '}
					{apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'NaN'}
				</p>
				<div className="flex items-center gap-4">
					<span className="inline-flex gap-1 items-center">
						<img src={like} alt="" className="w-[25px]" />
						{apiData ? valueConverter(apiData.statistics.likeCount) : '77K'}
					</span>
					<span className="inline-flex gap-1 items-center">
						<img src={dislike} alt="" className="w-[25px]" />0
					</span>
					<span className="inline-flex gap-1 items-center">
						<img src={share} alt="" className="w-[25px]" />
						Share
					</span>
					<span className="inline-flex gap-1 items-center">
						<img src={save} alt="" className="w-[25px]" />
						Save
					</span>
				</div>
			</div>
			<hr className="h-[1px] border-none bg-[#ccc] m-[10px_0]" />
			<div>
				<div className="flex items-center gap-3 mb-4">
					<img
						src={channelData ? channelData.snippet.thumbnails.default.url : 'null'}
						alt=""
						className="w-[50px] h-[50px] rounded-full"
					/>
					<div>
						<p className="font-semibold">{apiData ? apiData.snippet.channelTitle : 'Channel Title'}</p>
						<span className="text-[14px] text-[#5a5a5a]">
							{channelData ? valueConverter(channelData.statistics.subscriberCount) : '7mln'} Subscribers
						</span>
					</div>

					<button className="px-5 py-2 rounded-3xl text-white bg-yellow-500 hover:bg-orange-500 duration-400 cursor-pointer">
						Subscribe
					</button>
				</div>
				<div className={`relative mb-7 h-full`}>
					<p
						className={`${
							isOpen ? 'h-full' : apiData ? (apiData.snippet.description.length > 0 ? 'h-[100px]' : 'h-0') : ''
						} overflow-hidden`}>
						{apiData ? apiData.snippet.description : ''}
					</p>
					<button onClick={() => setIsOpen(!isOpen)} className="absolute bottom-[-1] cursor-pointer font-semibold">
						{apiData && !isOpen ? (apiData.snippet.description.length >= 150 ? '...more' : '') : '...less'}
					</button>
				</div>
			</div>
			<div>
				<hr className="h-[1px] border-none bg-[#ccc] m-[10px_0]" />
				<h4>{apiData ? valueConverter(apiData.statistics.commentCount) : 43444} Comments</h4>

				{commentData.map((item, index) => (
					<div className="flex  gap-4 mt-4" key={index}>
						<img
							src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
							alt=""
							className="w-[50px] h-[50px] rounded-full"
						/>
						<div className="flex flex-col overflow-hidden  gap-2 mt-4">
							<h3 className="font-semibold">
								{item.snippet.topLevelComment.snippet.authorDisplayName}
								<span className="font-[400] text-[14px] text-[#5a5a5a]">
									~ {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
								</span>
							</h3>
							<div
								className={`relative h-full ${
									item.snippet.topLevelComment.snippet.textDisplay.length >= 250 ? 'mb-8' : 'mb-0'
								}`}>
								<p
									className={`relative overflow-hidden  ${item.id === targetId && commentOpen ? 'h-full' : ''} ${
										item.snippet.topLevelComment.snippet.textDisplay.length >= 250 ? 'h-[80px] ' : 'h-fit'
									}`}>
									{item.snippet.topLevelComment.snippet.textDisplay}
									<div className={`absolute bottom-0 w-full h-[35px] ${item.snippet.topLevelComment.snippet.textDisplay.length >= 250 ? 'bg-linear-[to_top,#fff,50%,transparent]': ''} ${(commentOpen && item.snippet.topLevelComment.snippet.textDisplay.length >= 250 ? 'bg-none': '')}`}></div>
								</p>
								<span id={item.id} onClick={e => handleClick(e)} className="absolute bottom-[-2rem] font-semibold">
									{item.id === targetId && commentOpen && item.snippet.topLevelComment.snippet.textDisplay.length >= 250
										? '...less'
										: item.snippet.topLevelComment.snippet.textDisplay.length >= 250
										? '...more'
										: ''}
								</span>
							</div>
							<div className="flex gap-1 text-[14px] text-[#5a5a5a]">
								<img src={like} alt="" className="w-[20px]" />
								<span className="mr-4">{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
								<img src={dislike} alt="" className="w-[20px]" />
								<span>0</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PlayVideo
