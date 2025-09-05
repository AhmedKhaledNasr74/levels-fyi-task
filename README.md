# 📊 Interactive Data Table

An interactive data table built with **React + TypeScript + TailwindCSS**.  
It supports **sorting, filtering, multiple string column searching, and pagination**, making it ideal for displaying tabular datasets (like products).  

This project was built as an **assignment/demo**, but the design is flexible enough for production use with small adjustments ).

---


## 🚀 Features

- **Sorting**  
  - Click column headers to sort data (`asc | desc `).  
  - Works with both strings and numbers.

- **Filtering**  
  - Dropdown filter by product category.

- **Searching**  
  - Search products by title and category (string columns) (case-insensitive).

- **Pagination**  
  - Navigate through data with next/prev controls.  
  - Auto-resets to first page when filter or search changes.  
  - Handles empty results gracefully (shows page `1 of 1`).  

- **Reset**  
  - Clear search, filter, sorting, and pagination with one click.

---


## ⚠️ Note on Pagination:
This project implements frontend pagination (all data is fetched and then sliced in the browser).
If this were a production application, pagination should be handled in the backend, because:

Fetching all records at once is inefficient with large datasets.

Backend pagination reduces network load and initial page load time.

It scales better for thousands or millions of records.

The client only receives the relevant page of data, improving performance on slower devices and connections.

### i just made it in the frontend beacuse i was asked to implement the table logic myself.
---


## ⚙️ Installation

1. Clone the repo:

2.Install dependencies:
npm install

3. Start development server:
npm run dev

---
## Image

<img width="1920" height="925" alt="image" src="https://github.com/user-attachments/assets/84503ba7-0220-4cb2-ac96-2b9bcf53b8e9" />

---
## usage:

Sorting: Click on a column header to toggle ascending/descending order.

Filtering: Use the filter dropdown to select a category.

Search: Type in the search bar to filter by product title or category.

Pagination: Navigate between pages using the pagination controls.

Reset: Removes everything — clears search, filter, and sorting, and resets pagination.

Clear Filter: Removes only the selected category filter, keeping search, sorting, and pagination intact.


## Tech Stack & Libraries

-  **React** (with Vite)
-  **Tailwind CSS** for styling
-  **Lucide React** for icons
-  **Custom components:** `Table`, `Pagination`, `FilterDropdown`, `StatisticsCard`
-  **TypeScript** for type safety
