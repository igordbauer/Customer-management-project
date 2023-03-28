export const createSale = async (cartObj) => {
  try {
    await fetch("/api/sales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartObj }),
    });
  } catch (response) {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  }
};
