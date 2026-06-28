import type { ReactNode } from 'react'
import WorkCard, { type Work } from './WorkCard'

export type MemberCardProps = {
  id: string
  name: string
  description: ReactNode
  works: Work[]
  className?: string
}

export default function MemberCard({ id, name, description, works, className = '' }: MemberCardProps) {
  return (
    <section className={`flex flex-col bg-white p-16 rounded-[3rem] border border-amber-500 flex-1 text-black ${className} gap-6`}>
      <div className="flex gap-16 items-center justify-between">
        <div className="flex flex-col gap-6">
          <span className='ml-1 text-xl font-bold text-amber-600 tracking-widest'>{id}</span>
          <h3 className="text-5xl font-bold">{name}</h3>
          <p className="text-lg leading-[1.7]">{description}</p>
        </div>
        <img className="w-80 h-80 object-cover rounded-full" src="https://picsum.photos/640/360" alt="" />
      </div>

      <h4 className="text-2xl font-bold mt-2">主な制作物</h4>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  )
}

