import { Card } from "@/components/ui/Card"

export default function Dashboard() {
  return (
    <div className="space-y-6 text-gray-400">
      <h1 className="text-3xl font-bold text-black">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Users">
          <p className="text-4xl font-bold">1,234</p>
        </Card>
        <Card title="Revenue">
          <p className="text-4xl font-bold">$5,678</p>
        </Card>
        <Card title="Active Projects">
          <p className="text-4xl font-bold">42</p>
        </Card>
      </div>
    </div>
  )
}

