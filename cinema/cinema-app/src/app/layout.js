import Navbar from '@/components/Navbar'; // импорт на навигационния бар
import './globals.css'; // импорт на глобалните стилове 

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className="min-h-screen bg-white text-gray-900" suppressHydrationWarning={true}>
        <Navbar />
        <main className="px-8">
          {children}
        </main>
      </body>
    </html>
  );
}