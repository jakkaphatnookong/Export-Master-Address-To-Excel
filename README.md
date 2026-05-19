# 🇹🇭 Thailand Address Master Excel Generator

Generate a clean and styled Excel Address Master (`.xlsx`) from separated JSON files:

- Province
- District
- Sub-district
- ZipCode

Perfect for:

- Address master management
- Data migration
- E-commerce systems
- ERP / POS systems
- Shipping integrations

---

## ✨ Features

- ✅ Generate Excel (`.xlsx`)
- ✅ Styled headers with category colors
- ✅ Frozen header row
- ✅ Auto filter
- ✅ Zebra rows
- ✅ Fast in-memory joins using `Map()`
- ✅ TypeScript support
- ✅ Clean and maintainable structure

---

## 📦 Tech Stack

- Node.js
- TypeScript
- ExcelJS

---

## 📁 Project Structure

```text
src
├── input
│   ├── province.json
│   ├── district.json
│   └── subdistrict.json
│
├── output
│   └── address.xlsx
│
└── index.ts
```

---

## 🚀 Installation

```bash
npm install
```

Install dependencies:

```bash
npm install exceljs
npm install -D typescript ts-node @types/node
```

---

## ▶️ Run Project

```bash
npm start
```

Generated file:

```text
src/output/address.xlsx
```

---

## 📊 Output Columns

| Column       |
| ------------ |
| Country      |
| Province     |
| จังหวัด      |
| District     |
| เขต/อำเภอ    |
| Sub-district |
| แขวง/ตำบล    |
| ZipCode      |

---

## 🎨 Excel Styling

| Category     | Color  |
| ------------ | ------ |
| Country      | Gray   |
| Province     | Blue   |
| District     | Green  |
| Sub-district | Orange |
| ZipCode      | Purple |

---

## ⚙️ tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": false,
    "skipLibCheck": true,
    "types": ["node"]
  }
}
```

---

## 📜 package.json

```json
{
  "scripts": {
    "start": "ts-node src/index.ts"
  }
}
```

---

## 🧠 Performance

This project uses `Map()` for lookup joins instead of `.find()` to improve performance when processing large address datasets.

---

## 📌 Notes

- Output file must be `.xlsx`
- CSV format does not support styling/colors
- Recommended viewers:
  - Microsoft Excel
  - WPS Office

---

## 📄 License

MIT
