import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { fetchPosts } from '../api/postsApi'

export default function APIPage() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const perPage = 10

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetchPosts()
      .then(data => {
        if (!cancelled) setPosts(data)
      })
      .catch(err => {
        if (!cancelled) setError(err.message || 'Failed to fetch')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [])

  const filtered = posts.filter(p => p.title.includes(query) || p.body.includes(query))
  const total = Math.ceil(filtered.length / perPage)
  const slice = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Posts</h2>

        <div className="flex gap-2 mb-4">
          <input
            value={query}
            onChange={e => { setQuery(e.target.value); setPage(1) }}
            placeholder="Search posts"
            className="flex-1 px-3 py-2 border rounded"
          />
        </div>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600">Error: {error}</div>}

        <ul className="space-y-3">
          {slice.map(p => (
            <li key={p.id} className="p-3 border rounded hover:shadow">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-4">
          <div>Page {page} / {total || 1}</div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
            <Button variant="primary" onClick={() => setPage(p => Math.min(total || 1, p + 1))} disabled={page === total || total === 0}>Next</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
