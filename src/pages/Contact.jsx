import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xaeoyqrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div id='Contact' className='bg-[#080808] text-white w-full px-6 md:px-40 pt-2 pb-20 scroll-mt-16'>
      <p className='font-bold text-2xl md:text-3xl pb-4'>
        Get in <span className='text-white'>touch</span>
      </p>
      <p className='text-[#9C9C9C] text-sm ibm-mono pb-8 max-w-xl'>
        Have a project or an idea? Send me a message and I will reply as soon as I can.
      </p>

      <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-xl'>
        <input
          type='text'
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='bg-[#1B1B1B] border border-[#1B1B1B] focus:border-[#3F8E00] outline-none text-white text-sm ibm-mono px-5 py-3 rounded-lg'
        />

        <input
          type='email'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='bg-[#1B1B1B] border border-[#1B1B1B] focus:border-[#3F8E00] outline-none text-white text-sm ibm-mono px-5 py-3 rounded-lg'
        />

        <textarea
          placeholder='Your message'
          rows='5'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='bg-[#1B1B1B] border border-[#1B1B1B] focus:border-[#3F8E00] outline-none text-white text-sm ibm-mono px-5 py-3 rounded-lg'
        />

        <button
          type='submit'
          disabled={status === 'sending'}
          className='bg-[#3F8E00] p-3 px-8 ibm-mono shadow-2xl shadow-emerald-400 self-start disabled:opacity-60'
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>

        {status === 'success' && (
          <p className='text-[#3F8E00] text-sm ibm-mono'>Thank you! Your message was sent.</p>
        )}
        {status === 'error' && (
          <p className='text-red-500 text-sm ibm-mono'>Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}

export default Contact