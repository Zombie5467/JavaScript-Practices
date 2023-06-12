
print(10//3) #intenta forzar el resultado de la division que sea un numero entero
print(5**2) #5 elevado a la potencia de 2

print('hola '+'python '+'que tal?')
print('hola '+ str(5))
print(3 != 4)


STRING = '\t Este es un string con tabulacion y \n salto de linea'

STRING2 = 'hola este es mi textO'

STRING2.capitalize()
print(STRING2)

# STRING2.title()
# print(STRING2)

# STRING2.upper()
# print(STRING2)
# print(STRING)


# Formateo
NAME, LAST_NAME, AGE = 'Ader', 'Zombie', 23

print('Mi nombre es {} {} y mi edad es {}'.format(NAME, LAST_NAME, AGE))

print('Mi nombre es %s %s y mi edad es %d' %(NAME, LAST_NAME, AGE))

print(f'Mi nombre es {NAME} {LAST_NAME} y mi edad es {AGE}')

