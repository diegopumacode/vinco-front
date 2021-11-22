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