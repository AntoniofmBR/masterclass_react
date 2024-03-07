import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps){
  return (
    <Link to='/status' className='tweet'>
    <img src="https://github.com/AntoniofmBR.png" alt="Antonio Fonseca" />

    <div className='tweet-content'>
      <div className="tweet-content-header">
        <strong>Antonio Fonseca</strong>
        <span>@Antoniofm</span>
      </div>

      <p>{props.content}</p>

      <div className='tweet-content-footer'>
        <button type='button'>
          <ChatCircle />
          12
        </button>
        
        <button type='button'>
          <ArrowsClockwise />
          12
        </button>
        
        <button type='button'>
          <Heart />
          12
        </button>
      </div>
    </div>
    </Link>
  )
}