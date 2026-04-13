"use client"

import { cn } from "../../lib/utils"
import { GitBranch, Bot, Activity, Settings, Layers } from "lucide-react"

const navItems = [
  { icon: Layers, label: "Orchestration", active: true },
  { icon: Bot, label: "Agents", active: false },
  { icon: Activity, label: "Network Status", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-16 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-border">
        <div className="flex items-center justify-center">
          <GitBranch className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-2 py-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
              item.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
            title={item.label}
          >
            <item.icon className="h-5 w-5" />
            {item.active && (
              <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r bg-primary" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="flex flex-col items-center gap-2 border-t border-border py-4">
        <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          v0.1
        </span>
      </div>
    </aside>
  )
}
