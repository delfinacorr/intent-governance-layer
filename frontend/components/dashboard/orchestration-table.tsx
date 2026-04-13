"use client"
import { useEffect, useState } from "react"
// ... tus otros imports (Card, Table, Badge, etc.)

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Badge } from "../ui/badge"

export function OrchestrationTable() {
  const [intents, setIntents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/intents")
        const data = await response.json()
        // Convertimos el objeto de intents en un array para mapearlo
        setIntents(Object.values(data))
      } catch (error) {
        console.error("Error fetching intents:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Cargando orquestación...</p>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {intents.map((intent: any) => (
          <TableRow key={intent.id}>
            <TableCell className="font-mono text-xs">{intent.id.slice(0, 8)}</TableCell>
            <TableCell>{intent.action}</TableCell>
            <TableCell>
              <Badge variant={intent.status === "completed" ? "default" : "outline"}>
  {intent.status}
</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground text-xs">
              {JSON.stringify(intent.data).slice(0, 50)}...
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}