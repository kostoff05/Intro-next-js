import Image from 'next/image'; // компонент за добавяне на снимка. 
import LikeButton from '@/components/LikeButton'; // импортираме бутона, който създадохме в components. 

export default function Home() { // основна ф-я
  return (
    <div>
      <h1 className="text-3xl font-bold">Моят личен кино клуб 🍿</h1>

      <ul className="mt-4 list-disc list-inside space-y-2 text-white">
        <li>Властелинът на пръстените</li>
        <li>Гладиатор</li>
        <li>Интерстелар</li>
      </ul>

      <div className="mt-6">
        <Image
          src="/movie-poster.jpg"
          alt="Плакат на филм"
          width={400}
          height={600}
          className="rounded-lg shadow-md"
        />
      </div>

      <LikeButton /> {/* Тук добавяме бутона за харесванията */}
    </div>
  );
}