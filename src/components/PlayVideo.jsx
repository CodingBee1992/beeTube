import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import bee from '../assets/logoBee.jpg'
import userProfile from '../assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Youtube Channel</h3>
        <div>
            <p>777k Views &bull; in 24 hours</p>
            <div>
                <span><img src={like} alt="" />77777</span>
                <span><img src={dislike} alt="" />0</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div>
            <img src={bee} alt="" className='w-[60px] h-[60px] rounded-full'/>
            <div>
                <p>CodingBee</p>
                <span>7M Subscribers</span>
            </div>
            
            <button>Subscribe</button>
        </div>
        <div>
            <p>Channel that makes learning Easy</p>
            <p>Subscribe CodingBee to Watch More Tutorials on web development</p>
            <hr />
            <h4>777 Coments</h4>
            <div>
                <img src={userProfile} alt="" />
                <div>
                    <h3>Rico Puerto <span>~ day ago</span></h3>
                    <p>The best beeTube channel</p>
                    <div>
                        <img src={like} alt="" />
                        <span>777</span>
                        <img src={dislike} alt="" />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo