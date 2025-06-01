import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from "@heroicons/react/24/outline"
import { lusitana } from "../fonts/fonts"
import { fetchCardData } from "@/app/lib/data-mock"

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
}

export default async function CardWrapper() {
  const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData()
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={numberOfCustomers} type="customers" />
    </>
  )
}

export function Card({
  title,
  value,
  type,
}: {
  title: string
  value: number | string
  type: "invoices" | "customers" | "pending" | "collected"
}) {
  const Icon = iconMap[type]

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-3 md:p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium truncate">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-3 py-6 md:px-4 md:py-8 text-center text-xl md:text-2xl`}
      >
        {value}
      </p>
    </div>
  )
}
