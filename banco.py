import mysql.connector

conexion=mysql.connector.connect(host="localhost", user="root", passwd="", database="bancopopular")
cursor=conexion.cursor()
cedula = input("ingrese la cedula")
cursor.execute(f"select * from clientes where cedula={cedula}")
respuesta = "ud no tiene cuenta en la identidad"
for fila in cursor:
    nombre=fila[1]
    apellido = fila[2]
    saldo = fila[6]
    respuesta= f"el saldo de la cuenta a nombre de { nombre }{apellido}es{saldo}"

print(respuesta)