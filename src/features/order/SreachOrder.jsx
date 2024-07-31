import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SreachOrder() {
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return;
    navigation(`/order/${query}`);
    setQuery("");
  }
  return (
    
      <form onSubmit={handleSubmit}>
        <input
          placeholder="search for pizza #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    
  );
}

export default SreachOrder;
