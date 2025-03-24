import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"


const Home = ({sidebar}) => {



  return (
    <div className="flex">
     <Sidebar sidebar={sidebar}/>

     <div className={`w-full bg-[#f9f9f9] ${sidebar ? '' : ''}`}>
      <Feed/>
     </div>
    </div>
  )
}

export default Home