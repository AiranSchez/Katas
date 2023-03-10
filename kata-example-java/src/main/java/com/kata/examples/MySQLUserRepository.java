package com.kata.examples;

public class MySQLUserRepository implements UserRepository {

    @Override
    public void saveOnDb(User user) {
        System.out.println("user");
    }

    @Override
    public boolean isUserExistOnDB(User user) {
        System.out.println("user exists");
        return false;
    }
}
