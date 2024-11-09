"use client"

import React from "react"
import Typed from "typed.js"

export default function Slogan() {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["We Learn.", "We Collaborate.", "We Discover."],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={el} />
}
