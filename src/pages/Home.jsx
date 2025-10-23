import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h2 className="text-xl font-semibold mb-2">Welcome</h2>
        <p>Welcome to the Task App. Use the navigation to go to Todos or Posts (fetched from JSONPlaceholder).</p>
      </Card>

      <Card>
        <h3 className="text-lg font-medium mb-2">Features</h3>
        <ul className="list-disc ml-5">
          <li>Reusable components</li>
          <li>Theme switcher (light/dark)</li>
          <li>LocalStorage persistence</li>
          <li>API fetching with search & pagination</li>
        </ul>
      </Card>
    </div>
  )
}
