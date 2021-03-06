import React from 'react'
import type { NextPage } from 'next'
import { useState } from 'react'

interface Book {
  books: {
    id: string
    title: string
    author: string
    category: string
    code: string
  }[]
}

interface FormData {
  title: string
  author: string
  category: string
  code: string
  id: string
}

const Home: NextPage = () => {
  const [form, setForm] = useState<FormData>({
    title: '',
    author: '',
    category: '',
    code: '',
    id: '',
  })

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then(() => {
        setForm({ title: '', author: '', category: '', code: '', id: '' })
      })
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (data: FormData) => {
    try {
      create(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="mt-4 text-center text-2xl font-bold">Add Book</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(form)
        }}
        className="mx-auto flex w-auto min-w-[25%] max-w-min flex-col items-stretch space-y-6"
      >
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <input
          type="text"
          placeholder="Code"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />

        <button type="submit" className="rounded bg-blue-500 p-1 text-white">
          Add+
        </button>
      </form>
    </div>
  )
}
export default Home
