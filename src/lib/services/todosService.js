
const API_URL = "https://jsonplaceholder.typicode.com/todos";

/**
 * Fetch all todos from the API
 * @returns {Promise<Object[]>}
 */
export async function fetchTodos() {
  try {
    const response = await fetch(API_URL);

    if(!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.status}`);
    }

    const data = await response.json();

    return data.map((todo) => ({ ...todo, color: null }));
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}