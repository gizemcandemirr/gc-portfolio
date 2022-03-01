import Layout from '../components/Layout'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div >
      <Layout title={"Portfolio- Gizem Candemir"} description={"Gizem Candemir Portfolio"}>
          <motion.img src="/images/blue-ball.png" alt="ball-1" className="w-44 hidden md:block h-auto absolute top-48 right-10 z-[1] "
           whileHover={{y:-10, rotate:90, transition: {duration: 0.4}}}
           drag
           dragConstraints={{top:0, left:0, right:0, bottom:0}}    
          />
          <motion.img src="/images/blue-ball.png" alt="ball-2" className="w-36 hidden md:block h-auto absolute bottom-10 left-10 z-[1] "
          whileHover={{y:-10, rotate:90, transition: {duration: 0.4}}}  
          drag
          dragConstraints={{top:0, left:0, right:0, bottom:0}}        />
          
            <main className="w-full h-full">
              <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
                <div>
                  <h4>
                    <span>Hello,</span> I'm
                  </h4>
                  <h1>
                    Gizem Candemir
                  </h1>
                </div>

              </section>
             </main>
      </Layout>
   
    </div>
  )
}
