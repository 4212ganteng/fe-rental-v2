import React from "react";

export default function Tabledetail({ children }) {
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Merek
              </th>
              <th scope="col" class="px-6 py-3">
                Serial Number
              </th>
              <th scope="col" class="px-6 py-3">
                Tanggal Perolehan
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
