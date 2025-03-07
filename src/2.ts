import { useEffect } from "react";

function MyComponent() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
      });
  }, []);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
export default MyComponent;