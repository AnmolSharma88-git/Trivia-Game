

function CategoryList({ categories, selected, onSelect }) {
  return (
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full border rounded-lg p-3"
    >
      <option value="">---Choose Category---</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryList;