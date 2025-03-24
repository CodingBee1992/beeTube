import home from '../assets/home.png'
import gameIcon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Sidebar = ({sidebar}) => {
	return (
		<div className={`w-fit h-full sticky top-20 bg-[#fff] p-4 ${sidebar ? '': 'small-sidebar'}`}>
			<div className="flex flex-col gap-3 ">
				<div className="flex gap-5 items-center ">
					<img src={home} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Home</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={gameIcon} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Gaming</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={automobiles} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Automobiles</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={sports} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Sports</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={entertainment} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Entertainment</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={tech} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Technology</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={music} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Music</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={blogs} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">Blogs</p>
				</div>
				<div className="flex gap-5 items-center">
					<img src={news} alt="" className="min-w-[20px] w-[24px]" />
					<p className="cursor-pointer hover:text-yellow-500 duration-300">News</p>
				</div>

				<hr className={`bg-[#c3c3c3] h-[1px] border-none ${sidebar ? 'w-[85%]' : 'w-[50%] mb-4'}`}/>

				<div className="flex flex-col justify-center gap-6">
					<h3 className=" font-semibold">Subscribed</h3>
					<div className="flex items-center gap-3 ">
						<img src={jack} alt="" className="min-w-[25px] w-[30px] rounded-full" />
						<p>Jack</p>
					</div>
					<div className="flex items-center gap-3 ">
						<img src={simon} alt="" className="min-w-[25px] w-[30px] rounded-full" />
						<p>Simon</p>
					</div>
					<div className="flex items-center gap-3 ">
						<img src={tom} alt="" className="min-w-[25px] w-[30px] rounded-full" />
						<p>Tom</p>
					</div>
					<div className="flex items-center gap-3 ">
						<img src={megan} alt="" className="min-w-[25px] w-[30px] rounded-full" />
						<p>Megan</p>
					</div>
					<div className="flex items-center gap-3 ">
						<img src={cameron} alt="" className="min-w-[25px] w-[30px] rounded-full" />
						<p>Cameron</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
