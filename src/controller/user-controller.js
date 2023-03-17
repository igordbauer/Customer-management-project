export const createUser = async (formsState) => {
  await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formsState.inputs.name.value,
      email: formsState.inputs.email.value,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  });
};

export const getAllUsers = async () => {
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
};

export const deleteUser = async (id) => {
  await fetch("/api/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response;
  });
};

export const updateUser = async (id, object) => {
  await fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      object: object,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response;
  });
};
