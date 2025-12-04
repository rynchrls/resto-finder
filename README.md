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
cd resto-finder
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

## Environment Variables

This project requires some environment variables to run. Create a `.env.dev` file in the project root:

```env
PORT=5000
CODE=pioneerdevai
NODE_ENV=dev
FSQUARE_API_KEY=your_api_key_here
LLM_MODEL=your_ollama_model_here(I suggest use 'gpt-oss:120b-cloud')
FSQUARE_URL=your_fsquare_api_url_here
OLLAMA_API_KEY=your_ollama_api_key_here
OLLAMA_BASE_URL=ollama_base_api_url_here

```


## Assumptions and Limitations

### Assumptions
- Users only provide a natural language message describing what they want (e.g., “Find open restaurants near me under $20”).
- The LLM is responsible for interpreting the message and converting it into actionable API queries.
- The API assumes the LLM and Foursquare services are available and responsive.
- Default values are applied if optional parameters (,`query`, `min_price`, `open_now`, `near`) are not inferred from the user message.

### Limitations
- The API does not handle authentication or user management.
- Accuracy depends on the LLM’s interpretation; ambiguous or vague messages may produce unexpected results.
- The API does not persist previous searches or cache results; every request triggers live API calls.
- Error handling for external API failures is basic; detailed failures may not always be exposed to the user.
