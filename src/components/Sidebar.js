import Link from 'next/link'
import Page from "./logo"

const Sidebar = () => {
    return (
      <>
        <aside className="fixed top-0 left-0 w-64 h-screen" aria label="Sidenav">
          <div className="overflow-y-auto py-5 px-3 h-fit flex-col bg-white border-r border-gray-200">
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group">
                  {/* <Link href="/"> */}
                    {/* <img src='./logo.png' alt='logo' className='w-8 h-8' /> */}
                    {/* <image src='./logo.png' alt='logo' /> */}
                    <Page />
                  {/* </Link> */}
                </a>
              </li>
              <li>
                <Link href="/"><button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Home</span>
                  {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  */}
                </button></Link>
              </li>
              <li>
                  <Link href="/genres"><button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Genres</span>
                  {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </button></Link>
              </li>
              <li>
                  <Link href="/titles"><button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Titles</span>
                  {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </button></Link>
              <li>
                  <Link href="https://github.com/wmcgloin/movie_project.git">
                    <button
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                      aria-controls="dropdown-sales"
                      data-collapse-toggle="dropdown-sales"
                    >
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">Data Munging Github Repo</span>
                      {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </button>
                  </Link>
              </li>
              <li>
                  <Link href="https://github.com/kanghengliu/admin-dashboard.git">
                    <button
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                      aria-controls="dropdown-sales"
                      data-collapse-toggle="dropdown-sales"
                    >
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">Dashboard Github Repo</span>
                      {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </button>
                  </Link>
              </li>
              <li>
                  <Link href="https://www.wmcgloin.com/spring_2024/moovies/narrative_report.html">
                    <button
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                      aria-controls="dropdown-sales"
                      data-collapse-toggle="dropdown-sales"
                    >
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">Narrative Report</span>
                      {/* <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </button>
                  </Link>
              </li>
              </li>
            </ul>
          </div>
          <div className='overflow-y-auto py-5 px-3  h-2/5 bg-white border-r border-gray-2000'></div>
          <div className='overflow-y-auto py-5 px-3  h-screen bg-white border-r border-gray-200'>

            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200">
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">Billy McGloin</span>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">Kang Liu</span>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">JaeHo Bahng</span>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"> */}
                  <span className="ml-3 text-gray-800">Isfar Baset</span>
                {/* </a> */}
              </li>
            </ul>
          </div>
        </aside>
      </>
    )
  }
  
  export default Sidebar;