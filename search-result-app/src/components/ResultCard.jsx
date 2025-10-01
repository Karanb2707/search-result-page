export default function ResultCard({ result }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
      <img src={result.image} alt={result.title} className="w-full h-40 object-cover rounded-md mb-3" />
      <h2 className="text-lg font-semibold mb-2">{result.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{result.description}</p>
      <div className="flex flex-wrap gap-2">
        {result.tags.map(tag => (
          <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
