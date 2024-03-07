import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status(){

  const [newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers]  = useState([
    'Concordo',
    'Isso aí',
    'Ta certo',
    'Exato',
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()
    
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  
  return (
    <main className='status'>
        <Header title='Tweet' />

        
        <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic, totam enim adipisci sequi voluptas similique sunt accusamus ipsa iste delectus, est laborum? Fugit quis vel porro architecto nostrum dolor.'/>
        <Separator />

        <form onSubmit={createNewAnswer} className='answer-tweet-form'>
          <label htmlFor="tweet">
          <img src="https://github.com/AntoniofmBR.png" alt="Antonio Fonseca" />
          <textarea 
          id="tweet" 
          placeholder="Tweet your answer"
          value={newAnswer}
          onKeyDown={handleHotkeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          ></textarea>
          </label>

          <button type='submit'>
            <PaperPlaneRight />
            <span>Answer</span>
            </button>
        </form>


        { answers.map(answer => {
          return <Tweet key={answer} content={answer} />
          })
        }
      </main>
  )
}