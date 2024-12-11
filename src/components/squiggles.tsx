import { PropsWithChildren, HTMLAttributes, useEffect, useRef } from 'react'
import p5 from 'p5'
import _ from 'lodash'

type SquigglesProps = {
  squiggleColor?: string
  squiggleWidth?: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>


export default function Squiggles(props: SquigglesProps) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sketch = new p5((p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
      }

      p.draw = () => {
        p.stroke(255)
        p.strokeWeight(4)

        const steps = 100
        const points = Array.from({ length: steps }, (_, i) => {
          const x = (i * 1) / steps
          const y = Math.sin(x * 2 * Math.PI * 4) * 30 + 20
          return p.createVector(x, y)
        })

        points.slice(1).reduce((prev, curr) => {
          if (prev && curr) {
            p.line(
              p.width * prev.x,
              (p.height * prev.y) / 400,
              p.width * curr.x,
              (p.height * curr.y) / 400
            )
          }
          return curr
        }, points[0])
      }
    }, container.current as HTMLElement)

    return () => sketch.remove()
  }, [container])

  return <div ref={container} {...props}></div>
}
