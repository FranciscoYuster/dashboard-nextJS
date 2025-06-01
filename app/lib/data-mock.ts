import { revenue, latestInvoices, cardData, invoices, customers } from "./placeholder-data"
import type {
  Revenue,
  LatestInvoice,
  InvoicesTable,
  CustomerField,
  InvoiceForm,
  FormattedCustomersTable,
} from "./definitions"

export async function fetchRevenue(): Promise<Revenue[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return revenue
}

export async function fetchLatestInvoices(): Promise<LatestInvoice[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return latestInvoices
}

export async function fetchCardData() {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return cardData
}

export async function fetchFilteredInvoices(query: string, currentPage: number): Promise<InvoicesTable[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const ITEMS_PER_PAGE = 6
  const offset = (currentPage - 1) * ITEMS_PER_PAGE

  let filteredInvoices = invoices

  if (query) {
    filteredInvoices = invoices.filter(
      (invoice) =>
        invoice.name.toLowerCase().includes(query.toLowerCase()) ||
        invoice.email.toLowerCase().includes(query.toLowerCase()) ||
        invoice.status.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return filteredInvoices.slice(offset, offset + ITEMS_PER_PAGE)
}

export async function fetchInvoicesPages(query: string): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const ITEMS_PER_PAGE = 6
  let filteredInvoices = invoices

  if (query) {
    filteredInvoices = invoices.filter(
      (invoice) =>
        invoice.name.toLowerCase().includes(query.toLowerCase()) ||
        invoice.email.toLowerCase().includes(query.toLowerCase()) ||
        invoice.status.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE)
}

export async function fetchInvoiceById(id: string): Promise<InvoiceForm | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const invoice = invoices.find((inv) => inv.id === id)
  if (!invoice) return undefined

  return {
    id: invoice.id,
    customer_id: invoice.customer_id,
    amount: invoice.amount / 100, // Convert from cents to dollars
    status: invoice.status,
  }
}

export async function fetchCustomers(): Promise<CustomerField[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return customers
}

export async function fetchFilteredCustomers(query: string): Promise<FormattedCustomersTable[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const customersData = [
    {
      id: "2",
      name: "Delba de Oliveira",
      email: "delba@oliveira.com",
      image_url: "/customers/delba-de-oliveira.png",
      total_invoices: 1,
      total_pending: "$0.00",
      total_paid: "$3,040.00",
    },
    {
      id: "3",
      name: "Lee Robinson",
      email: "lee@robinson.com",
      image_url: "/customers/lee-robinson.png",
      total_invoices: 1,
      total_pending: "$0.00",
      total_paid: "$44,800.00",
    },
    {
      id: "4",
      name: "Michael Novotny",
      email: "michael@novotny.com",
      image_url: "/customers/michael-novotny.png",
      total_invoices: 1,
      total_pending: "$0.00",
      total_paid: "$34,577.00",
    },
    {
      id: "5",
      name: "Amy Burns",
      email: "amy@burns.com",
      image_url: "/customers/amy-burns.png",
      total_invoices: 1,
      total_pending: "$0.00",
      total_paid: "$25,350.00",
    },
  ]

  if (query) {
    return customersData.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query.toLowerCase()) ||
        customer.email.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return customersData
}
