## Password Validator Kata by [Codurance](https://www.codurance.com/es/katas/validacion-contrasena)

### Iteración 1 - Validación de contraseña básica
**Objetivo**
Diseñar e implementar un software que valide una contraseña utilizando TDD.

La contraseña será introducida por el usuario (como argumento del método) y el software deberá responder si la contraseña es válida o no.

Una contraseña válida debe cumplir los siguientes requisitos:

Tener más de 8 caracteres
Contener una letra mayúscula
Contener una letra minúscula
Contener un número
Contener un guión bajo
**Requisitos técnicos:**
Queremos un método que verifique si la contraseña es válida o no.
No queremos saber la razón por la cual la contraseña no es válida (el valor de retorno es un booleano).

### Iteración 2 - Abstracción de normas
**Objetivo**
Diseñar e implementar un software que pueda adaptarse a diferentes reglas de validación de contraseñas TDD y centrarse en los principios OOP.

Supongamos que ahora queremos crear otro tipo de validaciones de contraseñas porque en nuestra app necesitamos diferentes tipos de contraseñas, como por ejemplo:

**Validación 2:**

Tener más de 6 caracteres
Contener una letra mayúscula
Contener una letra minúscula
Contener un número
**Validación 3:**

Tener más de 16 caracteres
Contener una letra mayúscula
Contener una letra minúscula
Contener un guión bajo
**Cosas a practicar**
En esta iteración, debemos tratar de identificar una buena abstracción y de trabajar en los principios de OOP, así como en patrones de diseño como Builder y Factory.

Restricciones interesantes
Usa object calisthenics.

### Iteración 3 - Errores múltiples
**Objetivo**
Ahora podremos saber si una contraseña es válida o no, pero no podremos entender por qué deberíamos devolver una lista de errores para cada contraseña no válida, para poder saber por qué la contraseña no es válida.

**Cosas a practicar**
Identifica qué tan mantenible es el código que has construido hasta ahora, y cómo se adapta a los cambios. Esta iteración podría cambiar según el lenguaje de programación que utilices.

### Iteración 4 - Estrategia de validación
**Objetivo**
Hasta este punto hemos podido crear una lista de reglas de validación y verificar que la contraseña pase cada una de ellas. Ahora queremos una nueva contraseña con las mismas reglas pero que permita omitir sólo una de ellas.

**Validación 4**

Tener más de 8 caracteres
Contener una letra mayúscula
Contener al menos un número
Contener un guión bajo
**Ejemplo:**

Tiene más de 8 caracteres ✅
Contiene una letra mayúscula ✅
Contiene un número ✅
Contiene un guión bajo ❌
Esta contraseña es válida