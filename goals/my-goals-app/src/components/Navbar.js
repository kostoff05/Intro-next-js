import Link from 'next/link'; // компонент, нужен да прави прехода между страниците мигновено, без да трябва да се презарежда цялата страница, както би било ако използваме <а>

export default function Navbar() { // основната ф-я на компонента 
    return ( // връща уеб страница
        <nav className="flex gap-4 p-4 bg-gray-100 shadow mb-6">
            <Link href="/" className="text-blue-600 hover:underline font-medium">Цели</Link> {/* Линк 1*/}
            <Link href="/completed" className="text-blue-600 hover:underline font-medium">Завършени</Link> {/* Линк 2*/}
        </nav>
    );
}