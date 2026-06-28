import clsx from 'clsx'
import type { ReactNode } from 'react'

export type TagProps = {
  icon: ReactNode
  color: string
  text: string
  textColor: string
  borderColor?: string
}

export default function Tag({
  tag
}: {
  tag: TagProps
}) {
  return (
    <span className={clsx(
      "flex pl-1.5 pr-2 py-1 border border-slate-300 rounded-md text-sm items-center gap-1"
    )}
      style={{
        backgroundColor: tag.color,
        color: tag.textColor,
        borderColor: tag.borderColor
      }}
    >
      {tag.icon}
      {tag.text}
    </span>
  )
}

