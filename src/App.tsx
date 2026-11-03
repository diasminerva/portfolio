import React from 'react';
import { GithubLogo, LinkedinLogo, Envelope, Export, Terminal, Cpu } from '@phosphor-icons/react';

export default function App() {
  const projetos = [
    {
      titulo: "Empório Natural & Gourmet",
      descricao: "Aplicação e-commerce completa para gestão de produtos e categorias com foco em alimentos saudáveis.",
      techs: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://projeto-final-bloco-03-yg1j.vercel.app",
      github: "https://github.com/diasminerva/projeto_final_bloco_03"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono selection:bg-emerald-500 selection:text-black">
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <section className="space-y-6 mb-20 border-b border-zinc-800 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 text-emerald-400 text-xs">
            <Terminal className="w-3.5 h-3.5" />
            <span>system.status: online</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Minerva <span className="text-emerald-400 font-mono">&lt;Dias /&gt;</span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Desenvolvedora Full Stack. Construindo aplicações modernas, escaláveis e com design refinado.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com/diasminerva" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors">
              <GithubLogo className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/seu-linkedin" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors">
              <LinkedinLogo className="w-5 h-5" />
            </a>
            <a href="mailto:seu-email@gmail.com" className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors">
              <Envelope className="w-5 h-5" />
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            <Cpu className="w-4 h-4" />
            <h2>// Projetos em Destaque</h2>
          </div>

          <div className="grid gap-6">
            {projetos.map((proj, index) => (
              <div key={index} className="bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/50 p-6 rounded-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-zinc-100">{proj.titulo}</h3>
                  <div className="flex gap-3">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100">
                      <GithubLogo className="w-5 h-5" />
                    </a>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400">
                      <Export className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm mb-6">{proj.descricao}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.techs.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-zinc-800/80 border border-zinc-700/50 rounded text-zinc-300">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
