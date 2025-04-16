"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ShapeAnimationProps {
  shape: string
  dimensions: Record<string, number>
}

export default function ShapeAnimation({ shape, dimensions }: ShapeAnimationProps) {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set default sizes for animation
    switch (shape) {
      case "Circle":
        setSize({ width: 120, height: 120 })
        break
      case "Rectangle":
        setSize({ width: 140, height: 100 })
        break
      case "Square":
        setSize({ width: 120, height: 120 })
        break
      case "Triangle":
        setSize({ width: 120, height: 120 })
        break
      default:
        setSize({ width: 100, height: 100 })
    }

    // Update sizes based on dimensions if available
    if (Object.keys(dimensions).length > 0) {
      if (shape === "Circle" && dimensions.radius) {
        const diameter = Math.min(dimensions.radius * 2, 180)
        setSize({ width: diameter, height: diameter })
      } else if (shape === "Rectangle" && dimensions.length && dimensions.width) {
        const ratio = dimensions.length / dimensions.width
        const maxSize = 180
        let width = Math.min(dimensions.length * 10, maxSize)
        let height = width / ratio

        if (height > maxSize) {
          height = maxSize
          width = height * ratio
        }

        setSize({ width, height })
      } else if (shape === "Square" && dimensions.side) {
        const sideLength = Math.min(dimensions.side * 20, 180)
        setSize({ width: sideLength, height: sideLength })
      }
      // Triangle dimensions are more complex, we'll use default animation
    }
  }, [shape, dimensions])

  const renderShape = () => {
    switch (shape) {
      case "Circle":
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.5,
              rotate: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" },
            }}
            style={{
              width: size.width,
              height: size.height,
              borderRadius: "50%",
            }}
            className="bg-gradient-to-br from-purple-500 to-pink-500"
          />
        )
      case "Rectangle":
        return (
          <motion.div
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{
              scaleX: 1,
              scaleY: 1,
              rotateY: [0, 180, 0],
            }}
            transition={{
              duration: 1.5,
              rotateY: { repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" },
            }}
            style={{
              width: size.width,
              height: size.height,
            }}
            className="bg-gradient-to-br from-cyan-500 to-blue-500"
          />
        )
      case "Square":
        return (
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: 1,
            }}
            transition={{
              duration: 2,
              rotate: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" },
            }}
            style={{
              width: size.width,
              height: size.height,
            }}
            className="bg-gradient-to-br from-green-500 to-emerald-500"
          />
        )
      case "Triangle":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 1.5,
              rotateZ: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" },
            }}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size.width / 2}px solid transparent`,
              borderRight: `${size.width / 2}px solid transparent`,
              borderBottom: `${size.height}px solid`,
            }}
            className="border-b-amber-500"
          />
        )
      default:
        return null
    }
  }

  return <div className="flex items-center justify-center">{renderShape()}</div>
}
