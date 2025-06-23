import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px", textAlign: "center" }}
    >
      <input
        type="text"
        placeholder="Job Title (e.g. Frontend Developer)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        style={{ padding: "10px", marginRight: "10px", width: "250px" }}
      />
      <input
        type="text"
        placeholder="Location (e.g. Remote, Bangalore)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        style={{ padding: "10px", marginRight: "10px", width: "200px" }}
      />
      <button type="submit" style={{ padding: "10px 20px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
