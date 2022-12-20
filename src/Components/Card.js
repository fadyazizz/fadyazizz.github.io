import React, { useState, useLayoutEffect, useRef } from 'react'
import '../css/card.css'

export default function Card(props) {
  const [show, doShow] = useState({ itemOne: 'false' })
  const card = useRef(null)

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top
    const bottomPos = (element) => element.getBoundingClientRect().bottom
    const div1Pos = topPos(card.current)

    const div1BottomPos = bottomPos(card.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight

      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: 'true' }))
      }
      if (div1Pos > scrollPos) {
        doShow((state) => ({ ...state, itemOne: 'false' }))
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <React.Fragment>
      <div className='mainCard' ref={card} animation={show.itemOne}>
        <img className='intellectImage' src={props.i}></img>
        <div className='text'>
          {props.text.map((tex) => {
            return (
              <span
                style={{
                  display: 'block',
                  marginLeft: props.margin ? props.margin : '10%',
                }}
              >
                {tex}
              </span>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
