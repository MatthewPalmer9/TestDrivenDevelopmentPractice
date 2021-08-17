class PhoneBook:

    def __init__(self):
        self.numbers = {}

    def add(self, name, number):
        self.numbers[name] = number

    def lookup(self, name):
        return self.numbers[name]

    def is_consistent(self):
        for name1,num1 in self.numbers.items():
            for name2,num2 in self.numbers.items():
                if name1 == name2:
                    continue
                if num1.startswith(num2):
                    return False
        return True
