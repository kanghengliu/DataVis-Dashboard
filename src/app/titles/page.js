import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/titles/Navbar'
import Charts from '../../components/titles/Charts'

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