const translations = {
    "en": {
        "errors": {
            "email-invalid": "Please check your email",
            "password-too-short": "Please use at least 8 characters for your password"
        }
    },
    "fi": {
        "errors": {
            "email-invalid": "wefjurjrejkr",
            "password-too": "sfjkrgjherjkg"
        }
    }
}

const currentLanguage = "fi";

alert(translations[currentLanguage].errors.email-invalid);