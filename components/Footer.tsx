'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-midnight-950 border-t border-midnight-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center">
          <div className="text-midnight-400 text-sm text-center">
            © {currentYear} Alvara Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 