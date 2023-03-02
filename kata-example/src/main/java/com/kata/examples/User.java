package com.kata.examples;

import java.util.Objects;

public class User {
    private long id;
    private String name;
    private String profile;

    public User(long id, String name, String profile) {
        this.id = id;
        this.name = name;
        this.profile = profile;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(name, user.name) && Objects.equals(profile, user.profile);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, profile);
    }

    public String getProfile() {
        return profile;
    }

    public String getName() {
        return name;
    }
}