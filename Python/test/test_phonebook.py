import unittest

from phonebook import PhoneBook

NAME = "Bob"
PHONE_NUMBER = "12345"

class PhoneBookTest(unittest.TestCase):

    def setUp(self):
        self.phonebook = PhoneBook()
        self.phonebook.add(NAME, PHONE_NUMBER)

    def test_lookup_by_name(self) -> None:
        self.phonebook.add(NAME, PHONE_NUMBER)
        number = self.phonebook.lookup(NAME)
        self.assertEqual(PHONE_NUMBER, number)
    
    def test_missing_name(self):
        with self.assertRaises(KeyError):
            self.phonebook.lookup("missing")
    
    def test_empty_phonebook_is_consistent(self):
        self.phonebook.add(NAME, PHONE_NUMBER)
        self.assertTrue(self.phonebook.is_consistent())

    def test_is_consistent_with_different_entries(self):
        self.phonebook.add("Anna", "012345")
        self.assertTrue(self.phonebook.is_consistent())

    def test_is_consistent_with_duplicate_entries(self):
        self.phonebook.add("Sue", PHONE_NUMBER)
        self.assertFalse(self.phonebook.is_consistent())
    
    def test_is_consistent_with_duplicate_prefix(self):
        self.phonebook.add("Sue", "123")
        self.assertFalse(self.phonebook.is_consistent())