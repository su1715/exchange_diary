export async function getData(path) {
  try {
    const response = await fetch(`http://localhost:3000${path}`);
    if (!response.ok) throw Error("네트워크 에러");
    return await response.json();
  } catch (e) {
    throw Error(e);
  }
}

export async function postData(path, data) {
  try {
    const response = await fetch(`http://localhost:3000${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw Error("네트워크 에러");
    return await response.json();
  } catch (e) {
    throw Error(e);
  }
}
