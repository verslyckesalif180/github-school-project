import { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/octocat');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>My Component</div>;
}
