import Link from 'next/link'
import { navLinks } from './constant/navLinks'


const NotFound=()=>{
  return (
    <div className="w-full h-full flex items-center justify-center">
      
      <div className="w-96 h-96 justify-center items-center p-4 bg-white/10">
      <p className='text-center text-4xl font-rale font-semibold'>Page not found.</p>
      <ul className="flex justify-center items-center h-full w-full">
        {
          navLinks.map((menu)=>{
            return(
              <li key={menu.id} className="flex items-center space-x-8 p-2 cursor-pointer ">
                <Link href={menu.path} className="p-2 bg-pri rounded-full">{menu.icon}</Link>

              
              </li>
            )
          
          })
        }
         
      </ul>
   

      </div>
      

      
    </div>
  )
}

export default NotFound