export const fetchLogin = async account => {
  const res = await fetch("/api/signin");
  if (res.ok) {
    const tokenObj = await res.json();
    return tokenObj;
  }
  const response = await fetch("http://localhost:3000/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(account)
  });

  if (response.ok) {
    const tokenObj = await response.json();
    return tokenObj;
  }

  throw new Error("서버 통신이 원할하지 않습니다.");
};
