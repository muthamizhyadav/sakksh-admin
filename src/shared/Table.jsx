import React from 'react';

function SharedTable({ columns, values }) {
    return (
        <div className="overflow-x-auto shadow-lg bg-white">
            <table className="min-w-full text-sm font-medium text-gray-800">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0052A8] sticky top-0">
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {values.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-gray-100 transition-all duration-200 hover:bg-indigo-50/50 hover:shadow-sm"
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-6 py-4 text-gray-600"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SharedTable;