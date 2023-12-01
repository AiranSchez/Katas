class PasswordValidator:
    def validate(self, password: str) -> bool:
        if self.validate_lenght(password):
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

    def validate_lenght(self, password: str) -> bool:
        return len(password) < 8

    def fibobacci(n: int) -> int:
        a, b = 0, 1
        for _ in range(n-1):
            a, b = b, a + b
        return a