FROM openjdk:11-jre-slim
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} santa.jar
ENTRYPOINT ["java","-jar","/santa.jar"]