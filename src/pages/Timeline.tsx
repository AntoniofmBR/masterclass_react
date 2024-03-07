import { FormEvent, useState, KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Timeline.css'

export function Timeline() {

  const [newTweet, setNewTweet] = useState('')

  const [tweets, setTweets]  = useState([
    'Testando tweet',
    'Meu primeiro tweet',
    'Na verdade aquele era o segundo...'
  ])

  function createNewTweet(event: FormEvent){
    event.preventDefault()
    
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
        <Header title='Home' />


        <form onSubmit={createNewTweet} className='new-tweet-form'>
          <label htmlFor="tweet">
          <img src="https://github.com/AntoniofmBR.png" alt="Antonio Fonseca" />
          <textarea 
          onKeyDown={handleHotkeySubmit}
          id="tweet" 
          value={newTweet}
          placeholder="What's happening?"
          onChange={(event) => {
            setNewTweet(event.target.value)
          }}
          ></textarea>
          </label>

          <button type='submit'>Tweet</button>
        </form>

        <Separator />

        {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}
      </main>
  )
}