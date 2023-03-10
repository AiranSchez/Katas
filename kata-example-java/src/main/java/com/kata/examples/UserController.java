package com.kata.examples;

public class UserController {

    private final UserService userService;

    UserController(UserService userService) {
        this.userService = userService;
    }

    public User createUserDTO(String data) {
        String name = data.split(";")[0];
        String email = data.split(";")[1];
        return new User(name, email);
    }

    public void process(String data) {
        User userDTO = createUserDTO(data);
        userService.save(userDTO);
    }
}
