import Counter from "@/components/Counter";
import Image from "next/image";
export default function ContactsPage() {
    return (
        <div>
            <main className="p-8">
                <h1 className="text-3xl font-bold">Контакти</h1>
                <p className="mt-4 text-gray-600">Това е моята втора страница в Next.js!</p>
            </main>




            <Counter></Counter>

            <Image src="/image.jpeg" alt="Снимка на природа" width={500} height={700}></Image>

        </div>
    );
}
