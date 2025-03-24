import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Video from './pages/Video'

const App = () => {

	const [sidebar,setSidebar]= useState(true)

	console.log(sidebar);

	return (
		<div>
			<Navbar setSidebar={setSidebar} sidebar={sidebar}/>

			<Routes>
				<Route path="/beeTube/" element={<Home  sidebar={sidebar}/>} />
				<Route path="/beeTube/video/:categoryId/:videoId" element={<Video />} />
			</Routes>
		</div>
	)
}

export default App
