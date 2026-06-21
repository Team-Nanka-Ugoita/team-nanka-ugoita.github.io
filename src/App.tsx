import Header from './components/Header'
import Top from './Top'
import About from './About'
import Member from './Member'
import Footer from './components/Footer'
import Message from './Message'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background--orange font-sans">
      <Header />
      <div className="w-full flex justify-center items-center flex-col">
        <Top />
        <About />
        <Member />
        <Message />
        <Footer />
      </div>
    </div>
  )
}

export default App
