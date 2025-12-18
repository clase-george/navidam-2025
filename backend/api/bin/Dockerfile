# ---- STAGE 1: build ----
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copiamos primero el pom para aprovechar cache de dependencias
COPY pom.xml .
RUN mvn -q -e -DskipTests dependency:go-offline

# Copiamos el resto del código y compilamos
COPY src ./src
RUN mvn -q -DskipTests package

# ---- STAGE 2: runtime ----
FROM eclipse-temurin:21-jre
WORKDIR /app

# (Opcional) usuario no-root
RUN useradd -m spring
USER spring

# Copiamos el jar generado
COPY --from=build /app/target/*.jar app.jar

# Puerto típico de Spring
EXPOSE 8080

# Arranque
ENTRYPOINT ["java", "-jar", "app.jar"]