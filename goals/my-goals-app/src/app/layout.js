import Navbar from '@/components/Navbar'; // импортира компонента за навигация, който ние създадохме в src/components
import './globals.css'; // импортира глобалните стилове за всяка една страница, които ще се приложат. 

export default function RootLayout({ children }) { // основната ф-я на layout-a. 
  return ( // връща страницата
    <html lang="bg">
      <body className="min-h-screen bg-white text-gray-900" suppressHydrationWarning={true}>
        <Navbar /> {/* това е мястото на нашата навигация*/}
        <main className="px-8"> {/*"Кутия за страницата" */}
          {children} {/*Тука използваме children, защото състоянието е динамично. Тук може да бъде заредена всяка една страница от нашето приложение. Той е "рамка", в която се пъха съдържанието на конкретната страница, която потребителя е отворил. */}
        </main>
      </body>
    </html>
  );
}