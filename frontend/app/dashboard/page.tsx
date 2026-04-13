import { DashboardSidebar } from "../../components/dashboard/sidebar"
import { DashboardHeader } from "../../components/dashboard/header"
import { StatsCards } from "../../components/dashboard/stats-cards"
import { OrchestrationTable } from "../../components/dashboard/orchestration-table"
import { ActivityFeed } from "../../components/dashboard/activity-feed"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="ml-16 min-h-screen">
        <DashboardHeader />

        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Stats Row */}
            <StatsCards />

            {/* Orchestration Table */}
            <OrchestrationTable />

            {/* Activity Feed */}
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  )
}
