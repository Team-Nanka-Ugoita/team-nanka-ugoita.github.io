import type { ReactNode } from 'react'
import type { TagProps } from './Tag'

import Tag from './Tag';

export type Work = {
  id: string
  title: string
  description: ReactNode
  link: string,
  imageSrc: string
  imageAlt: string
  tag: TagProps[]
}

function WorkCard({ work }: { work: Work }) {
  return (
    <a href={work.link} className="flex w-[min(20rem,calc(100vw-4rem))] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white transition hover:bg-slate-100">
      <img className="w-full h-auto aspect-video object-cover" src={work.imageSrc} alt={work.imageAlt} />
      <div className="flex flex-col gap-1 p-4">
        <h5 className="text-lg font-bold text-slate-950 sm:text-xl">{work.title}</h5>
        <p className="text-sm leading-[1.7] text-slate-800 sm:text-base">{work.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {work.tag.map((tag) => 
            <Tag key={tag.text} tag={tag} />
          )}
        </div>
      </div>
    </a>
  )
}

export default WorkCard;
