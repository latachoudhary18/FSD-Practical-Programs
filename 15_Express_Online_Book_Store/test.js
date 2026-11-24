// Run the server in another terminal first: npm start
const BASE = "http://localhost:3000";
async function request(path, options = {}) {
  const response = await fetch(BASE + path, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  console.log(`${options.method || "GET"} ${path} -> ${response.status}`, data);
  return { status: response.status, data };
}
(async () => {
  try {
    const books = await request("/books");
    const firstBook = books.data[0];
    if (firstBook) {
      await request(`/books/${firstBook.id}`);
      await request("/cart", { method: "POST", body: JSON.stringify({ bookId: firstBook.id, quantity: 1 }) });
      await request("/cart");
      await request("/orders", { method: "POST", body: JSON.stringify({}) });
      await request("/orders");
    }
  } catch (error) {
    console.error("Could not connect. Start the server with npm start first.", error.message);
    process.exitCode = 1;
  }
})();
