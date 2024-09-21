"use client"

import { useRouter } from "next/navigation"

const LanguageSwitcher = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter()

  const changeLocale = (newLocale: string) => {
    if (currentLocale !== newLocale) {
      router.push(`/${newLocale}`) // Navigate to the new locale URL
    }
  }

  return (
    <div className="flex space-x-2">
      <button
        className={`p-2 rounded ${
          currentLocale === "en"
            ? "bg-gray-200 cursor-default"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
        onClick={() => changeLocale("en")}
        disabled={currentLocale === "en"}
      >
        EN
      </button>
      <button
        className={`p-2 rounded ${
          currentLocale === "de"
            ? "bg-gray-200 cursor-default"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
        onClick={() => changeLocale("de")}
        disabled={currentLocale === "de"}
      >
        DE
      </button>
    </div>
  )
}

export default LanguageSwitcher
