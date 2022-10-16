# 100daysofcode

este es mi commit inicial

# Día 1

- git
- github
- crear repositorio
- crear llave ssh
- git add "nombre de archivo" (subir archivo a staging)
- git commit -m "mensaje de commit" (commit)
- git push origin master (subir cambios)
- markdown

## Notas

- git controlador de versiones
- github manejador de repositorios remoto de git
- git reset --hard "hash" (para moverse entre commits)
- git reset "nombre del archivo" (para bajar del staging)
- git log (para ver los commits previos al head)
- git log --oneline (para verlo resumido)
- git reflog

# Día 2

- html (HyperText Markup Language)
- index.html (es el archivo raiz)
- html es un lenguaje de marcado que sirve para estructurar una pagina web
- doctype (es lo que describe el tipo de documento)
- head (contiene metadatos que no estan a la vista del usuario a excepcion del title)
- body (contiene todos los elementos de una página web)
- etiquetas
- h (título)
- p (párrafo)
- b (negrita)
- strong (negrita, keyword)
- i (cursiva)
- em (cursiva, el lector de pantalla hace enfasís en el párrafo)

## Notas

- solo puede haber un h1 por documento
- debe de existir el h anterior partiendo desde el h1
- el h1 es opcional siempre y cuando ya exista un h1 en otra página
- nunca utilizar un h solo por estilo (debe de ser utilizado de manera jerárquica)
- strong funciona como keyword (ayuda a posicionar la pagina, no debe de ser usado sólo por estilo)

# Día 3

- tablas
- table
- thead (cabecera de tabla)
- th (encabezado)
- tbody (cuerpo de la tabla)
- tr (renglón)
- td (table data cell)
- tfoot (pie de tabla)

## Notas

- los th van dentro del thead
- los td van dentro del tr
- la cantidad de td debe de ser igual a la de th
- tr, td y se úbican dentro de tbody

# Día 4

- estructura de una etiqueta
- listas ordenadas
- listas desordenadas (Bullet lists)
- a (Anchor tag)
- ol (ordered list)
- ul (unordered list)
- li (list item)

## Notas

- las etiquetas pueden tener atributos
- a (anchor tag) se utiliza para agregar links
- <a>href="" target="\_blank"</a> redirecciona al link manteniendo la página principal

# Día 5

- elementos en bloque
- elementos en línea
- img
- div

## Notas

- los elementos en bloque abarcan todo el espacio de la linea de izquierda a derecha
- los elementos en línea abarcan unicamente el tamaño del contenido
- la etiqueta img se usa para agregar imagenes (src="fuente de la imagen" alt="descripción de la imagen")
- div y span cumplen función de contenedor

# Día 6

- HTML Semántico
- input (espacio para capturar datos)
- buttons (boton)
- aside (contenido lateral de la página web)
- main (envuelve el contenido principal)
- nav (contenido de navegación de la página)

## Notas

- es la correcta utilización de las etiquetas HTML y prevenir maquetar toda la página web con divs y spans
- style="list-style: none" (elimina los puntos "bullets" de una lista desordenada)
- style="text-decoration: none; color: #000000" (cambia el texto a color negro)

# Día 7

- CSS (3 fomas de aplicar estilos)

## Notas

- style,
- selector (etiqueta, clase o ID)
- clase es para estilos
- ID es para funcionabilidad de la página web (javascript)
- .clase (selecciona un elemento mediante una clase)
- "\*" es el selector universal (según la teoría)
- las tres formas de aplicar estilos son
  mediante un archivo de css, con una etiqueta style dentro del header, con el atributo style en la etiqueta o elemento

# Día 8

- The Box Model
- height (alto)
- border (border-width,border-color,border-style)
- width (ancho)
- padding (el espacio del contenido con relación al borde)
- margin (el espacio de la caja con relación a otros elementos)

## Notas

- el margin y padding por defecto es 8px
- en css todo elemento es tratado como una caja
- box-sizing: border-box; (respeta los valores de alto y ancho asignados al elemento)

# Día 9

- flexbox
- display flex
- justify-content
- flex-direction

## Notas

- display: flex (todo elemento dentro de un contenedor va a pasar a ser un elemento en linea)
- justify-content: flex-end; (mueve los elementos hasta el final del contenedor)
- justify-content: flex-start; (mueve los elementos al inicio del contenedor)
- justify-content: space-between; (separa los elementos del contenedor manteniendo una distancia igual entre cada elemento sin alejarse de los bordes)
- justify-content: space-around; (separa los elementos dejando hacia los bordes la mitad del espacio entre los elementos)
- justify-content: space-evenly; (separa los elementos del contenedor manteniendo el mismo espacio entre los elementos y el borde del contenedor)
- flex-direction: (se utiliza para definir la dirección del contenido)
- gap: (para separar elementos de un mismo contenedor entre si )
- border-radius: (redondea el borde del elemento)
- border: (para dar ancho al borde)

# Día 10

## Notas

- se trabajó en refuerzo del proyecto

# Día 11

- text-transform: uppercase (convierte el texto a mayúsculas)

## Notas

- se trabajó en la barra de busqueda (agregando función)

# Día 12

- position: absolute; (permite que el elemento se mueva libremente en el contenedor)

## Notas

# Día 13

- align-items (acomoda el contenido en el eje Y)
- align-self (acomoda un elemento en específico)

# Día 14

- se trabajó en la selección de colores

## Notas

- overflow: hidden;

# Día 15

- se trabajó en la galería del Mirage

# Día 16

- ultimos detalles de la galería

# Día 17

- introducción a javascript

# Día 18

- var

## Notas

- las variables son datos almacenados en memoria
- tipos de datos que se pueden usar como variables >>
- strings (son cadenas de texto)
- numbers
- booleans (verdadero ó falso)
- arrays (arreglos)
- object

# Día 19

- funciones
- dom (document object model)

## Notas

# Día 20

- abstracción
- ciclo for

## Notas

- dentro de un arreglo pueden estar elementos estaticos y objetos
- i significa index en el ciclo for
