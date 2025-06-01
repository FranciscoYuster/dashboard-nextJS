import Breadcrumbs from "@/app/ui/customers/breadcrumbs"
import CreateCustomerForm from "@/app/ui/customers/create-form"

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Create Customer",
            href: "/dashboard/customers/create",
            active: true,
          },
        ]}
      />
      <CreateCustomerForm />
    </main>
  )
}
