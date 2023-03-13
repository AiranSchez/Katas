# Katas

At this project we will add multiple Katas where store different solutions for them. The idea is create a catalog where we can compare the evolution at different technologies, see different approaches used at different time, or just have fun reminding good moments making pair with friends

## Structure

This project will contain multiple projects inside, independent between of them, so we will have at the root path the different Katas, and inside them each independent project with different solutions

``` bash
/root
    |
    |- kata1
    |   |-solution1
    |   |-solution2
    |   |-solution3
    |- kata2
    |   |-solution1
    |   |-solution2
    |- kata3
```

Each Kata should contain their own README.md explaining the statement of the exercise.

## Add new kata folder

1- git submodule add link-to-repo-template name-of-folder
2- cp name-of-folder new-destiny
3- rm .git inside new-destiny