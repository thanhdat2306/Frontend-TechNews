export const signup = async (username, email, password) => {
    const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });
    return response.json();
};

export const signin = async (email, password) => {
    const response = await fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    return response.json();
};