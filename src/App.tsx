import Sidebar from './components/Sidebar'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <main>
        <h1 style={{margin: '30px'}}>Dashboard</h1>
        <div style={{padding:'20px',paddingRight: '200px',backgroundColor: 'blue'}}>

        </div>
      </main>
    </div>
  )
}

export default App