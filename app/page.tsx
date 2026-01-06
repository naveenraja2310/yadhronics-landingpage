"use client"
import React, { useState, useEffect } from "react"
import {
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  Zap,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react"
const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const eventPhotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      caption: "Arduino Workshop 2024",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      caption: "IoT Training Session",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      caption: "Team Building Event",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
      caption: "Student Projects Showcase",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      caption: "Hands-on Training",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Embedded Systems Engineer",
      company: "Tech Solutions Ltd",
      image:
        "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3b82f6&color=fff",
      rating: 5,
      text: "The IoT course at Yadhronics completely transformed my career. The hands-on approach and real-world projects gave me the confidence to land my dream job.",
    },
    {
      name: "Priya Sharma",
      role: "Automation Test Engineer",
      company: "Global Software Inc",
      image:
        "https://ui-avatars.com/api/?name=Priya+Sharma&background=10b981&color=fff",
      rating: 5,
      text: "Best investment in my professional development! The Selenium with Java course was comprehensive and the instructors were incredibly supportive.",
    },
    {
      name: "Arun Venkat",
      role: "Arduino Developer",
      company: "Innovation Labs",
      image:
        "https://ui-avatars.com/api/?name=Arun+Venkat&background=8b5cf6&color=fff",
      rating: 5,
      text: "From zero knowledge to building my own projects in weeks! Yadhronics made learning Arduino programming fun and practical.",
    },
  ]

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % eventPhotos.length)
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + eventPhotos.length) % eventPhotos.length
    )

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black-900 via-black to-black-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-gray-400 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
            <Lightbulb className="w-12 sm:w-16 h-12 sm:h-16 mb-4 sm:mb-0 sm:mr-4 drop-shadow-lg" />
            <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
              Yadhronics
            </h1>
          </div>
          <p className="text-lg sm:text-2xl mb-2">
            Your Gateway to Mastering Tomorrow's Skills
          </p>
          <p className="text-base sm:text-xl mb-6 opacity-90">
            Where Innovation Meets Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/8681847551?text=${encodeURIComponent(
            "Hey 👋 Yadhronics Support!"
        )}`}>
              <button className="bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-black-200 transition-colors shadow-lg hover:shadow-xl">
                Explore Courses
              </button>
            </a>
            <a href={`https://wa.me/8681847551?text=${encodeURIComponent(
            "Hey 👋 Yadhronics Support!"
        )}`}>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors shadow-lg hover:shadow-xl">
                Shop Electronics
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Who We Are */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Who We Are
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2024 by <strong>Yogeshwaran</strong>, a visionary
                educator and entrepreneur, Yadhronics is a premier training
                institute driven by a team of certified electronics and computer
                engineers with extensive experience in multinational
                corporations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We specialize in cutting-edge technical training that bridges
                the gap between academic theory and industry practice. Our
                courses in Arduino programming, IoT & Embedded Systems, and
                Automation Testing prepare professionals for the demands of
                tomorrow's technology landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2024" },
                { label: "Students Trained", value: "500+" },
                { label: "Core Programs", value: "3" },
                { label: "Success Rate", value: "98%" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-100 p-5 rounded-lg text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-black mb-1">
                    {item.value}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Event Photos Carousel */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Journey in Pictures
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={eventPhotos[currentSlide].url}
                  alt={eventPhotos[currentSlide].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6">
                  <p className="text-white text-lg sm:text-xl font-semibold">
                    {eventPhotos[currentSlide].caption}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg transition-all"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
            </button>
            <div className="flex justify-center mt-4 sm:mt-6 gap-2">
              {eventPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-black w-6 sm:w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}{" "}
      <section className="py-16 px-6 bg-gray-50">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <div className="text-center mb-12">
            {" "}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Yadhronics
            </h2>{" "}
            <div className="w-20 h-1 bg-black mx-auto mb-4"></div>{" "}
            <p className="text-gray-600 max-w-2xl mx-auto">
              {" "}
              We don't just teach technology – we empower you to shape the
              future{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              {" "}
              <Users className="w-12 h-12 text-black mb-4" />{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Team
              </h3>{" "}
              <p className="text-gray-600">
                Certified engineers with extensive multinational experience
                guide your learning journey
              </p>{" "}
            </div>{" "}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              {" "}
              <BookOpen className="w-12 h-12 text-black mb-4" />{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hands-On Learning
              </h3>{" "}
              <p className="text-gray-600">
                Dynamic, practical courses that bridge theory with real-world
                application
              </p>{" "}
            </div>{" "}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              {" "}
              <Target className="w-12 h-12 text-black mb-4" />{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Industry-Focused
              </h3>{" "}
              <p className="text-gray-600">
                Curriculum designed to meet current industry demands and future
                trends
              </p>{" "}
            </div>{" "}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              {" "}
              <Zap className="w-12 h-12 text-black mb-4" />{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Future-Ready
              </h3>{" "}
              <p className="text-gray-600">
                Stay ahead of technological trends and achieve your career
                aspirations
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* How We Teach */}{" "}
      <section className="py-16 px-6 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <div className="text-center mb-12">
            {" "}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How We Teach
            </h2>{" "}
            <div className="w-20 h-1 bg-black mx-auto"></div>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-3 gap-8">
            {" "}
            <div className="text-center">
              {" "}
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <span className="text-3xl font-bold text-black">1</span>{" "}
              </div>{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Fundamentals First
              </h3>{" "}
              <p className="text-gray-600">
                Strong theoretical foundation with clear concept explanations
                and visual demonstrations
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <span className="text-3xl font-bold text-black">2</span>{" "}
              </div>{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hands-On Practice
              </h3>{" "}
              <p className="text-gray-600">
                Real projects, live coding sessions, and immediate feedback on
                your progress
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <span className="text-3xl font-bold text-black">3</span>{" "}
              </div>{" "}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Industry Application
              </h3>{" "}
              <p className="text-gray-600">
                Capstone projects that solve real industry challenges and build
                your portfolio
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <Quote className="w-8 sm:w-10 h-8 sm:h-10 text-black mb-4 opacity-50 mx-auto sm:mx-0" />
                <div className="flex justify-center sm:justify-start mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-sm sm:text-base">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-center sm:justify-start">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">{t.role}</p>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black-900 via-black to-black-900"></div>
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-32 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-32 w-80 h-80 bg-gray-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <Award className="w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl mb-8 italic opacity-90">
                "To empower individuals with cutting-edge technical skills through innovative, hands-on learning experiences that prepare them not just for today's challenges, but for tomorrow's opportunities."
            </p>
            <div className="flex gap-4 justify-center">
                <a href={`https://wa.me/8681847551?text=${encodeURIComponent(
            "Hey 👋 Yadhronics Support!"
        )}`}><button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-black-200 transition-colors shadow-lg hover:shadow-xl">
                    Start Learning Today
                </button></a>
                <a href={`https://wa.me/8681847551?text=${encodeURIComponent(
            "Hey 👋 Yadhronics Support!"
        )}`}><button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors shadow-lg hover:shadow-xl">
                    Shop Electronics
                </button></a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default LandingPage