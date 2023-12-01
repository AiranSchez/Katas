## Template engine kata

This kata is about implementing a template engine where you can pass a template string and a dictionary of variables and get the template string with the variables replaced by their values.

### Examples
Giving:
```Java
“hello `$username`, today is `$day`”, variables = {“username” = “Carlos”, “day” = Monday}
```
Expected output:
```Java
“hello Carlos, today is Monday”
```