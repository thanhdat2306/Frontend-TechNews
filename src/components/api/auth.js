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

export const sendVerificationCode = async (email) => {
    const response = await fetch('http://localhost:4000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });
    return response.json();
};

export const verifyCodeAndResetPassword = async (email, code, newPassword) => {
    const response = await fetch('http://localhost:4000/api/auth/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, code, newPassword })
    });
    return response.json();
};