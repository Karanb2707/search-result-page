import { useEffect, useState } from "react";

export default function AutosuggestInput({ allData, onSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const q = query.toLowerCase();
    const matched = allData.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q))
    );

    setSuggestions(matched.slice(0, 5));
  }, [query, allData]);

  const handleSelect = (value) => {
    setQuery(value);
    onSelect(value);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") handleSelect(query);
        }}
        onBlur={() => setTimeout(() => setSuggestions([]), 100)}
        className="w-full border p-2 rounded-md"
        placeholder="Search by title or tag"
      />

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border w-full mt-1 rounded shadow text-sm z-10">
          {suggestions.map(s => (
            <li
              key={s.id}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => handleSelect(s.title)}
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
