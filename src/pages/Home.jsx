import { useState } from 'react'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home = ({ sidebar }) => {
	const [category, setCategory] = useState(0)
	console.log(category);
	return (
		<div className="flex">
			<Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>

			<div className={`w-full bg-[#f9f9f9]  ${sidebar ? 'pl-0' : 'pl-2'} md:pl-0`} >
				<Feed category={category}/>
			</div>
		</div>
	)
}

export default Home
