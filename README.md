# Proyecto 2025-A

Este proyecto será desarrollado durante el ciclo 2025-A de manera incremental.

## Descripción

- El objetivo principal es implementar un sistema que evolucione a lo largo del semestre, incorporando nuevas funcionalidades y mejoras en cada iteración.

## Colaboradores (usuario github)
## Gestión de Ramas

- La rama `main` y las ramas que siguen el formato `incremento_#` (donde `#` es el número de incremento) serán gestionadas exclusivamente por el profesor.
- Para realizar cambios, cada estudiante deberá crear una nueva rama siguiendo el formato `branch_nombre_y_apellido_del_estudiante` (por ejemplo, `branch_Pepito_Pérez`).

## Pasos para trabajar con el repositorio

1. **Clonar el repositorio**  
    Ejecuta el siguiente comando para clonar el repositorio en tu máquina local:  
    ```bash
    git clone https://github.com/dannyguaman/2025-A-Proyecto_de_clase.git
    cd 2025-A-Proyecto_de_clase
    ```

2. **Actualizar el repositorio para ver nuevos incrementos**  
    Cada vez que el profesor haga un cambio, actualiza tu repositorio local con:  
    ```bash
    git fetch origin
    git pull origin main
    ```

3. **Crear tu propia rama**  
    Antes de realizar cambios, crea una nueva rama con el siguiente comando:  
    ```bash
    git checkout -b branch_nombre_y_apellido_del_estudiante
    ```

4. **Realizar cambios y hacer un commit**  
    Después de realizar los cambios en tu rama, guarda los cambios con:  
    ```bash
    git add .
    git commit -m "Descripción breve de los cambios realizados"
    ```

5. **Subir tu rama al repositorio remoto**  
    Sube tu rama al repositorio remoto con:  
    ```bash
    git push origin branch_nombre_y_apellido_del_estudiante
    ```

6. **Solicitar un Pull Request (PR)**  
    Las ramas de cada estudiante no serán fusionadas con las ramas gestionadas por el profesor, ya que estas son exclusivamente para el aprendizaje individual.  
    Sin embargo, si encuentras un error en los incrementos realizados por el profesor, deberás crear un Pull Request para notificar y proponer una solución.  
    Ve al repositorio en GitHub y crea un Pull Request detallando el error encontrado y los cambios propuestos.

## Notas Adicionales

- Asegúrate de mantener tu rama actualizada con los cambios realizados por el profesor en la rama `main` o en las ramas `incremento_#` utilizando:  
    ```bash
    git fetch origin
    git merge origin/main
    ```
    o, si estás trabajando con un incremento específico:  
    ```bash
    git fetch origin
    git merge origin/incremento_#
    ```

## Colaboradores (usuarios de GitHub)
- M47H3W1 - mathew.gutierrez@epn.edu.ec
- Pato677 - patricio.sanchez02@epn.edu.ec
- Ssunsito - santiago.pila@epn.edu.ec
- kevin19925 - kevinqui1_@hotmail.com
- CDanny13 - carlos.neacato@epn.edu.ec
- cedamoch - cedamoch@gmail.com
- jeanpollcardosochiriboga - jean.cardoso@epn.edu.ec
- AlexHe777 - gustavo.herrera03@epn.edu.ec
- JoseC982 - josecondor02@hotmail.com
- jhonny-r - jhonnyruiz.v@hotmail.com
- FaBrii-ID97 - fabricio.tixe@epn.edu.ec
- LuisKan - luis.guerrero01@epn.edu.ec
- JordyPat1308 - jordy.mayorga@epn.edu.ec
- OscarSala98 - oscar.sala@epn.edu.ec
- Sabii1106 - Sabina.alomoto@epn.edu.ec
- Sramos13 - solramos64@outlook.com
- TPanchoX - Francisco.imbaquinga@epn.edu.ec

## Notas

- Este archivo README será actualizado conforme avance el desarrollo del proyecto.
