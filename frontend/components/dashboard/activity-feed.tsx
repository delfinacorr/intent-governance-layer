"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Plus, CheckCircle2, Lock, AlertCircle } from "lucide-react"

type EventType = "created" | "approved" | "locked" | "warning"

interface ActivityEvent {
  id: string
  type: EventType
  message: string
  timestamp: string
}

const events: ActivityEvent[] = [
  {
    id: "evt-006",
    type: "created",
    message: "New Intent created by Agent-003: itn-006 (50.0 XLM)",
    timestamp: "2 min ago",
  },
  {
    id: "evt-005",
    type: "approved",
    message: "Intent itn-005 approved and released to GPT-4o Agent",
    timestamp: "5 min ago",
  },
  {
    id: "evt-004",
    type: "locked",
    message: "Resources locked for itn-003: 50.0 XLM (Gemini Agent)",
    timestamp: "12 min ago",
  },
  {
    id: "evt-003",
    type: "warning",
    message: "Verification pending for itn-004 - awaiting oracle response",
    timestamp: "15 min ago",
  },
  {
    id: "evt-002",
    type: "approved",
    message: "Intent itn-002 approved and released to Claude-3 Agent",
    timestamp: "23 min ago",
  },
  {
    id: "evt-001",
    type: "created",
    message: "New Intent created by GPT-4o Agent: itn-001 (10.0 XLM)",
    timestamp: "1 hour ago",
  },
]

function EventIcon({ type }: { type: EventType }) {
  const icons: Record<EventType, { icon: typeof Plus; className: string }> = {
    created: { icon: Plus, className: "text-primary" },
    approved: { icon: CheckCircle2, className: "text-accent" },
    locked: { icon: Lock, className: "text-amber-500" },
    warning: { icon: AlertCircle, className: "text-muted-foreground" },
  }

  const { icon: Icon, className } = icons[type]
  return <Icon className={`h-4 w-4 ${className}`} />
}

export function ActivityFeed() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="border-b border-border">
        <div className="flex items-center gap-3">
          <Activity className="h-4 w-4 text-primary" />
          <CardTitle className="text-base font-semibold">
            Activity Feed
          </CardTitle>
          <span className="rounded bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
            Live
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-3 px-6 py-3 transition-colors hover:bg-secondary/30"
            >
              <div className="mt-0.5">
                <EventIcon type={event.type} />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-foreground">{event.message}</p>
                <p className="text-xs text-muted-foreground">
                  {event.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
