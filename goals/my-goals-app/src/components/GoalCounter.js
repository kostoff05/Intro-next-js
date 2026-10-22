'use client'; // това значи че компонента ще бъде интерактивен и ще иска действие от потребителя. 
import { useState } from 'react'; // запазва състоянието на компонента(помни на кое число е стигнал броячът при всяко натискане на бутона.)

export default function GoalCounter() { // основната фунцкия на компонента. 
    const [completedCount, setCompletedCount] = useState(0); // създаваме променлива completedCount, която пази текущата стойност на брояча; setCompletedCount-> Казваме на React да промени стойноста използвайки неговото състояние useState(0).

    return (  //Връща страницата. 
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-md max-w-sm"> {/* Създаваме кутия с margin top - 6 , padding- 4, светлосив цвят, заоблени ъгли, лека сянка и ограничава максималната ширина на елемента*/}
            <p className="mb-2 font-medium text-gray-800">Изпълнени задачи: {completedCount}</p> {/* Създаваме кутия с margin bottom, среден шрифт, сив цвят на текста и използваме {completedCount}, за да вземем стойността на променливата. */}
            <button
                onClick={() => setCompletedCount(completedCount + 1)} // Бутон със събитие, което взима текущата стойност на completedCount и при изпъленение на събитие onClick, се прибавя 1ца към с-та на completed count.  
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" // оформление на бутона: размер на бутона по x и y; син цвят; бял цвят на текста в бутона; леко заоблен; hover ефект; transiton. 
            >
                Маркирай като изпълнена
            </button>
        </div>
    );
}