import React from 'react';


const Navbar = () => {
  return (
    <div>
    <div className='flex items-center justify-around p-5 bg-backgroundColor text-textColor font-bold'>
        <div>
            <h1 className='text-2xl'>Logo</h1>
        </div>
        <div >
            <ul className='flex text-xl'>
                <li >
                    <a className='p-4'>Home</a>
                    <a className='p-4'>About </a>
                    <a className='p-4'>Contact</a>
                </li>
               
            </ul>
        </div>

        <div className=' text-xl '>
           <button  className='px-2 py-1 border-2 border-textColor rounded-md  bg-textColor text-backgroundColor hover:bg-backgroundColor hover:text-textColor'>Sign in</button>
           <button  className='px-2 py-1 border-2 border-textColor rounded-md ml-2 bg-textColor text-backgroundColor hover:bg-backgroundColor hover:text-textColor'>Sign up</button>
        </div>


    </div>
    </div>
  )
}

export default Navbar
