export const createProduct = async (formsState) => {
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  headers.append("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
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
    console.log(response);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  }
};
