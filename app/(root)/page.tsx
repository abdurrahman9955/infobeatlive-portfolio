'use client';
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Causes } from "../components/Causes";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { AnimatePresence } from "framer-motion";

export default function PortfolioApp() {
 
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-amber-500/30 selection:text-amber-200">
      <Navigation />
      <main>
        <AnimatePresence mode="wait">
          <div>
            
             <section id='home'> <Home /> </section>
             <section id='about'> <About /> </section>
             <section id='services'> <Services /> </section>

             <section id='experience'> <Experience /> </section>
             <section id='projects'> <Projects /> </section>

             <section id='education'> <Education /> </section>
             <section id='causes'> <Causes /> </section>
             <section id='skills'> <Skills /> </section>

          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

