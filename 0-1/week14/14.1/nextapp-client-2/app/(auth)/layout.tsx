export default function ({ children }: {
  children: React.ReactNode
}) {
  return <div className="flex flex-col items-center justify-center">
    <p className="border-b p-4">Sign in and get 20% discount.</p> 
    
    {children}
  </div>
}