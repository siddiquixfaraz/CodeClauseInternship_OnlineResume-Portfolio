import { FaGithubSquare} from 'react-icons/fa';
import { BsInstagram,} from 'react-icons/bs';
import { AiFillTwitterSquare ,AiFillLinkedin} from 'react-icons/ai';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[10vh] bg-red-100 text-center pb-[100px] pt-5' id='footer'>
      <h2 className='mb-3'>Made with ❤️ by Faraz Ahmad</h2>
      <div className="flex justify-center gap-3 mb-3">
        {/* <a href="/"><BsInstagram size={22}/></a> */}
        <a href="https://twitter.com/FarazAh07394644" target="_blank"><AiFillTwitterSquare size={25}/></a>
        <a href="https://www.linkedin.com/in/faraz-ahmad-71b837233/" target="_blank"><AiFillLinkedin size={25}/></a>
        <a href="https://github.com/siddiquixfaraz" target="_blank"><FaGithubSquare size={25}/></a>
      </div>
      <h5>Copyright © Faraz Ahmad</h5>
    </div>
  )
}

export default Footer