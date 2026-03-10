export type Service = {
  id: string
  icon: string
  title: string
  description: string
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  location: string
}

export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  image: string
  author: string
}
