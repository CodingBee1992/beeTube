import PlayVideo from "../components/PlayVideo"
import Recommended from "../components/Recommended"


const Video = () => {
  return (
    <div className="flex justify-between flex-wrap bg-[#f9f9f9] p-10 lg:p-8">
      <PlayVideo />
      <Recommended />
    </div>
  )
}

export default Video