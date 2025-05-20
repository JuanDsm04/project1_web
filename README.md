# Calculadora React

Este proyecto es una calculadora desarrollada con React y Vite, que cumple con los requisitos académicos de diseño por componentes, testing, linting y funcionalidad específica.

## Instalación

Primero, asegúrate de tener [Bun](https://bun.sh/) instalado. Luego, en la raíz del proyecto:

```bash
bun install
```

## Scripts disponibles

Puedes usar los siguientes comandos para ejecutar, testear y verificar el código:

```bash
bun run dev         # Inicia el servidor de desarrollo con Vite
bun run storybook   # Lanza Storybook para visualizar componentes
bun run lint        # Ejecuta ESLint con las reglas definidas
bun run test        # Corre los tests con Vitest
```

---

## Requerimientos funcionales

* **Interfaz:**

  * Pantalla de visualización (Display).
  * Teclado numérico con botones de HTML.
  * Todo input se realiza desde los botones.

* **Comportamiento:**

  * Al presionar un número, se muestra en el display.
  * Los siguientes números se concatenan a la derecha.
  * Al presionar una operación, el display se limpia para el siguiente número.
  * Al presionar una operación nuevamente, se muestra el resultado acumulado.
  * Al presionar `=`, se muestra el resultado.

* **Operaciones obligatorias:**

  * Suma
  * Resta
  * Multiplicación
  * Igualdad

* **Condiciones adicionales:**

  * El display no puede mostrar más de **9 caracteres**.
  * Si el número es **negativo**, debe mostrar **ERROR**.
  * Si el número es **mayor a 999999999**, debe mostrar **ERROR**.

---

## Funcionalidades extra implementadas

* Punto decimal (`.`)
* División (`/`)
* Módulo (`%`)
* Cambio de signo (`+/-`)
* Hook personalizado para manejar parte de la lógica

---

## Linting

* Se utiliza **ESLint** con configuración basada en **JavaScript Standard**.
* Se prohíben los puntos y coma (`;`) como regla personalizada.
* El comando `bun run lint` valida todos los archivos `.js` y `.jsx`.

---

## Testing

* Pruebas implementadas con **Vitest** + **Testing Library**.
* Ejecutar con `bun run test`.
* Cada prueba no trivial suma puntos.

---

## Storybook

* Historias de componentes implementadas usando **Storybook**.
* Ejecutar con `bun run storybook`.
