## Guía para Mantenedores
Esta guía está destinada a aquellos que deseen unirse al proyecto como mantenedores, para ayudar a gestionar y mantener el proyecto para la comunidad. (Esta no es una guía para contribuyentes por primera vez).

## Traducciones
Este tutorial también está disponible en[otros idiomas](translations/README.md)
| [Inglés](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chino (Tradicional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [Alemán](translations/maintainer_guide/maintainer_guide.ger.md) | [Hindi](translations/maintainer_guide/maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Italiano](translations/maintainer_guide/maintainer_guide.ita.md) | [Japonés](translations/maintainer_guide/maintainer_guide.jpn.md) | [Portugués](translations/maintainer_guide/maintainer_guide.por.md) | [Ucraniano](/translations/maintainer_guide/maintainer_guide.ukr.md) | [Francés (française)](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/maintainer_guide/maintainer_guide.fra.md) 
| [español](translations/maintainer_guide/maintainer_guide.spa.md) 

> Las traducciones de la documentación de proyectos son bienvenidas. Lee la [`Guía de Traducción`](translations/README.md) para contribuir.


## Objetivos
Nuestro objetivo principal es brindar a nuestros colaboradores la retroalimentación más rápida posible desde el momento en que realizan su solicitud de extracción (pull request).
Esto implica principalmente realizar revisiones de código y fusionar las solicitudes de extracción (PR) aceptadas.
Además de ello, podemos mantener el proyecto asegurándonos de que todo funcione correctamente y sea tan útil y beneficioso como sea posible para nuestros colaboradores.

## ¿Para quién es esto?
Cualquiera con un poco de habilidades en Git y GitHub. No es necesario ser un experto; esta guía debería ayudar incluso a principiantes.
Este es un proyecto activo que recibe contribuciones regulares y ayuda a muchas personas a realizar su primera contribución de código abierto.
Ser un mantenedor en este proyecto ayuda a asegurarse de que continúe brindando a nuestros colaboradores una buena primera experiencia e incentivarlos a contribuir más.
Puedes comprometer tanto tiempo como desees a esto. Entre todos, con suerte, podemos mantenerlo funcionando sin problemas.

## Metodología
Dirígete a la sección de solicitudes de extracción (pull requests) del proyecto, comienza con la solicitud de extracción más antigua que no se encuentre en el estado de 'cambios solicitados'.
Abre una solicitud de extracción y ve a la pestaña de cambios de archivos para iniciar una revisión de código.
Verifica la solicitud de extracción y asegúrate de que cumple con las especificaciones del tutorial.
Asegúrate de que el HTML, los enlaces y los datos estén correctos. Asegúrate de que la tarjeta esté posicionada al principio del archivo donde debe estar.
A continuación, busca conflictos. Fusiona la rama principal `master` en la rama de la solicitud de extracción para resolver los conflictos. Los conflictos suelen ocurrir cuando ha pasado un tiempo desde las fusiones anteriores y varias solicitudes de extracción utilizan la misma versión desactualizada.
Si este es el caso, resuelve el conflicto. Por lo general, tendrás que agregar la nueva tarjeta encima de las tarjetas que se hayan agregado desde que se creó la bifurcación.
Si todo lo demás está bien, aprueba la solicitud de extracción, escribe un mensaje al colaborador agradeciéndole por su contribución (recuerda que son principiantes y se beneficiarán de estímulo).
Fusiona la solicitud de extracción en la rama principal `master`.

## Solicitar cambios
A veces, hay problemas con la solicitud de extracción (PR) que deben ser corregidos por el colaborador, como la bifurcación incorrecta, HTML roto, información faltante o una tarjeta ubicada en el lugar incorrecto.
Cualquier cosa en la que el tutorial no se haya seguido correctamente (y no sean conflictos de fusión simples).
Inicia una revisión de código en GitHub y solicita cambios. 
Trata de ser lo más descriptivo posible, comenta la línea exacta, indícales con precisión cuál es el problema y cómo solucionarlo, y anímales a que esto es una parte normal del proceso de revisión de PR.
Cuando estés listo, envía la revisión.
Mantente atento a la conversación por si el colaborador tiene preguntas de seguimiento a las que puedas ayudar.
Nuestro objetivo es ayudar a todos a llegar a la línea de meta, por lo que intentamos guiarlos en todo el proceso.
Una vez que hayan corregido los cambios solicitados, la PR puede fusionarse en la rama principal `master`.
Por favor, siempre verifica que los cambios no hayan afectado el proyecto y que la página en vivo siga funcionando como se espera.
Siempre es mejor probar los cambios localmente antes de fusionarlos y nunca fusionar nada que parezca sospechoso.

## Herramientas
Si no hay muchas PR acumuladas, todo este proceso se puede realizar directamente en la página de GitHub del proyecto.
Sin embargo, no es raro tener algunas PR pendientes, y en ese caso, inevitablemente habrá conflictos de fusión.
Puedes utilizar cualquier herramienta con la que estés familiarizado para ver diferencias y solucionar conflictos.
Recomiendo el uso de una herramienta como GitKraken[GitKraken](https://www.gitkraken.com/download). Es visual y permite una gestión más sencilla del proyecto cuando hay varias PR que revisar.
Descarga GitKraken, clona el proyecto. Utilizando una combinación de tu editor de código y la herramienta integrada de resolución de conflictos de GitKraken, tendrás un control completo para revisar rápidamente las PR, solucionar conflictos y fusionarlos.
El proyecto tiene Prettier instalado para garantizar que, independientemente de cómo un colaborador envíe la PR, se aplique la guía de estilo. De esta manera, el proyecto siempre se mantiene con la misma sangría y estilo.
Si notas que el archivo HTML se ve desordenado, ejecuta el siguiente código en la raíz del proyecto:
npx prettier --write index.html
Esto formateará el archivo HTML de acuerdo con las reglas de estilo definidas por Prettier.

## Únete a nosotros
Únete a nosotros para ayudar a hacer crecer este proyecto juntos.
Ponte en contacto conmigo en [Twitter](https://twitter.com/Syknapse) y envíame tu nombre de usuario de GitHub para que pueda agregarte. 
También puedes unirte a nuestra comunidad en Discord haciendo clic en el botón de abajo:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')





