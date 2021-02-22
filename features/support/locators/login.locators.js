
function email() {
    return "input[name='username']"
}

function password() {
    return "input[name='password']"
}

function sign_in_button() {
    return "[type='submit']"
}

function google_button() {
    return "[data-cy='signin-google-button']"
}

function facebook_button() {
    return "[data-cy='signin-facebook-button']"
}

function apple_button() {
    return "[data-cy='signin-apple-button']"
}

function scorpion_button() {
    return "[data-cy='signin-scorpion-button']"
}

module.exports = {
    email: email,
    password: password,
    sign_in_button: sign_in_button,
    google_button: google_button,
    facebook_button: facebook_button,
    apple_button: apple_button,
    scorpion_button: scorpion_button
};
