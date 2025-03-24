// import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import bee from '../assets/logoBee.jpg'
// import userProfile from '../assets/user_profile.jpg'

const PlayVideo = () => {
	return (
		<div className="basis-[100%] lg:basis-[69%]">
			{/* <video src={video1} controls autoPlay muted className="w-full rounded-2xl"></video> */}
			<iframe className="w-full h-[35vw] min-h-[350px] rounded-2xl"  src="https://www.youtube.com/embed/feHgR2Nr6JE?si=MeTvCUpjtFrKMAIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			<h3 className="mt-4 text-2xl font-semibold ">Best Youtube Channel</h3>
			<div className="flex items-center justify-between text-[14px] text-[#5a5a5a]">
				<p>777k Views &bull; in 24 hours</p>
				<div className="flex items-center gap-4">
					<span className="inline-flex gap-1 items-center">
						<img src={like} alt="" className="w-[25px]" />
						77777
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
				<div className='flex items-center gap-3 mb-4'>
					<img src={bee} alt="" className="w-[50px] h-[50px] rounded-full" />
					<div>
						<p className="font-semibold">CodingBee</p>
						<span className="text-[14px] text-[#5a5a5a]">7mln Subscribers</span>
					</div>

					<button className="px-5 py-2 rounded-3xl text-white bg-yellow-500 hover:bg-orange-500 duration-400 cursor-pointer">
						Subscribe
					</button>
				</div>
				<div className='ml-15 mb-3'>
					<p>Channel that makes learning Easy</p>
					<p>Subscribe CodingBee to Watch More Tutorials on web development</p>
				</div>
			</div>
			<div className=''>
				<hr className="h-[1px] border-none bg-[#ccc] m-[10px_0]"/>
				<h4>777 Coments</h4>
				<div className='flex gap-4 mt-4'>
					<img src={bee} alt="" className="w-[50px] h-[50px] rounded-full" />
					<div className='flex flex-col gap-2 mt-4'>
						<h3 className='font-semibold'>
							Rico Puerto <span className='font-[400] text-[14px] text-[#5a5a5a]'>~ day ago</span>
						</h3>
						<p>The best beeTube channel</p>
						<div className='flex gap-1 text-[14px] text-[#5a5a5a]'>
							<img src={like} alt="" className='w-[20px]'/>
							<span className='mr-4'>777</span>
							<img src={dislike} alt="" className='w-[20px]'/>
							<span>0</span>
						</div>
					</div>
				</div>
				<div className='flex gap-4 mt-4'>
					<img src={bee} alt="" className="w-[50px] h-[50px] rounded-full" />
					<div className='flex flex-col gap-2 mt-4'>
						<h3 className='font-semibold'>
							Rico Puerto <span className='font-[400] text-[14px] text-[#5a5a5a]'>~ day ago</span>
						</h3>
						<p>The best beeTube channel</p>
						<div className='flex gap-1 text-[14px] text-[#5a5a5a]'>
							<img src={like} alt="" className='w-[20px]'/>
							<span className='mr-4'>777</span>
							<img src={dislike} alt="" className='w-[20px]'/>
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayVideo
