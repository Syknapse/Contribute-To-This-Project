# Guía del mantenedor

Esta guía es para aquellos que deseen unirse al proyecto como mantenedores, para ayudar a administrar y mantener el proyecto para la comunidad. (Esta no es una guía para **contribuyentes por primera vez**)

## Traducciones

Este tutorial también está disponible en [otros idiomas](traducciones/README.md)

| [Inglés](maintainer_guide.md) | [Bangla](traducciones/maintainer_guide/maintainer_guide.ben.md) | [Chino (tradicional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [Francés (française)](translations/maintainer_guide/maintainer_guide.fra.md) | [Alemán](traducciones/maintainer_guide/maintainer_guide.ger.md) |
| :---: | :---: | :---: | :---: | :---: |
[Hindi](traducciones/maintainer_guide/maintainer_guide.hin.md) | [Indonesio](traducciones/maintainer_guide/maintainer_guide.ind.md) | [Italiano](traducciones/maintainer_guide/maintainer_guide.ita.md) | [Japonés](traducciones/maintainer_guide/maintainer_guide.jpn.md) | [Coreano](traducciones/maintainer_guide/maintainer_guide.kor.md) |
[Portugués](traducciones/maintainer_guide/maintainer_guide.por.md) | [Ruso](traducciones/maintainer_guide/maintainer_guide.rus.md) | [Ucraniano](/translations/maintainer_guide/maintainer_guide.ukr.md) |

> Se aceptan traducciones de documentación de proyectos. Lea la [`Guía de traducción`](translations/README.md) para contribuir.

---

## Objetivos

Nuestro principal objetivo es brindarles a nuestros contribuyentes la retroalimentación más rápida posible desde el momento en que realizan su solicitud de extracción. Esto significa principalmente realizar revisiones de código y fusionar los RP aceptados.

## ¿Para quién es esto?

Cualquiera con un poco de conocimientos de Git y GitHub. No es necesario ser un experto, esta guía debería ayudar incluso a los principiantes. Este es un proyecto activo que recibe contribuciones periódicas y ayuda a muchas personas a realizar su primera contribución de código abierto. Ser mantenedor de este proyecto ayuda a garantizar que continúe brindando a nuestros contribuyentes una buena primera experiencia y animándolos a contribuir más.

Puedes dedicar tanto o tan poco tiempo como quieras a esto. Entre nosotros esperamos que podamos mantener todo funcionando sin problemas.

## Metodología

- Vaya a la sección de solicitud de extracción del proyecto, comience con la solicitud de extracción más antigua que no esté en el estado "cambios solicitados".
- Abra un PR y vaya a la pestaña de cambios de archivos e inicie una revisión del código.
- Verifique el PR, asegúrese de que siga las especificaciones del tutorial.
- Asegúrate de que el HTML, los enlaces y los datos sean correctos. Asegúrese de que la tarjeta esté colocada al comienzo del archivo, donde debería estar.
- Luego verifique si hay conflictos. Fusione `master` en la rama PR para solucionar los conflictos. Los conflictos suelen ocurrir cuando ha pasado un tiempo desde las fusiones anteriores y varios RP están usando la misma versión desactualizada.
- Si este es el caso solucione el conflicto. Por lo general, tendrás que agregar la nueva tarjeta encima de las tarjetas que se agregaron desde que se hizo la bifurcación.
- Si todo lo demás está bien, apruebe el PR, escriba un mensaje al colaborador agradeciéndole por la contribución (recordando que es su primera vez y se beneficiaría de un estímulo).
- Merge the PR into `master`.

## Solicitar cambios

- A veces hay problemas con las relaciones públicas que el colaborador debería solucionar, como bifurcaciones incorrectas, HTML roto, información faltante, tarjeta colocada en el lugar equivocado. Cualquier cosa en la que el tutorial no se haya seguido correctamente (y no simples conflictos de fusión).
- Iniciar una revisión de código en GitHub y solicitar cambios. Intente ser lo más descriptivo posible, comente la línea exacta, dígales exactamente cuál es el problema y cómo solucionarlo, y anímelos a que esto es una parte normal del proceso de revisión de relaciones públicas.
- Cuando esté listo envíe la reseña.
- Esté atento a la conversación en caso de que el colaborador tenga preguntas de seguimiento con las que pueda ayudar. Nuestro objetivo es que todos pasen la línea de meta, por eso intentamos guiarlos hasta allí.
- Una vez que corrijan los cambios solicitados, el PR se puede fusionar con `master`.

Por favor, siempre pruebe que los cambios no hayan roto el proyecto y que la página en vivo aún funcione como se esperaba. Siempre es mejor probar los cambios localmente antes de fusionarlos y nunca fusionar nada que parezca sospechoso.

## Herramientas

Si no hay muchos PR acumulados, todo este proceso se puede realizar directamente en la página de GitHub del proyecto.
Sin embargo, no es raro tener algunos RP esperando y ahí es cuando inevitablemente habrá algunos conflictos de fusión. Puede utilizar cualquier herramienta con la que esté familiarizado para ver diferencias y solucionar conflictos.
Recomiendo el uso de una herramienta como [GitKraken](https://www.gitkraken.com/download). Es visual y permite una gestión más sencilla del proyecto cuando hay algunos RP por realizar.
Descarga GitKraken, clona el proyecto. El uso de una combinación de su editor de código y la herramienta de fusión de conflictos integrada de GitKraken le brinda control total para revisar rápidamente las relaciones públicas, solucionar conflictos y fusionar.

El proyecto tiene Prettier instalado para garantizar que, independientemente de cómo un colaborador envíe el PR, se aplicará la guía de estilo. El proyecto de esta manera siempre se mantiene con la misma sangría y estilo.
Si nota que el archivo HTML se ve desordenado, ejecute el siguiente código en la raíz del proyecto.

```js
npx prettier --write index.html
```


Debería intentar formatear el archivo y si no puede, le mostrará los errores. A veces, una etiqueta de cierre faltante o un HTML roto se fusionan por error y esta es una buena forma de detectarlo y solucionarlo.

Si alguna vez tienes dudas, siempre puedes mencionarme a mí o a los demás mantenedores en las relaciones públicas o enviarme un mensaje de texto en [Twitter](https://twitter.com/Syknapse).

## Únete a nosotros

Únase a nosotros para ayudar a hacer crecer este proyecto juntos. Ponte en contacto conmigo en [Twitter](https://twitter.com/Syknapse) y envíame tu nombre de usuario de GitHub para poder agregarte. También puedes unirte a nuestra Comunidad de Discord haciendo clic en el botón a continuación:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF '¡Únete a nuestro servidor de Discord!')
