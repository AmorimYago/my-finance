import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/authOptions"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="text-center space-y-4">
          <p className="opacity-80">Você precisa estar logado.</p>
          <Link href="/login" className="underline">Ir para login</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="opacity-80 mt-2">Logado como {session.user?.email}</p>
    </main>
  )
}
