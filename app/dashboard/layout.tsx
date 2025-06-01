import type React from "react"
import SideNav from "../ui/dashboard/sidenav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto md:p-6 lg:p-12">{children}</div>
    </div>
  )
}
