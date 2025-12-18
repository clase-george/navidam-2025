# Endpoints

## 1) Personas 

Los siguientes endpoints listarán, crearán y eliminarán datos de personas de una base de datos.

### 1.1 Listar personas

**GET** /api/personas

**Query opcional**: q (buscar por nombre/email)

**Response 200**

```json
[
  { "id": "1", "nombre": "Ana", "email": "ana@email.com" },
  { "id": "2", "nombre": "Carlos", "email": "carlos@email.com" }
]
```

> Cómo una primera aproximación podríais devolver una lista "mockeada" desde el controller.

---

### 1.2 Crear persona

**POST** /api/personas

**Request**

```json
{ "nombre": "Ana", "email": "ana@email.com" }
```

**Response 201**

```json
{ "id": "1", "nombre": "Ana", "email": "ana@email.com" }
```

**Errores recomendados**

- **400** si email inválido o nombre vacío
- **409** si email duplicado

---

### 1.3 Eliminar persona

> Este endpoint podría ser opcional de primeras

**DELETE** /api/personas/{id}

**Response 204** (sin body)

**404** si no existe.

---

## 2) Plantillas (SDK) — Thymeleaf

> En Thymeleaf, el backend renderiza usando una
>
>
> **plantilla**
>
> **modelo**
>

> Para React es clave saber:
>
>
> **plantillas disponibles**
>
> **campos requeridos**
>

### **2.1 Listar plantillas disponibles**

**GET** /api/plantillas

**Response 200**

```json
[
  { "id": "navidad-bonita", "titulo": "Navidad Bonita" },
  { "id": "minimal", "titulo": "Minimal" }
]
```

La información de este endpoint se obtendrá llamando a la SDK

```java
List<Plantilla> plantillas = NaviDAMAPI.getInstance().listadoPlantillas();
```

---

### **2.2 Detalle de plantilla (campos requeridos)**

**GET** /api/plantillas/{id}

**Response 200**

```json
{
  "id": "navidad-bonita",
  "titulo": "Navidad Bonita",
  "descripcion": "Postal con nieve y mensaje principal.",
  "camposRequeridos": [
    { "key": "remitente", "label": "Remitente", "type": "text", "required": true, "placeholder": "Tu nombre" },
    { "key": "mensaje", "label": "Mensaje", "type": "textarea", "required": true, "placeholder": "Escribe tu felicitación..." },
    { "key": "firma", "label": "Firma", "type": "text", "required": false, "placeholder": "Opcional" }
  ]
}
```

**404** si la plantilla no existe en la SDK.

> Nota:
>
>
> **no devolvemos el HTML/plantilla**
>

---

## **3) Melodías (SDK)**

### **3.1 Listar melodías disponibles**

**GET** /api/melodias

**Response 200**

```json
[
  { "id": "campanitas", "titulo": "Campanitas" },
  { "id": "cumple", "titulo": "Cumpleaños feliz" }
]
```

La información de este endpoint se obtendrá llamando a la SDK

```java
List<Melodia> melodias = NaviDAMAPI.getInstance().listadoMelodias();
```

---

## 4) Postales (preview + envío)

Aquí está el “núcleo”: React manda destinatarioId + plantillaId + melodiaId + campos.

El backend:

- valida persona (BD),
- valida plantilla/melodía (SDK),
- renderiza con **Thymeleaf** (HTML final),
- genera MIDI (SDK),
- y en **enviar** llama a n8n.

### **4.1 Previsualizar (render Thymeleaf → HTML)**

**POST** /api/postales/preview

**Request**

```json
{
  "destinatarioId": "1",
  "plantillaId": "navidad-bonita",
  "melodiaId": "campanitas",
  "campos": {
    "remitente": "Carlos",
    "mensaje": "¡Feliz Navidad!",
    "firma": "DAM"
  }
}
```

**Response 200**

```json
{
  "html": "<!doctype html><html>...</html>"
}
```

**Errores**

- **400** si faltan campos requeridos (según /api/plantillas/{id})
- **404** si no existe destinatario o plantilla o melodía

---

### **4.2 Enviar postal (delegando en n8n)**

**POST** /api/postales/notificacion

**Request** (igual que preview)

```json
{
  "destinatarioId": "1",
  "plantillaId": "navidad-bonita",
  "melodiaId": "campanitas",
  "campos": {
    "remitente": "Carlos",
    "mensaje": "¡Feliz Navidad!",
    "firma": "DAM"
  }
}
```

**Qué envía el backend a n8n (payload recomendado)**

```json
{
  "to": { "nombre": "Ana", "email": "ana@email.com" },
  "subject": "🎄 Postal NaviDAM",
  "html": "<!doctype html><html>...</html>",
  "attachments": [
    { "filename": "melodia.mid", "contentType": "audio/midi", "base64": "TVRoZAAAA..." }
  ],
  "meta": {
    "plantillaId": "navidad-bonita",
    "melodiaId": "campanitas"
  }
}
```
A continuación se muestra un ejemplo de como podría ser nuestra llamada a n8n desde el backend.

```java
package com.tuapp.navidam.service;

import com.tuapp.navidam.n8n.N8nClient;
import com.tuapp.navidam.n8n.N8nWebhookRequest;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class PostalSendService {

    private final N8nClient n8nClient;

    public PostalSendService(N8nClient n8nClient) {
        this.n8nClient = n8nClient;
    }

    public void enviarPostal(String to, String subject, String html, byte[] midiBytes) {
        String base64 = Base64.getEncoder().encodeToString(midiBytes);

        N8nWebhookRequest payload = new N8nWebhookRequest(
                to,
                subject,
                html,
                new N8nWebhookRequest.MidiPayload(
                        "melodia.mid",
                        "audio/midi",
                        base64
                )
        );

        n8nClient.sendPostal(payload);
    }
}
```

**Response 200**

```json
{
  "estado": "OK",
  "mensaje": "Postal enviada",
  "publicUrl": "https://.../postal.html"
}
```

**Errores**

- **400** validación de campos
- **502** si n8n falla (recomendado)
- **504** si timeout llamando a n8n (recomendado)

---