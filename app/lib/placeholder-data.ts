// Mock data for the dashboard
export const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
]

export const latestInvoices = [
  {
    id: "2",
    name: "Delba de Oliveira",
    image_url: "/customers/delba-de-oliveira.png",
    email: "delba@oliveira.com",
    amount: "$3,040.00",
  },
  {
    id: "3",
    name: "Lee Robinson",
    image_url: "/customers/lee-robinson.png",
    email: "lee@robinson.com",
    amount: "$44,800.00",
  },
  {
    id: "4",
    name: "Michael Novotny",
    image_url: "/customers/michael-novotny.png",
    email: "michael@novotny.com",
    amount: "$34,577.00",
  },
  {
    id: "5",
    name: "Amy Burns",
    image_url: "/customers/amy-burns.png",
    email: "amy@burns.com",
    amount: "$25,350.00",
  },
]

export const cardData = {
  numberOfInvoices: 4,
  numberOfCustomers: 4,
  totalPaidInvoices: "$82,417.00",
  totalPendingInvoices: "$25,350.00",
}

export const invoices = [
  {
    id: "2",
    customer_id: "2",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
    date: "2023-11-14",
    amount: 304000,
    status: "paid" as const,
  },
  {
    id: "3",
    customer_id: "3",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
    date: "2023-10-29",
    amount: 4480000,
    status: "paid" as const,
  },
  {
    id: "4",
    customer_id: "4",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
    date: "2023-09-10",
    amount: 3457700,
    status: "paid" as const,
  },
  {
    id: "5",
    customer_id: "5",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
    date: "2023-08-05",
    amount: 2535000,
    status: "pending" as const,
  },
]

export const customers = [
  { id: "2", name: "Delba de Oliveira" },
  { id: "3", name: "Lee Robinson" },
  { id: "4", name: "Michael Novotny" },
  { id: "5", name: "Amy Burns" },
]
