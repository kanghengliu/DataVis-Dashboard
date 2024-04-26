import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/misc/Navbar'
import Charts from '../../components/misc/Charts'

export default function Home() {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Navbar />
    </main>
    </div>
    </>
  )
}