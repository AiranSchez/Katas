class PasswordValidator:
    def validate(self, password: str) -> bool:
        if self.validate_length(password):
            return False
        if self.uppercase_is_missing(password):
            return False
        if self.lowercase_is_missing(password):
            return False
        if self.number_is_missing(password):
            return False
        if self.underscore_is_missing(password):
            return False
        return True

    def uppercase_is_missing(self, password: str) -> bool:
        return password == password.lower()

    def lowercase_is_missing(self, password: str) -> bool:
        return password == password.upper()

    def number_is_missing(self, password: str) -> bool:
        for char in password:
            if char.isdigit():
                return False
        return True

    def underscore_is_missing(self, password: str) -> bool:
        return "_" not in password

    def validate_length(self, password: str) -> bool:
        return len(password) < 8