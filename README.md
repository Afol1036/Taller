1. Componentes UI y Funcionales
Pregunta 1
¿Cuál es la diferencia entre un componente UI y un componente funcional en React?
-Un componente de UI es cualquier parte visual que se muestra en la pantalla, como botones, formularios, etc. Está relacionado con lo que el usuario ve e interactúa.
-Un componente funcional es un tipo de componente en React que se define como una función de JavaScript y regresa (o "renderiza") elementos de UI.
2. Props
Pregunta 2
¿Qué son las props en React y cuál es su propósito principal?
-Las props son la forma en que un componente en React recibe datos desde su componente padre. Son argumentos que pasas a los componentes, y su principal propósito es personalizar y reutilizar componentes. Las props permiten que el componente sea dinámico, recibiendo distintos valores.
3. Children Props
Pregunta 3:
¿Qué son los children props en React y por qué no se recomienda su uso excesivo?
-Los children props son un tipo especial de prop que permite que un componente en React incluya otros elementos o componentes dentro de él. Básicamente, son el contenido que se encuentra entre las etiquetas de apertura y cierre del componente.Se desaconseja abusar de ellos porque pueden hacer que el código sea menos claro y más difícil de mantener, sobre todo cuando se puede utilizar otro enfoque para organizar los componentes.
4. useState
Pregunta 4:
¿Qué es useState en React y para qué se utiliza principalmente?
-El useState es un hook en React que permite añadir estado a los componentes funcionales. El estado es una forma de que los componentes recuerden información entre renderizados. Con useState, puedes crear variables que React "recuerda" y actualiza cuando es necesario.
