import Link from 'next/link'
import Page from "./logo"

const Sidebar = () => {
    return (
      <>
        <aside className="fixed top-0 left-0 w-64 h-screen" aria label="Sidenav">
          <div className="overflow-y-auto py-5 px-3 h-fit flex-col bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  {/* <Link href="/"> */}
                    {/* <img src='./logo.png' alt='logo' className='w-8 h-8' /> */}
                    {/* <image src='./logo.png' alt='logo' /> */}
                    <Page />
                  {/* </Link> */}
                </a>
              </li>
              <li>
                <Link href="/"><button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Home</span>
                  {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  */}
                </button></Link>
              </li>
              <li>
                  <Link href="/genres"><button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Genres</span>
                  {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </button></Link>
              </li>
              <li>
                  <Link href="/titles"><button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Titles</span>
                  {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </button></Link>
              </li>
            </ul>
          </div>
          <div className='overflow-y-auto py-5 px-3  h-1/2 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700'></div>
          <div className='overflow-y-auto py-5 px-3  h-screen bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700'>

            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">Billy</span>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">Kang</span>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">JaeHo</span>
                {/* </a> */}
              </li>
            </ul>
          </div>
        </aside>
      </>
    )
  }
  
  export default Sidebar;
  