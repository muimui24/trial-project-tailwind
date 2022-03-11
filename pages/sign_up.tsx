import React from 'react'
import type { NextPage } from 'next'
import { useState } from 'react'

interface user {
  users: {
    id: string
    fullName: string
    email: string
    password: string
    category: string
    parentId: string
  }[]
}

interface FormData {
  id: string
  fullName: string
  email: string
  password: string
  category: string
  parentId: string
}

const signUp: NextPage = () => {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    category: '',
    parentId: '',
    id: '',
  })

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/signup', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then(() => {
        setForm({
          fullName: '',
          email: '',
          password: '',
          category: '',
          parentId: '',
          id: '',
        })
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
          placeholder="fullName"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <input
          type="email"
          placeholder="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
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
          placeholder="parentId"
          value={form.parentId}
          onChange={(e) => setForm({ ...form, parentId: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />

        <button type="submit" className="rounded bg-blue-500 p-1 text-white">
          Add+
        </button>
      </form>
    </div>
  )
}
export default signUp
