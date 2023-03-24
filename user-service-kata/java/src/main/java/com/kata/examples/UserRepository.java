package com.kata.examples;

public interface UserRepository {
    public void saveOnDb(User user);

    public boolean isUserExistOnDB(User user);


}
