"use client"

import { useRouter } from "next/navigation" // Import from 'next/navigation'
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Menubar } from "primereact/menubar"
import LanguageSwitcher from "./LanguageSwitcher" // Import the LanguageSwitcher
import { usePathname } from "next/navigation" // Import usePathname

export default function Navbar(): JSX.Element {
  const router = useRouter()
  const pathname = usePathname() // Get the current path
  const [currentLocale, setCurrentLocale] = useState("en") // Default to "en"

  const t = useTranslations("navbar")

  // Function to change the locale
  const changeLocale = (newLocale: string) => {
    setCurrentLocale(newLocale)
    router.push(`/${newLocale}${pathname.slice(3)}`) // Navigate to the new locale URL
  }

  useEffect(() => {
    const localeFromPath = pathname.split("/")[1] // Get the locale from the path
    if (
      localeFromPath &&
      (localeFromPath === "en" || localeFromPath === "de")
    ) {
      setCurrentLocale(localeFromPath)
    }
  }, [pathname])

  const items = [
    {
      label: t("Home"),
      command: () => router.push("/"),
    },
    {
      label: t("Get Started"),
      items: [
        {
          label: t("Sign Up Today!"),
        },
        {
          label: t("Help With Aligners, Braces and Appliances"),
          items: [
            {
              label: t("Help with Align Technology® Treatment Plans"),
            },
            {
              label: t(
                "Help Setting up Invisalign® Clinical Preferences and Personalized Plan"
              ),
            },
            {
              label: t("Help with ClearCorrect®"),
            },
            {
              label: t("Help with Pediatric Expansion Cases"),
            },
            {
              label: t("Help with Other Aligner Systems and Braces"),
            },
            {
              label: t(
                "Beyond Straight Teeth – Orthodontics and Total Body Wellness"
              ),
            },
            {
              label: t("White Papers and Literature"),
            },
          ],
        },
        {
          label: t("FAQ"),
        },
        {
          label: t("Setting Up Your Secure Mail and Sending your First Case"),
        },
      ],
    },
    {
      label: t("Services"),
      items: [
        {
          label: t("VIP Service – $2,999-$9,999 per month"),
        },
        {
          label: t("Concierge Service- $1,499 per month"),
        },
        {
          label: t(
            "Premium Service – $899 per month- Limit of 10 cases per month"
          ),
        },
        {
          label: t(
            "A-La-Carte Single Case Review- $449 per case- Zoom Meeting up to 20 Minutes"
          ),
        },
        {
          label: t("Dental Industry Consulting- $900 – $2000 per hour"),
        },
        {
          label: t("Virtual and In-Person Invisalign Day Support"),
        },
        {
          label: t("Hiring Dr Nikolaos for your Webinar, Study Club or Event"),
        },
        {
          label: t("Social Media Content for Dentists"),
        },
        {
          label: t("Terms of Service"),
        },
      ],
    },
    {
      label: t("Classes"),
    },
    {
      label: t("About Us"),
      items: [
        {
          label: t("Meet Dr Nikolaos"),
        },
        {
          label: t("Meet The Team"),
        },
        {
          label: t("Testimonials"),
        },
        {
          label: t("Read Our Blog"),
        },
        {
          label: t("Archives | Press | Webinars | Podcasts"),
        },
        {
          label: t("Find Us Online"),
        },
        {
          label: t("Strategic Partners and Collaboration"),
        },
        {
          label: t("Join Our Team"),
        },
        {
          label: t("Leave a Review"),
        },
      ],
    },
    {
      label: t("Contact Us"),
    },
  ]

  const endTemplate = () => (
    <div className="flex flex-col items-end w-full">
      <LanguageSwitcher currentLocale={currentLocale} />
      {/* Language switcher within Menubar */}
    </div>
  )

  return (
    <div className="card fixed top-0 left-0 right-0 z-50 w-full">
      <Menubar
        model={items}
        end={endTemplate}
        className="rounded-none w-full text-sm"
      />
    </div>
  )
}
