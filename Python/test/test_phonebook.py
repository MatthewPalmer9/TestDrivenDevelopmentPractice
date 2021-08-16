import unittest

from phonebook import PhoneBook

NAME = "Bob"
PHONE_NUMBER = "12345"

class PhoneBookTest(unittest.TestCase):

    def test_lookup_by_name(self):
        phonebook = PhoneBook()
        phonebook.add(NAME, PHONE_NUMBER)
        number = phonebook.lookup(NAME)
        self.assertEqual(PHONE_NUMBER, number)