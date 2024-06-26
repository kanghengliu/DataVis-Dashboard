import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/genres/Navbar'
import Charts from '../../components/genres/Charts'

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