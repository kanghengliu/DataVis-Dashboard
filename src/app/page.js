import Sidebar from '../components/Sidebar'
import Navbar from '../components/home/Navbar'
import Charts from '../components/home/Charts'

export default function Home() {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Navbar />
          <Charts />
    </main>
    </div>
    </>
  )
}