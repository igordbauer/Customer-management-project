export const createProduct = async (formsState) => {
  try {
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formsState.inputs.name.value,
        price: formsState.inputs.price.value,
      }),
    });
  } catch (response) {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  }
};
export const getProducts = async () => {
  let response;
  try {
    response = await fetch("/api/products");
    const data = response.json();
    return data;
  } catch (e) {
    if (!response.ok) {
      throw new Error("Erro ao buscar lista de produtos");
    }
    return response.json();
  }
};
export const deleteProduct = async (id) => {
  let response;
  try {
    response = await fetch("/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = response.json();
    return data;
  } catch (e) {
    if (!response.ok) {
      throw new Error("Erro ao buscar lista de produtos");
    }
    return response.json();
  }
};
