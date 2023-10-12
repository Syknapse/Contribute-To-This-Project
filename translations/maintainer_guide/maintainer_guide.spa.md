# Guía para Mantenedores

   Esta guía está destinada a aquellos que desean unirse al proyecto como mantenedores, para 
   ayudar a administrar y mantener el proyecto para la comunidad.(Esta no es una guía para
   contribuyentes por primera vez).

##Traducciones

 "Este tutorial también está disponible en otros idiomas."

 | [English](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) | [Hindi](translations/maintainer_guide/maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Italian](translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md) | [Portuguese](translations/maintainer_guide/maintainer_guide.por.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) |
[Spanish](/translation/maintainer_guide/maintainer_guide.spa.md)

  Las traducciones para la documentación de proyectos son bienvenidas. Lee la [`Guía de Traducción`]
  (translations/README.md)para contribuir."

  
## Objetivos
Nuestro principal objetivo es brindar a nuestros colaboradores la retroalimentación más rápida posible desde el momento en que hacen su solicitud de extracción (pull request). Esto 
significa principalmente realizar revisiones de código y fusionar solicitudes de extracción aceptadas. Además de eso, podemos mantener el proyecto asegurándonos de que todo funcione 
correctamente y sea tan útil y valioso como sea posible para nuestros colaboradores.

## ¿Para quiénes es esto?
Para cualquier persona con un poco de habilidad en Git y GitHub. No es necesario ser un experto; esta guía debería ser útil incluso para principiantes. Este es un proyecto activo que recibe contribuciones regulares y ayuda a muchas personas a realizar su primera contribución de código abierto. Ser mantenedor en este proyecto ayuda a garantizar que siga brindando a nuestros colaboradores una buena experiencia inicial y los alienta a contribuir más.

Puedes comprometerte tanto o tan poco como desees en esto. Entre todos, con suerte, podemos mantenerlo funcionando sin problemas.

## Metodología
* Ve a la sección de solicitudes de extracción del proyecto y comienza con la solicitud de extracción más antigua que no esté en estado de 'cambios solicitados'.
* Abre una solicitud de extracción y ve a la pestaña de cambios de archivos para iniciar una revisión de código.
* Comprueba la solicitud de extracción y asegúrate de que siga las especificaciones del tutorial.
* Asegúrate de que el HTML, los enlaces y los datos sean correctos. Asegúrate de que la tarjeta esté ubicada al principio del archivo donde debería estar.
* A continuación, verifica si hay conflictos. Fusiona master en la rama de la solicitud de extracción para corregir los conflictos. Los conflictos suelen ocurrir cuando ha pasado un tiempo 
  desde las fusiones anteriores y varias solicitudes de extracción utilizan la misma versión desactualizada.
* Si este es el caso, soluciona el conflicto. Por lo general, deberás agregar la nueva tarjeta encima de las tarjetas que se agregaron desde que se hizo el fork.
* Si todo lo demás está bien, aprueba la solicitud de extracción, escribe un mensaje al colaborador agradeciéndole por la contribución (recordando que son nuevos en esto y se beneficiarán 
  de estímulo).
* Fusiona la solicitud de extracción en master.
## Solicitar cambios
* A veces hay problemas con la solicitud de extracción que deben ser solucionados por el colaborador, como ramas incorrectas, HTML roto, información faltante o una tarjeta ubicada en el 
  lugar incorrecto. Cualquier cosa en la que el tutorial no se haya seguido correctamente (y no conflictos de fusión simples).
* Inicia una revisión de código en GitHub y solicita cambios. Trata de ser lo más descriptivo posible, comenta la línea exacta, indícales exactamente cuál es el problema y cómo 
  solucionarlo, y anímalos a que esto es una parte normal del proceso de revisión de solicitudes de extracción.
* Cuando estés listo, envía la revisión.
* Mantente atento a la conversación por si el colaborador tiene preguntas de seguimiento en las que puedas ayudar. Nuestro objetivo es llevar a todos al final, así que tratamos de guiarlos 
  todo el camino.
* Una vez que solucionen los cambios solicitados, la solicitud de extracción se puede fusionar en master.
  Por favor, siempre prueba que los cambios no hayan dañado el proyecto y que la página en vivo siga funcionando como se espera. Siempre es mejor probar los cambios localmente antes de 
  fusionar y nunca fusionar nada que parezca sospechoso.

## Herramientas
Si no hay muchas solicitudes de extracción acumuladas, todo este proceso se puede realizar directamente en la página de GitHub del proyecto.
Sin embargo, no es raro que haya algunas solicitudes de extracción en espera, y en ese momento inevitablemente habrá algunos conflictos de fusión. Puedes usar las herramientas con las que estés familiarizado para ver las diferencias y solucionar conflictos.
Recomiendo el uso de una herramienta como GitKraken. Es visual y permite una gestión más sencilla del proyecto cuando hay algunas solicitudes de extracción que revisar. Descarga GitKraken, clona el proyecto. Utiliza una combinación de tu editor de código y la herramienta integrada de GitKraken para resolver conflictos de fusión y fusionar rápidamente las solicitudes de extracción.

El proyecto tiene Prettier instalado para garantizar que, independientemente de cómo un colaborador envíe la solicitud de extracción, se aplique la guía de estilo. De esta manera, el proyecto siempre se mantiene con la misma sangría y estilo.
Si notas que el archivo HTML se ve desordenado, ejecuta el siguiente código en la raíz del proyecto:

```js
npx prettier --write index.html
```

Debería intentar dar formato al archivo y, si no puede, te mostrará los errores. A veces, por error, se fusiona una etiqueta de cierre que falta o HTML roto, y esta es una buena manera de detectarlo y solucionarlo.

Si alguna vez tienes dudas, siempre puedes mencionarme a mí o a los otros mantenedores en la solicitud de extracción (PR) o enviarme un mensaje directo en [Twitter](https://twitter.com/Syknapse).

## Únete a nosotros

Únete a nosotros para ayudar a hacer crecer este proyecto juntos. Ponte en contacto conmigo en [Twitter](https://twitter.com/Syknapse) y envíame tu nombre de usuario de GitHub para que pueda añadirte. También puedes unirte a nuestra comunidad de Discord haciendo clic en el botón de abajo:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')
