const texto1 = "primer texto para cortar con slice",
      texto2 = "segundo texto para cortar con substring";

      //el 12 y el 13 es el numero de la letra donde comienza a cortar\
      
      console.log(texto1.slice(0, 12)); //el primer numero siempre debe ser mas bajito

      console.log(texto2.substring(13, 0)); //la diferencia de este y slice es que si el primer numero es mas alto, lo reordena

       //practica con split, divide las palabras a partir del valor dado, en este caso una coma

const texto3 = "guitarra, bateria, piano, voz, percucion, trompeta";

     console.log(texto3.split(", "));