import React from 'react'
import Card from './Card'
import { useState , useRef} from 'react'

function Foreground() {
  const ref = useRef(null);
   const data = [
    {
      desc: "Lorem Ipsum dolor sit amet consectetur adispisicing",
      filesize:"9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Lorem Ipsum dolor sit amet consectetur adispisicing",
      filesize:"9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "Lorem Ipsum dolor sit amet consectetur adispisicing",
      filesize:"9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
   ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
     {data.map((item, index) =>(
      <Card data={item} reference={ref} />
     ))}
    </div>
  )
}

export default Foreground