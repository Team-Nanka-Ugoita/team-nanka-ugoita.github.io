import type { ReactNode } from 'react'

export type Work = {
  id: string
  title: string
  description: ReactNode
  imageSrc: string
  imageAlt: string
}

function WorkCard({ work }: { work: Work }) {
  return (
    <a href="#" className="flex w-80 shrink-0 border border-slate-300 rounded-2xl flex-col overflow-hidden bg-white hover:bg-slate-100 transition">
      <img className="w-full h-auto aspect-video object-cover" src={work.imageSrc} alt={work.imageAlt} />
      <div className="flex flex-col p-4 gap-1">
        <h5 className="text-xl font-bold text-slate-950">{work.title}</h5>
        <p className="text-base leading-[1.7] text-slate-800">{work.description}</p>
      </div>
    </a>
  )
}

export default WorkCard;