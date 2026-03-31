# [Contribute To This Project](https://syknapse.github.io/Contribute-To-This-Project/)

![image info](/favicon.png)

> Logo creado con :sparkling_heart: por [CandidDeer](https://github.com/CandidDeer)

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Únete a nuestro servidor de Discord')
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://syknapse.github.io/Contribute-To-This-Project/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://syknapse.github.io/Contribute-To-This-Project/)

---

> ## **Anuncio:**
>
> ¿Te gustaría convertirte en mantenedor de este proyecto? Lee la [guía para mantenedores](/maintainer_guide.md), únete a nuestro [servidor de Discord](https://discord.gg/tWkvS4ueVF) y solicita unirte al equipo.

---

### Índice de acceso rápido

- [Introducción](#introduccion)
- [¿Para quién es esto?](#para-quien-es-esto)
- [¿Con qué voy a contribuir?](#con-que-voy-a-contribuir)
- [Traducciones](#traducciones)
- [Preparación](#preparacion)
- [Contribuir](#contribuir)
  - [Paso 1: Haz fork de este repositorio](#paso-1-haz-fork-de-este-repositorio)
  - [Paso 2: Clona el repositorio](#paso-2-clona-el-repositorio)
  - [Paso 3: Crea una nueva rama](#paso-3-crea-una-nueva-rama)
  - [Paso 4: Copia el archivo plantilla](#paso-4-copia-el-archivo-plantilla)
  - [Paso 5: Completa tu tarjeta](#paso-5-completa-tu-tarjeta)
  - [Paso 6: Revisa tu trabajo](#paso-6-revisa-tu-trabajo)
  - [Paso 7: Haz commit de tus cambios](#paso-7-haz-commit-de-tus-cambios)
  - [Paso 8: Sube tus cambios a GitHub](#paso-8-sube-tus-cambios-a-github)
  - [Paso 9: Envía un PR](#paso-9-envia-un-pr-pull-request)
  - [Paso 10: Celebra](#paso-10-celebra)
- [Siguientes pasos](#siguientes-pasos)

---

## Introducción

Esta es la versión del tutorial para terminal. Todo aquí usa Git por línea de comandos. Si prefieres una interfaz gráfica, usa [GitHub Desktop](/README.md).

### ¿Para quién es esto?

Para cualquier persona lo bastante cómoda con terminal como para ejecutar comandos básicos de Git. No necesitas ser experto: si puedes moverte entre carpetas y correr comandos, ya puedes hacerlo.

### ¿Con qué voy a contribuir?

Agregarás una tarjeta personal en la [página del proyecto](https://syknapse.github.io/Contribute-To-This-Project/). Incluirá tu nombre, enlaces de contacto, una descripción corta y enlaces a recursos para desarrolladores que recomiendes.

---

## Traducciones

Este tutorial también está disponible en otros idiomas. Ten en cuenta que las traducciones pueden ir un poco atrasadas frente a la versión en inglés.

|      [Bengalí](translations/terminal_tutorial/terminal_tutorial.ben.md)      | [Alemán](translations/terminal_tutorial/terminal_tutorial.ger.md)  | [Hindi](translations/terminal_tutorial/terminal_tutorial.hin.md)  |  [Coreano](translations/terminal_tutorial/terminal_tutorial.kor.md)  | [Chino (Tradicional)](translations/terminal_tutorial/terminal_tutorial.zho-tc.md) |
| :--------------------------------------------------------------------------: | :----------------------------------------------------------------: | :---------------------------------------------------------------: | :------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| [Portugués (BR)](translations/terminal_tutorial/terminal_tutorial.por-br.md) | [Español](translations/terminal_tutorial/terminal_tutorial.spa.md) | [Telugu](translations/terminal_tutorial/terminal_tutorial.tel.md) | [Ucraniano](translations/terminal_tutorial/terminal_tutorial.ukr.md) |                                                                                   |

> Las traducciones de este tutorial son bienvenidas. Revisa [CONTRIBUTING.md](../../CONTRIBUTING.md) para empezar.

---

## Preparación

Asegúrate de tener Git instalado:

```bash
git --version
```

Si no lo tienes, [descarga Git aquí](https://git-scm.com/downloads).

---

## Contribuir

Conviértete en contribuyente de código abierto en 10 pasos.

### Paso 1: Haz fork de este repositorio

Haz fork de este proyecto haciendo clic en el botón **Fork** arriba a la derecha en la [página del repositorio](https://github.com/Syknapse/Contribute-To-This-Project). Esto crea una copia del proyecto en tu cuenta de GitHub.

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 2: Clona el repositorio

Clona tu fork en tu máquina local:

```bash
git clone https://github.com/tu-usuario-github/Contribute-To-This-Project.git
```

Luego entra al directorio del proyecto:

```bash
cd Contribute-To-This-Project
```

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 3: Crea una nueva rama

Crea y cambia a una rama nueva:

```bash
git checkout -b tu-nombre-card
```

Usa un nombre descriptivo. `tu-nombre-card` es una buena convención para este proyecto.

**NO trabajes en la rama `master`.**

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 4: Copia el archivo plantilla

El proyecto tiene una plantilla de tarjeta lista en la carpeta `cards/`. Cópiala y renombra la copia con tu nombre de usuario exacto de GitHub:

```bash
cp cards/template.html cards/tu-usuario-github.html
```

Por ejemplo, si tu usuario es `octocat`:

```bash
cp cards/template.html cards/octocat.html
```

**Este es el único archivo que vas a editar.** No edites `cards/template.html`.

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 5: Completa tu tarjeta

Abre tu archivo de tarjeta en el editor que prefieras:

```bash
code cards/tu-usuario-github.html   # VS Code
# o: nano, vim, etc.
```

Tu tarjeta se ve así:

```html
<div class="card">
  <p class="name">Your name</p>
  <p class="contact">
    <!-- Add one or more contact links. At minimum, include your GitHub. -->
    <i class="fab fa-github"></i>
    <a href="https://www.github.com/your_user_handle" target="_blank">Your handle</a>
  </p>
  <p class="about">Write a sentence or two about yourself.</p>
  <div class="resources">
    <p>3 Useful Dev Resources</p>
    <ul>
      <li>
        <a href="#" target="_blank" title="First Resource">Resource 1</a>
      </li>
      <li>
        <a href="#" target="_blank" title="Second Resource">Resource 2</a>
      </li>
      <li>
        <a href="#" target="_blank" title="Third Resource">Resource 3</a>
      </li>
    </ul>
  </div>
</div>
```

Complétala así:

- **Nombre**: reemplaza `Your name` por tu nombre. No cambies `class="name"`.
- **Contacto**: reemplaza el enlace y usuario de GitHub por los tuyos. Puedes agregar más contactos. Busca clases de iconos en [Font Awesome Icons](https://fontawesome.com/icons) (ej. `fab fa-linkedin`, `fab fa-x-twitter`).
- **About**: reemplaza el texto de ejemplo con una descripción corta sobre ti.
- **Recursos**: reemplaza `#` con URLs reales, actualiza `title=""` y el texto de cada enlace. Son opcionales, pero si los incluyes, cada uno debe tener enlace real. Máximo 5.

**No cambies nombres de clases ni la estructura del HTML.** El bot de validación revisa eso.

Guarda el archivo cuando termines.

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 6: Revisa tu trabajo

Abre tu archivo de tarjeta y revisa que:

- Ya no haya texto de plantilla
- Todos los enlaces empiecen con `https://`
- El nombre del archivo coincida exactamente con tu usuario de GitHub

La validación automática al enviar el PR detectará cualquier problema estructural que se te haya escapado.

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 7: Haz commit de tus cambios

Agrega tu archivo de tarjeta:

```bash
git add cards/tu-usuario-github.html
```

Haz commit con un mensaje corto:

```bash
git commit -m "Add my card"
```

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 8: Sube tus cambios a GitHub

Haz push de tu rama a tu fork:

```bash
git push origin tu-nombre-card
```

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 9: Envía un PR (Pull Request)

Ve a tu fork en GitHub. Verás un mensaje para abrir un pull request de la rama que acabas de subir. Haz clic en **Compare & pull request**.

Asegúrate de que el repositorio base sea `Syknapse/Contribute-To-This-Project` y la rama base sea `master`.

Deja activada la opción **Allow edits from maintainers** y luego haz clic en **Create pull request**.

Un bot validará tu tarjeta automáticamente. Si todo está bien, la fusiona solo. Si hay algo que corregir, el bot dejará un comentario explicando exactamente qué cambiar. Haz push del arreglo a la misma rama y se vuelve a validar.

[↑ Ir arriba ↑](#indice-de-acceso-rapido)

---

### Paso 10: Celebra

Ya hiciste tu primera contribución open source. Tu tarjeta aparecerá en [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project) poco después del merge.

**¿Dónde quedó mi archivo HTML?** Después de un tiempo, las tarjetas enviadas se archivan automáticamente para mantener el repositorio liviano. Tu archivo se elimina de `cards/`, pero sus datos se conservan en el archivo y tu tarjeta sigue apareciendo en el sitio. [Más información](../../archive/README.md).

---

## Siguientes pasos

- También puedes aprender a contribuir con esta serie _gratuita_: [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)
- Si este proyecto te fue **útil**, deja una :star: estrella :star: y comparte en X [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]
- Únete a nuestro [servidor de Discord](https://discord.gg/tWkvS4ueVF)
- ¿Quieres contribuir más allá de tu tarjeta? Revisa [CONTRIBUTING.md](../../CONTRIBUTING.md) para la guía completa.
- **Gracias por contribuir!** Ahora puedes probar contribuir en otros proyectos. Busca la etiqueta ![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png) para opciones amigables para principiantes.

---

### Agradecimientos

Este proyecto está fuertemente influenciado por el gran proyecto [first-contributions](https://github.com/Roshanjossey/first-contributions) de [Roshan Jossey](https://github.com/Roshanjossey).

### Top 100 Contributors

[![GitHub Contributors Image](https://contrib.rocks/image?repo=Syknapse/Contribute-To-This-Project)](https://github.com/Syknapse/Contribute-To-This-Project/graphs/contributors)

[twit]: https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet este proyecto'
