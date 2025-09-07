# 📊 Interactive Data Table

An interactive data table built with **React + TypeScript + TailwindCSS**.  
It supports **sorting, filtering, multiple string column searching, and pagination**, making it ideal for displaying tabular datasets (like products).

This project was built as an **assignment/demo**, but the design is flexible enough for production use with small adjustments ).

---

## 🚀 Features

-   **Sorting**

    -   Click column headers to sort data (`asc | desc`).
    -   Works with both strings and numbers.
    -   **Multi-column sorting**: Hold <kbd>Ctrl</kbd> (or <kbd>Cmd</kbd> on Mac) and click additional columns to sort by multiple fields at once.
        -   First click: ascending
        -   Second click: descending
        -   Third click: remove column from sorting
        -   A small number indicator shows the priority of each column in the sort order.

-   **Filtering**

    -   Dropdown filter by product category.

-   **Searching**

    -   Search products by title and category (string columns) (case-insensitive).

-   **Pagination**

    -   Navigate through data with next/prev controls.
    -   Auto-resets to first page when filter or search changes.
    -   Handles empty results gracefully (shows page `1 of 1`).

-   **Reset**
    -   Clear search, filter, sorting, and pagination with one click.

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

## 📌 Usage

-   **Sorting**  
    Click a column header to toggle sorting between ascending and descending.

-   **Multi-column Sorting**  
    Hold <kbd>Ctrl</kbd> (or <kbd>Cmd</kbd> on Mac) while clicking multiple column headers to sort by several fields.

    -   1st click → Ascending
    -   2nd click → Descending
    -   3rd click → Removes the column from sorting
    -   Number badges show the priority of each sorted column.

-   **Filtering**  
    Use the dropdown menu to filter products by category.

-   **Searching**  
    Type in the search bar to filter products by title or category (case-insensitive).

-   **Pagination**  
    Navigate between pages using the pagination controls.  
    Pagination resets to the first page whenever filter or search changes.

-   **Reset**  
    Clears search, filter, sorting, and pagination — restoring the table to its initial state.

-   **Clear Filter**  
    Removes only the category filter while keeping search, sorting, and pagination intact.

## Tech Stack & Libraries

-   **React** (with Vite)
-   **Tailwind CSS** for styling
-   **Lucide React** for icons
-   **Custom components:** `Table`, `Pagination`, `FilterDropdown`, `StatisticsCard`
-   **TypeScript** for type safety

---

## 📖 Docs / Future Work

There are a few simple features I wanted to add but couldn’t due to time constraints:

-   **Row Selection (Checkboxes)**  
    Add checkboxes to select individual rows, plus a “select all” option in the header.

-   **Clear Sorting Button**  
    A single button to remove all sorting without affecting filters, search, or pagination.

-   **Dark Mode**  
    Add light/dark theme support using Tailwind’s `dark:` classes.

---

> 🕒 These would have been quick wins for usability and polish, but I focused on core table logic first.
