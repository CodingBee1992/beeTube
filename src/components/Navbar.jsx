import menuIcon from '../assets/menu.png'
import logo from '../assets/logoBee.jpg'
import searchIcon from '../assets/search.png'
import uploadIcon from '../assets/upload.png'
import moreIcon from '../assets/more.png'
import notificationIcon from '../assets/notification.png'
import profileIcon from '../assets/logoBee.jpg'
import { Link } from 'react-router'
const Navbar = ({setSidebar,sidebar}) => {
	return (
		<nav className="flex items-center justify-between p-4 sticky top-0 bg-[#fff] z-10 shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
			<div className="flex items-center">
				<img src={menuIcon} alt="" className="h-[20px] mr-5" onClick={()=>setSidebar(!sidebar)}/>
				<Link to={'/beeTube/'} className="flex items-center gap-2 cursor-pointer">
					<img src={logo} alt="" className="w-[35px] h-[35px] rounded-full object-cover" />
					<p className="font-semibold text-[20px]">beeTube</p>
				</Link>
			</div>

			<div className="flex items-center">
				<div className='flex px-4.5 py-2 border-[1px] border-[#ccc] border-solid rounded-[25px]'>
					<input type="text" placeholder="Search" className=' w-[120px] sm:w-[clamp(150px,25dvw,500px)] outline-none'/>
					<img src={searchIcon} alt="" />
				</div>
			</div>
			<div className="hidden sm:flex gap-4 mr-4">
				<img src={uploadIcon} alt="" className="h-[30px]" />
				<img src={moreIcon} alt="" className="h-[30px]" />
				<img src={notificationIcon} alt="" className="h-[30px]" />
				<img src={profileIcon} alt="" className="h-[30px] w-[30px] rounded-full" />
			</div>
		</nav>
	)
}

export default Navbar
