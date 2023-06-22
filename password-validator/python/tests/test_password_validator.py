import unittest

from src.password_validator import PasswordValidator

class TestPasswordValidator(unittest.TestCase):
    def test_valid_password(self):
        password = "Aa_45678"

        is_valid = PasswordValidator().validate(password)

        self.assertTrue(is_valid)

    def test_not_valid_password_when_missing_uppercase(self):
        password = "aa_45678"

        is_valid = PasswordValidator().validate(password)

        self.assertFalse(is_valid)

    def test_not_valid_password_when_missing_lowercase(self):
        password = "AA_45678"

        is_valid = PasswordValidator().validate(password)

        self.assertFalse(is_valid)

    def test_not_valid_password_when_missing_number(self):
        password = "AA_abede"

        is_valid = PasswordValidator().validate(password)

        self.assertFalse(is_valid)

    def test_not_valid_password_when_missing_underscore(self):
        password = "Aa345678"

        is_valid = PasswordValidator().validate(password)

        self.assertFalse(is_valid)

    def test_password_has_not_minimum_length_of_eight(self):
        password = "Aa_4567"

        is_valid = PasswordValidator().validate(password)

        self.assertFalse(is_valid)

# NOTE: the first iteration was like this: 

# region first iteration
#
    # def test_password_has_at_least_eight_characters_long(self):
    #     password = "abcdefgh"
    #     # This is not valid because of:
    #     # No upper
    #     # No underscore
    #     # No number

    #     is_valid = PasswordValidator().validate(password)

    #     # this assertion is not true, the password is not valid
    #     self.assertTrue(is_valid)
#
    # def test_password_is_not_eight_character_long(self):
    #     password = "A"

    #     is_valid = PasswordValidator().validate(password)

    #     self.assertFalse(is_valid)


# endregion