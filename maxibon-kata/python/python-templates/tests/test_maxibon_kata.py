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
    
    @given(
        freezer_maxibons = st.integers(),
        developer_name = st.text(),
        maxibons_taken = st.integers()
    )
    def test_that_freezer_is_never_empty(self, freezer_maxibons, developer_name, maxibons_taken):
        freezer = Freezer(freezer_maxibons)
        
        freezer.take_maxibon(developer_name, maxibons_taken)
        
        assert_that(freezer.maxibons).is_greater_than_or_equal_to(0)
        

    # test para inicializar el frigorifico con maxibones y que no sea negativo
    def test_that_freezer_does_not_start_with_negative_stock(self):
        freezer = Freezer(-10)
        
        assert_that()
        
    
class Freezer: 
    def __init__(self, maxibons):
        self.maxibons = maxibons
        
    def take_maxibon(self, developer_name, maxibons_taken):
        if self.maxibons >= maxibons_taken: 
            self.maxibons -= maxibons_taken







    # @given(
    #     fridge_storage = st.integers(min_value=0, max_value=2),
    #     ice_cream_taken = st.from_regex(r'^[3-9]|10$', fullmatch=True)
    # )     
    # def test_developer_ask_for_more_ice_cream_than_available_from_fridge(self, fridge_storage, ice_cream_taken):
    #     ice_cream_taken = int(ice_cream_taken)
    #     fridge = Fridge(fridge_storage)
        
    #     fridge.take_maxibon("Pedro", ice_cream_taken)
    #     print("Fridge storage: ", fridge_storage, "Maxibons taken: ", ice_cream_taken)
        
    #     assert_that(fridge.get_ammount()).is_greater_than_or_equal_to(0)
