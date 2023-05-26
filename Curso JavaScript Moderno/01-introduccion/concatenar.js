const product = 'Monitor',
      price = '30 usd';

      //usando backtip (``) para concatenar, en español = acento grave
      console.log(`El producto: ${product} tiene un precio de ${price}`);


const text = '    texto con espacio    ';

        console.log(text);

        //quitar los espacios al texto con metodos
        // console.log(text.trimStart());
        // console.log(text.trimEnd());

        console.log(text.trimStart().trimEnd());

        //la forma corta, start y end se usan solo de ser necesario
        console.log(text.trim());



        //reemplazando texto en una cadena de texto

const tv27 = 'monitor de 27 pulgadas',
      tvLed = 'monitor LED';

      console.log(tv27);
      console.log(tv27.replace('pulgadas', '"'));
      console.log(tvLed.replace('LED', 'Curve'));

