

#hola mundo
print('Hola Python')

#consultar tipo de dato
print(type('Hola Python'))
print(type(5))
print(type(1.2))
print(type(1 + 2j))
print(type(True))


#variables
MY_STR_VARIABLE = 'my string'
MY_INT_VARIABLE = 5
MY_BOOL_VARIABLE  = False

#imprimir varias variables a la vez
print(MY_STR_VARIABLE, MY_INT_VARIABLE, MY_BOOL_VARIABLE)

print('El valor de esta variable es:', MY_BOOL_VARIABLE)

#convirtiendo de entero a string
OTHER_INT_VARIABLE = 6
MY_INT_TO_STR_VARIABLE = str(OTHER_INT_VARIABLE)
print(MY_INT_TO_STR_VARIABLE)
print(type(MY_INT_TO_STR_VARIABLE))


#variables en una sola linea y concatenando
NAME, LAST_NAME, ADDRESS, AGE = 'Mariana', 'Moone', 'NY', '24'
print('Mi nombre es:', NAME, LAST_NAME, 'Mi edad es:', AGE, 'y vivo en la ciudad de:', ADDRESS)

#usando input
FIRST_NAME = input('¿cual es tu nombre?')
YOUR_AGE = input('¿cuantos años tienes?')
print(FIRST_NAME)
print(YOUR_AGE)
