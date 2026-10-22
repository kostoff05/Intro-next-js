import GoalCounter from '@/components/GoalCounter'; // импортитраме бутона 

export default function Home() { // основната ф-я на началната страница. 
  return (
    <div>
      <h1 className="text-3xl text-black font-bold">Моите цели за тази седмица 🎯</h1>

      <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700"> {/* Неподреден списък с margin top, елементите да се показват с кръгче, точките да стоят в рамките на текста, разстояние между редовете, сив цвят.  */}
        <li>Да науча основите на Next.js и компонентите</li>
        <li>Да направя първото си приложение с Tailwind CSS</li>
        <li>Да упражня работата с клиентски компоненти и useState</li>
      </ul>

      <GoalCounter /> {/* Mястото на бутона в страницата*/}
    </div>
  );
}