package com.kata.examples;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

public class UserServiceShould{
    @Test
    public void save_user_on_database() {
        String data = "name;email";
        UserRepository userRepositoryMock = Mockito.mock(MySQLUserRepository.class);
        UserService userService = new UserService(userRepositoryMock);
        UserController userController = new UserController(userService);

        User fakeUser = new User("name", "email");
        userController.process(data);
        Mockito.verify(userRepositoryMock).saveOnDb(fakeUser);
    }

    @Test
    public void verify_if_user_exists(){
        UserRepository userRepositoryMock = new FakeMySQLUserService();
        UserService userService = new UserService(userRepositoryMock);
        UserController userController = new UserController(userService);
        User fakeUser = new User("pepe", "pepe@pepe.pepe");

        userController.process("pepe;pepe@pepe.pepe");

    }

    public class FakeMySQLUserService implements UserRepository {

        @Override
        public void saveOnDb(User user) {

        }

        @Override
        public boolean isUserExistOnDB(User user) {
            return true;
        }
    }
}
