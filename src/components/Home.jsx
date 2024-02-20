import React from 'react'
import './Home.css'
import man from "../img/sun.png"
function Home() {
  return (
    <>
    <div className="main">
        <div className="left ">
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quasi necessitatibus animi quo totam quae dolorem unde quod possimus eum velit itaque, facilis nihil similique nisi, culpa tempore labore magnam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam hic quas excepturi veritatis? Numquam est aperiam aliquid, laborum recusandae a repellendus tempore nostrum ea ab enim placeat corrupti minima maxime!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vero cupiditate quod iusto iure repudiandae deleniti, illo, tempore quos officia perspiciatis, animi ipsa nisi ex accusantium pariatur aperiam perferendis rem.
            </p>
            <div className='ml-4 mt-5'>
            <button type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800 p-3">Golden Button</button>

            </div>
        </div>
        <div className="right">
        <img src={man} alt="img" />

        </div>
    </div>
    </>
  )
}

export default Home