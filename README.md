# Restaurant Finder API

LLM-Powered Foursquare Restaurant Search\
**Coding Challenge**

## 📌 Project Description

The **Restaurant Finder API** converts **free-form natural language**
into a structured JSON command using an LLM (Ollama).\
The generated JSON is then used to query the **Foursquare Places API**
and return accurate restaurant results.

This project demonstrates: - Natural language → structured JSON
conversion

- Integration with Foursquare Places API
- Clean and scalable Node.js architecture
- TypeScript modular design
- Secure API access using `?code=pioneerdevai`

## 🧱 Folder Structure

    src/
    │
    ├── controller/
    │   └── index.ts
    ├── external/
    │   └── index.ts
    ├── middleware/
    │   └── index.ts
    ├── ollama/
    │   └── index.ts
    ├── repository/
    │   └── index.ts
    ├── routes/
    │   └── index.ts
    ├── service/
    │   └── index.ts
    ├── type/
    │   └── index.ts
    ├── config.ts
    └── index.ts

## 🔥 Features

### ✔ Natural Language Parsing (LLM)

Example input:\
"Find me cheap Korean BBQ near Makati that's open right now."

Output JSON:

```json
{
  "query": "Korean BBQ",
  "min_price": 1,
  "open_now": true,
  "near": "Makati"
}
```

### ✔ Foursquare Places Search

Uses the JSON output to call `/places/search`

### ✔ Secured Endpoint

Requires: `?code=pioneerdevai`

## 🛠️ Installation & Setup

### 1. Clone

```sh
git clone <your-repo-url>
cd restaurant-finder-api
```

### 2. Install

```sh
yarn install
```

### 4. Build

```sh
yarn build
```

### 5. Start

```sh
yarn start
```

## 🔍 API Usage

### GET /api/execute

Params: - `message` (required) - `code=pioneerdevai`

Example:

    /api/execute?message=Find sushi in Manila&code=pioneerdevai

## 📦 Example Response

```json
{
  "data": {
        "results": [
    {
      "fsq_place_id": "String",
      "categories": "Array",
      "distance": "Number",
      "email": "String",
      "location": "Object",
      "name": "String"
    }
  ]
   },
"message": "Restaurent Find!"
}
```
