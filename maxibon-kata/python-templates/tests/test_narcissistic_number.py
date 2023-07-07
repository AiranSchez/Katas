from logging import Logger
from unittest import TestCase
from assertpy import assert_that
from hypothesis import given, strategies as st


# Starts with 10 Maxibons:
# Pedro => 3 Maxibons
# Fran => 1 Maxibon
# Davide => Fitness Guy, 0 Maxibon
# Sergio => 2 Maxibons
# Jorge => 1 Maxibon
# No maxibon: "Hi guys, I'm <NAME OF THE DEVELOPER>, We need more maxibons!"

class TestMaxibonKata(TestCase):
 
    def test_one_person_takes_icecream_from_fridge(self):
        fridge = Fridge(10)
        
        fridge.take_maxibon("Pedro", 3)
        
        assert_that(fridge.get_ammount()).is_equal_to(7)
        
    def test_more_than_one_person_takes_icecream_from_fridge(self):
        fridge = Fridge(10)
        
        fridge.take_maxibon("Sergio", 2)
        fridge.take_maxibon("Pedro", 3)
        
        assert_that(fridge.get_ammount()).is_equal_to(5)
    

    @given(
        fridge_storage = st.integers(min_value=0, max_value=2),
        ice_cream_taken = st.from_regex(r'^[3-9]|10$', fullmatch=True)
    )     
    def test_developer_ask_for_more_ice_cream_than_available_from_fridge(self, fridge_storage, ice_cream_taken):
        ice_cream_taken = int(ice_cream_taken)
        fridge = Fridge(fridge_storage)
        
        fridge.take_maxibon("Pedro", ice_cream_taken)
        print("Fridge storage: ", fridge_storage, "Maxibons taken: ", ice_cream_taken)
        
        assert_that(fridge.get_ammount()).is_greater_than_or_equal_to(0)

    # @given(
    #     fridge_storage = st.integers(min_value=0, max_value=2)
    # )
    # def test_developer_ask_for_resstock_the_ice_creams(self,fridge_storage):
    #     fridge = Fridge(fridge_storage)
        
    #     fridge.restock()
    #     assert_that(fridge.get_ammount()).is_equal_to(10)

class Fridge():
    def __init__(self, maxibon: int) -> None:
        self._available_maxibon = maxibon
        
    def take_maxibon(self, dev_name: str, maxibon_taken: int):
        if (maxibon_taken > self._available_maxibon):
            self._available_maxibon = 0
            return
        
        self._available_maxibon = self._available_maxibon - maxibon_taken
        
    def get_ammount(self):
        return self._available_maxibon
    
    def restock(self):
        self._available_maxibon = 10