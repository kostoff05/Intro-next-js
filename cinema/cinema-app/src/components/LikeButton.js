'use client'; // това значи че компонента ще бъде интерактивен и ще иска действие от потребителя. 
import { useState } from 'react'; // запазва състоянието на компонента(помни на кое число е стигнал броячът при всяко натискане на бутона).

export default function LikeButton() { // основната фунцкия на компонента.
    const [likes, setLikes] = useState(0); // създаваме променлива likes, която пази текущата стойност на брояча; setLikes-> Казваме на React да промени стойноста,използвайки неговото състояние useState(0).

    return (
        <div className="mt-4">
            <button
                onClick={() => setLikes(likes + 1)} // Бутон със събитие, което взима текущата стойност на likes и при изпъленение на събитие onClick, се прибавя 1ца към с-та на likes.
                className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
            >
                Харесай страницата ❤️ ({likes})
            </button>
        </div>
    );
}