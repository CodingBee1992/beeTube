import { useParams } from "react-router"
import PlayVideo from "../components/PlayVideo"
import Recommended from "../components/Recommended"


const Video = () => {

  const {videoId,categoryId}= useParams()

  return (
    <div className="flex justify-between flex-wrap bg-[#f9f9f9] p-4 lg:p-8">
      <PlayVideo  videoId={videoId} categoryId={categoryId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video