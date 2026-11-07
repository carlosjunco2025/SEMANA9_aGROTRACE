# 🌾 AgroTrace — Laboratorio 09 (Frontend con React + Vite - Parte I)

Bienvenido al repositorio de la **Semana 09** del proyecto **AgroTrace**. En este laboratorio se dio inicio al desarrollo del frontend de la aplicación web utilizando **React** con **Vite**, estableciendo los fundamentos de componentes funcionales, props y estado local.

---

## 📋 Descripción del Proyecto

Este laboratorio estuvo enfocado en la creación del proyecto base en React, estructurando la arquitectura inicial del cliente web para la gestión de trazabilidad agrícola. Se implementaron los primeros componentes funcionales, paso de datos por `props`, rendering condicional y la introducción al hook `useState`.

---

## 🚀 Arquitectura y Componentes Desarrollados

La estructura inicial del frontend dentro de `src/` incluye:

```text
frontend/
├── src/
│   ├── components/
│   │   ├── FundoCard.jsx      # Ficha funcional para mostrar datos individuales del fundo
│   │   ├── LoteItem.jsx       # Componente hijo para renderizar datos de lotes
│   │   └── Tarjeta.jsx        # Contenedor visual reutilizable
│   ├── App.css                # Estilos visuales base
│   ├── App.jsx                # Componente principal de la aplicación
│   ├── datos.js               # Dataset mock inicial
│   └── main.jsx               # Punto de entrada de React
├── package.json
└── vite.config.js
🛠️ Tecnologías y Herramientas Utilizadas
Biblioteca UI: React (v18+)

Tooling / Bundler: Vite

Lenguaje: JavaScript (ES6+) / JSX

Entorno: Node.js & npm

⚙️ Instalación y Ejecución Local
1. Clonar el repositorio
Bash
git clone [https://github.com/carlosjunco2025/lab09_Agrotrace.git](https://github.com/carlosjunco2025/lab09_Agrotrace.git)
cd lab09_Agrotrace/frontend
2. Permitir ejecución de scripts (PowerShell)
PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
3. Instalar dependencias y levantar el servidor
Bash
npm install
npm run dev
Disponible en http://localhost:5173/.

💡 Conclusiones Técnicas
Fundamentos de React y JSX:

Se comprendió e implementó la sintaxis JSX para combinar la lógica de JavaScript con la estructura de la interfaz dentro de componentes funcionales.

Reutilización mediante Props:

Se logró pasar información de forma unidireccional desde el componente padre (App.jsx) hacia los componentes hijos (FundoCard, LoteItem) mediante el uso de props.

Configuración del Entorno con Vite:

Se configuró exitosamente un entorno de desarrollo rápido con Vite, aprovechando el Hot Module Replacement (HMR) para la construcción ágil de interfaces.
