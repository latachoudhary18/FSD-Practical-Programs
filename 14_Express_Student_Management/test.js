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
    await request("/");
    await request("/students");
    const created = await request("/students", { method: "POST", body: JSON.stringify({ name: "Test Student", course: "FSD" }) });
    if (created.data.id) {
      await request(`/students/${created.data.id}`);
      await request(`/students/${created.data.id}`, { method: "PUT", body: JSON.stringify({ name: "Updated Student", course: "React" }) });
      await request(`/students/${created.data.id}`, { method: "DELETE" });
    }
  } catch (error) {
    console.error("Could not connect. Start the server with npm start first.", error.message);
    process.exitCode = 1;
  }
})();
