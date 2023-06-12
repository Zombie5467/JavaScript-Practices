




import math

peso = float(input('Ingrese su peso en Kg: '))
estatura = float(input('Ingrese su estatura en metros: '))

IMC = round(peso/math.pow(estatura,2),1)
print('su IMC es de: '+str(IMC))
