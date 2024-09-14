import { NavLink } from 'react-router-dom'
function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900  flex flex-col gap-10 justify-center items-center'>
        <h2 className="text-5xl md:text-6xl font-black text-white text-center uppercase">Bienvenido al Mapa Interactivo <br /> de La Rioja</h2>
        <NavLink to="/map" className="bg-blue-900 text-white text-2xl p-3 px-7 rounded-full text-center font-bold uppercase hover:scale-110 transition">Comenzar</NavLink>
      </div>
    </>
  )
}

export default App
