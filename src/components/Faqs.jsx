import React, {useState} from 'react'
import {questions} from './questions'
import SingleQuestion from './SingleQuestion'

const Faqs = () => {
  const [cards] = useState(questions);

  return (
    <div name='faqs' className='w-full bg-white px-4 text-black'>
      <section className='max-w-xl mx-auto py-36 px-4'>
        <h1 className='text-center uppercase tracking-widest font-bold mb-8 text-3xl'>Faqs</h1>

        <section className='grid grid-cols-1 gap-8'>
          {cards.map((card, index) =>(
            <SingleQuestion {...card} key={index}/>
          ))}
        </section>
      </section>
    </div>
  )
}
export default Faqs