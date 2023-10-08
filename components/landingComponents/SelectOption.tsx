"use client";
import React, { useState } from "react";

export default function DropdownMenu({ name }: { name: string }) {
    const [selectedOption, setSelectedOption] = useState("");
    const options = ["MBA", "B.tech", "BSC.CSIT", "MBBS"];

    const handleOptionSelect = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex items-center">
            <select
                id="dropdown"
                name="dropdown"
                value={selectedOption}
                onChange={handleOptionSelect}
                className="mt-1 block w-56 py-3 px-6   bg-white rounded-md shadow-sm outline-none text-base text-gray-500 font-medium "
            >
                <option value="" disabled hidden>
                    {name}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="h-10 border-l  ml-4 border-gray-300 hidden md:flex"></div>
        </div>
    );
}
