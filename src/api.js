export const createUser = async ({ ...data }) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}/user/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return response.json();
};

export const getAllUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/user`);

    if (!response.ok) {
        throw new Error("Something went wrong.");
    }

    return response.json();
};

export const updateUser = async ({ id, ...data }) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}/user/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return response.json();
};

export const removeUser = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}/user/${id}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return true;
};

export const activeUser = async (id) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}/user/${id}/active`,
        {
            method: "PUT"
        }
    );

    if (!response.ok) {
        throw new Error(response.json().message);
    }

    return true;
};