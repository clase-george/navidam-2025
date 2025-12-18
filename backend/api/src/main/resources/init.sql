-- =========================================
-- 1. Borrar tablas si existen
-- =========================================
DROP TABLE IF EXISTS personas;

-- =========================================
-- 2. Crear tabla Personas
-- =========================================
CREATE TABLE personas
(
    id       BIGSERIAL PRIMARY KEY,
    nombre   VARCHAR(100) NOT NULL,
    email    VARCHAR(255) NOT NULL UNIQUE
);