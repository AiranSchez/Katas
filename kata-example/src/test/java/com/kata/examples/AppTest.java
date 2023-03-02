package com.kata.examples;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AppTest{

    @Test
    void shouldReturnTheBase() {
        User user = new User(2, "name", "profile");
        assertEquals(user, new User(2, "name", "profile"));
    }

}
