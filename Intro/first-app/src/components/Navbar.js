import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex gap-4 p-4 bg-gray-100 shadow">
            <Link href="/" className="text-blue-600 hover:underline">Начало</Link>
            <Link href="/contacts" className="text-blue-600 hover:underline">Контакти</Link>
        </nav>
    );
}
