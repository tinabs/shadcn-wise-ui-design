import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpCircle, PlusCircle, ChevronDown } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "1.00", flag: "/assets/flag-eur.png" },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", flag: "/assets/flag-aud.png" },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", flag: "/assets/flag-cad.png" },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", flag: "/assets/flag-gbp.png" },
]

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUpCircle, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", icon: PlusCircle, name: "To EUR", subtitle: "Added - 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", icon: ArrowUpCircle, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[976px] flex-1 flex-col gap-8 overflow-y-auto px-6 pb-6 pt-[56px] min-h-0">
      {/* Total balance + actions */}
      <section className="space-y-4">
        <div className="space-y-0">
          <p className="text-sm font-medium text-muted-foreground">Total balance</p>
          <h2 className="text-3xl font-bold tracking-tight">1.00 EUR</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Send money
          </Button>
          <Button size="sm" variant="secondary">
            Add money
          </Button>
          <Button size="sm" variant="secondary">
            Request money
          </Button>
        </div>
      </section>

      {/* Currency account cards */}
      <section className="flex gap-[12px] overflow-x-auto pb-2">
        {CURRENCY_ACCOUNTS.map((account) => (
          <Card
            key={account.code}
            className="bg-card h-[206px] w-64 shrink-0 justify-between"
          >
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <Image
                src={account.flag}
                alt={`${account.label} flag`}
                width={48}
                height={48}
                className="rounded-full"
              />
              <CardTitle className="text-base font-semibold text-start">{account.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Image src="/assets/bank.svg" alt="" width={16} height={16} className="opacity-60" />
                <span>···{account.accountId.slice(-5)}</span>
              </p>
              <p className="text-2xl font-semibold">{account.balance}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Recent transactions */}
      <section className="mt-[24px] space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Link
            href="/"
            className="text-sm font-medium text-green-700 underline-offset-4 hover:underline"
          >
            See all
          </Link>
        </div>
        <ul className="rounded-lg">
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex items-center gap-4 px-4 py-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <tx.icon className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
                {tx.subAmount && (
                  <p className="text-xs text-muted-foreground">{tx.subAmount}</p>
                )}
              </div>
              <p className={`shrink-0 text-right font-medium ${tx.isCredit ? "text-green-700" : ""}`}>
                {tx.amount}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer 
      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer> */}
    </div>
  )
}
