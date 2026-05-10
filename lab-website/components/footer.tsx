export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Jain Lab | University of Florida
        </p>
      </div>
    </footer>
  )
}
