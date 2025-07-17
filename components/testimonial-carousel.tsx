"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    business: "Loja de Roupas",
    content:
      "Jhonatan transformou completamente minha forma de vender pelo WhatsApp. Minhas vendas aumentaram 250% em apenas 2 meses!",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    business: "Restaurante",
    content:
      "Profissional excepcional! Me ensinou estratégias que eu nunca imaginei que existissem. Recomendo para todos os empreendedores.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Costa",
    business: "Consultoria",
    content:
      "Investimento que mais deu retorno no meu negócio. Jhonatan é um verdadeiro especialista em vendas pelo WhatsApp.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    business: "E-commerce",
    content: "Em 3 meses, meu faturamento triplicou! As estratégias do Jhonatan são simplesmente revolucionárias.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-green-100">
        <CardContent className="p-0">
          <div className="flex items-center justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="text-xl text-gray-700 text-center mb-8 leading-relaxed">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="flex items-center justify-center">
            <Image
              src={testimonials[currentIndex].avatar || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div className="text-center">
              <div className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</div>
              <div className="text-green-600 font-medium">{testimonials[currentIndex].business}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
        onClick={goToNext}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
