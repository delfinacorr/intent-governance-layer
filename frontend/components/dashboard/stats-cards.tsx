"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Lock, CheckCircle2 } from "lucide-react"

const stats = [
  {
    title: "Active Intents",
    value: "5",
    subtitle: "Active",
    icon: Layers,
    iconColor: "text-primary",
    trend: "+2 from last hour",
  },
  {
    title: "Locked Resources",
    value: "250.0",
    subtitle: "XLM",
    icon: Lock,
    iconColor: "text-amber-500",
    trend: "Across 5 intents",
  },
  {
    title: "Settled Transactions",
    value: "18",
    subtitle: "Completed",
    icon: CheckCircle2,
    iconColor: "text-accent",
    trend: "+3 today",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-border bg-card transition-colors hover:border-primary/30"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {stat.subtitle}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
