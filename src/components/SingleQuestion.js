import React, {useState} from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'

const SingleQuestion = ({question, answer}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className='border border-black rounded-lg bg-[#ffd000]'>
          <article className='flex items-center justify-between p-4 lg:p-6'>
            <h2 className='cursor-pointer font-bold' onClick={() => setShowAnswer(!showAnswer)}>{question}</h2>
            <ul>
              {!showAnswer && <li><button onClick={() => setShowAnswer(true)}><BsPlusLg/></button></li>}
              {showAnswer && <li><button onClick={() => setShowAnswer(false)}><BiMinus/></button></li>}
            </ul>
          </article>

          <article className={`${showAnswer && 'border-t border-black p-4 lg:p-6 bg-white'}`}>
            {showAnswer && <p>{answer}</p>}
          </article>
        </div>
  )
}

export default SingleQuestion