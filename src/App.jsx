import Nav from './assets/nav.jsx'
import Hero from './assets/hero.jsx'
import Tech from './assets/Tech.jsx'
import Exp from './assets/exp.jsx'
import Pro from './projects.jsx'
import Cont from './assets/cont.jsx'

function App() {


  return (
    <div className='overflow-x-hidden text-neutral-300'>
    <div class="absolute top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className='container mx-auto px-8'>
     <Nav/>
     <Hero/>
    
     <Tech/>
     <Exp/>
     <Pro/>
     <Cont/>
     </div>   
    
    </div>    
    </div>
      
    
  )
}

export default App
