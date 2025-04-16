"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import ShapeAnimation from "@/components/shape-animation"

// OOP CLASSES
class Shape {
  getArea() {
    return 0
  }
  getPerimeter() {
    return 0
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }
  getArea() {
    return Math.PI * this.radius * this.radius
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super()
    this.length = length
    this.width = width
  }
  getArea() {
    return this.length * this.width
  }
  getPerimeter() {
    return 2 * (this.length + this.width)
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }
}

class Triangle extends Shape {
  constructor(base, height, sideA, sideB, sideC) {
    super()
    this.base = base
    this.height = height
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  getArea() {
    return 0.5 * this.base * this.height
  }
  getPerimeter() {
    return this.sideA + this.sideB + this.sideC
  }
}

const shapeOptions = ["Circle", "Rectangle", "Square", "Triangle"]

export default function Home() {
  const [shape, setShape] = useState("Circle")
  const [dimensions, setDimensions] = useState({})
  const [result, setResult] = useState({ area: null, perimeter: null })
  const [animationKey, setAnimationKey] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: Number.parseFloat(e.target.value) })
  }

  const handleSelectChange = (value) => {
    setShape(value)
    setDimensions({}) // Clear all dimensions
    setResult({ area: null, perimeter: null }) // Reset results
    setAnimationKey((prev) => prev + 1) // Reset animation
  }

  const handleInputChange = (name, value) => {
    setDimensions({ ...dimensions, [name]: Number.parseFloat(value) })
  }

  const calculate = () => {
    let shapeObj
    switch (shape) {
      case "Circle":
        shapeObj = new Circle(dimensions.radius)
        break
      case "Rectangle":
        shapeObj = new Rectangle(dimensions.length, dimensions.width)
        break
      case "Square":
        shapeObj = new Square(dimensions.side)
        break
      case "Triangle":
        shapeObj = new Triangle(
          dimensions.base,
          dimensions.height,
          dimensions.sideA,
          dimensions.sideB,
          dimensions.sideC,
        )
        break
      default:
        return
    }
    const area = shapeObj.getArea()
    const perimeter = shapeObj.getPerimeter()
    setResult({ area, perimeter })
  }

  const renderInputs = () => {
    switch (shape) {
      case "Circle":
        return (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="radius">Radius</Label>
              <Input
                id="radius"
                name="radius"
                type="number"
                step="0.01"
                value={dimensions.radius || ""}
                onChange={(e) => handleInputChange("radius", e.target.value)}
                placeholder="Enter radius"
              />
            </div>
          </div>
        )
      case "Rectangle":
        return (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="length">Length</Label>
              <Input
                id="length"
                name="length"
                type="number"
                step="0.01"
                value={dimensions.length || ""}
                onChange={(e) => handleInputChange("length", e.target.value)}
                placeholder="Enter length"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                name="width"
                type="number"
                step="0.01"
                value={dimensions.width || ""}
                onChange={(e) => handleInputChange("width", e.target.value)}
                placeholder="Enter width"
              />
            </div>
          </div>
        )
      case "Square":
        return (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="side">Side</Label>
              <Input
                id="side"
                name="side"
                type="number"
                step="0.01"
                value={dimensions.side || ""}
                onChange={(e) => handleInputChange("side", e.target.value)}
                placeholder="Enter side length"
              />
            </div>
          </div>
        )
      case "Triangle":
        return (
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="base">Base</Label>
              <Input
                id="base"
                name="base"
                type="number"
                step="0.01"
                value={dimensions.base || ""}
                onChange={(e) => handleInputChange("base", e.target.value)}
                placeholder="Enter base"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                name="height"
                type="number"
                step="0.01"
                value={dimensions.height || ""}
                onChange={(e) => handleInputChange("height", e.target.value)}
                placeholder="Enter height"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sideA">Side A</Label>
              <Input
                id="sideA"
                name="sideA"
                type="number"
                step="0.01"
                value={dimensions.sideA || ""}
                onChange={(e) => handleInputChange("sideA", e.target.value)}
                placeholder="Enter side A"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sideB">Side B</Label>
              <Input
                id="sideB"
                name="sideB"
                type="number"
                step="0.01"
                value={dimensions.sideB || ""}
                onChange={(e) => handleInputChange("sideB", e.target.value)}
                placeholder="Enter side B"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sideC">Side C</Label>
              <Input
                id="sideC"
                name="sideC"
                type="number"
                step="0.01"
                value={dimensions.sideC || ""}
                onChange={(e) => handleInputChange("sideC", e.target.value)}
                placeholder="Enter side C"
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Shape Calculator
          </h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Select Shape</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Select value={shape} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a shape" />
                  </SelectTrigger>
                  <SelectContent>
                    {shapeOptions.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 flex items-center justify-center">
                  <ShapeAnimation key={animationKey} shape={shape} dimensions={dimensions} />
                </div>
              </div>

              {renderInputs()}

              <Button
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={calculate}
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              {result.area !== null ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground mb-2">Area</p>
                    <p className="text-3xl font-bold">{result.area.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-1">square units</p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground mb-2">Perimeter</p>
                    <p className="text-3xl font-bold">{result.perimeter.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-1">units</p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground mb-2">Shape</p>
                    <p className="text-xl font-semibold">{shape}</p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {Object.entries(dimensions).map(([key, value]) => (
                        <p key={key} className="capitalize">
                          {key}: {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center text-muted-foreground">
                  <p className="mb-2">Enter dimensions and calculate to see results</p>
                  <p className="text-sm">Results will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

