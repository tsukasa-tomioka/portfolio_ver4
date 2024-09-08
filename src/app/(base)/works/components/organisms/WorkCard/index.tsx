'use client'

import Image from "next/image"
import styles from "./_index.module.scss"
import Heading from "@/components/atoms/Heading"
import { zenOldMincho_w400 } from "@/lib/fonts"
import { useState } from "react"
import Typing from "@/components/atoms/Typing"

type Props = {
  work: Newt.ContentsWork
}

export default function WorkCard({
  work
}: Props ) {
  const [state, setState] = useState(false)
  if (work["display-type"] !== 'modal') return 
  const mouseEnterHander = () => {
    setState(true)
  }
  return <>
    <div className={styles.root} onMouseEnter={mouseEnterHander}>
      <div className={styles.thumbnail}>
        <Image 
          src={work.thumbnail.src}
          alt=''
          width={work.thumbnail.width}
          height={work.thumbnail.height}
          className={styles.image}
        />
      </div>
      <div className={styles.heading}>
        <Heading tag={'h3'} size={'small'}>
          {work.title}
        </Heading>
        <div className={`${styles.headingSlug} ${zenOldMincho_w400.className}`}>
          <Typing 
            text={work.slug.split('-').join(' ').toUpperCase()} 
            speed={1} 
            trigger={state} 
            endCallback={() => {
              setState(false)
            }}
          />
        </div>
      </div>
      <div className={styles.tags}>
        {work.tags && work.tags.split('\n').join(', ')}
      </div>
    </div>
  </>
}
