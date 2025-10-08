export const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <input
    type="text"
    placeholder="Search for a country..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="search-input"
  />
);
