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
    <section className={`flex flex-1 flex-col gap-6 rounded-2xl border border-amber-500 bg-white p-6 text-black sm:rounded-[2rem] sm:p-8 lg:rounded-[3rem] lg:p-16 ${className}`}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex min-w-0 flex-col gap-4 sm:gap-6">
          <span className='ml-1 text-base font-bold tracking-widest text-amber-600 sm:text-xl'>{id}</span>
          <h3 className="text-4xl font-bold sm:text-5xl">{name}</h3>
          <p className="text-base leading-[1.8] sm:text-lg">{description}</p>
        </div>
        <img className="mx-auto h-36 w-36 shrink-0 rounded-full object-cover sm:h-48 sm:w-48 lg:mx-0 lg:h-80 lg:w-80" src="https://picsum.photos/640/360" alt="" />
      </div>

      <h4 className="mt-2 text-xl font-bold sm:text-2xl">主な制作物</h4>
      <div className="flex gap-4 overflow-x-auto pb-2 sm:gap-6">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  )
}


