'use client';

import { useState } from 'react';

export default function Counter() {
    // Състояние, което пази текущата стойност на брояча
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 bg-gray-600 rounded-lg shadow-md">
            <p className="mb-2 font-medium">Брой кликове: {count}</p>

            {/* Събитието onClick изисква клиентски компонент ("use client") */}
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-600 text- rounded hover:bg-blue-700 transition"
            >
                Кликни ме
            </button>
        </div>
    );
}
