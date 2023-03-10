package com.kata.examples;

public class UserService {


    private final UserRepository userRepository;

    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    void save(User user) {
        boolean userNotExists = !userRepository.isUserExistOnDB(user);
        if (userNotExists){
            userRepository.saveOnDb(user);
        } else {
            System.out.println("User already exists");
        }
    }
}
