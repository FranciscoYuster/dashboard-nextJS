import { Suspense } from "react"
import Search from "@/app/ui/search"
import CustomersTable from "@/app/ui/customers/table"
import { InvoicesTableSkeleton } from "@/app/ui/skeletons"
import { lusitana } from "@/app/ui/fonts/fonts"
import { CreateCustomer } from "@/app/ui/customers/buttons"

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ""

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  )
}
