import type { Metadata } from "next"
import "../globals.css"
import { Outfit } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server" // Ensure this function is correctly implemented
import { routing } from "@/i18n/routing"
import { unstable_setRequestLocale } from "next-intl/server"

// PrimeReact CSS imports
import "primereact/resources/themes/saga-blue/theme.css" // Theme (or any other theme you're using)

// Components
import Navbar from "../components/Navbar"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

// Generate static params for locales
type Locale = "en" | "de" // Add other locales if needed

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale } // Specify the locale type
}) {
  const { locale } = params
  unstable_setRequestLocale(locale)

  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <body className={outfit.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
