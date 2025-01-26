import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      <Card title="User Preferences" className="p-6">
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications" className="text-base">
                  Email Notifications
                </Label>
                <p className="text-sm text-gray-500">Receive email notifications </p>
              </div>
              <Switch id="email-notifications" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="language" className="text-base">
              Language
            </Label>
            <select id="language" className="w-full p-2 border rounded-md bg-white">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-base">
              Theme
            </Label>
            <select id="theme" className="w-full p-2 border rounded-md bg-white">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </Card>
    </div>
  )
}

