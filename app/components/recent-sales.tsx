"use client"

import * as React from "react"
import {
  ColumnDef
} from "@tanstack/react-table"

import { DataTable } from "@/components/ui/custom/data-table"

const data: Sales[] = [
  {
    "id": "1",
    "product": "Wheat",
    "quantity": 2,
    "amount": 55000,
    "status": "success"
  },
  {
    "id": "2",
    "product": "Rice",
    "quantity": 5,
    "amount": 120000,
    "status": "success"
  },
  {
    "id": "3",
    "product": "Corn",
    "quantity": 3,
    "amount": 75000,
    "status": "success"
  },
  {
    "id": "4",
    "product": "Barley",
    "quantity": 4,
    "amount": 90000,
    "status": "success"
  },
  {
    "id": "5",
    "product": "Soybeans",
    "quantity": 6,
    "amount": 135000,
    "status": "success"
  },
  {
    "id": "6",
    "product": "Oats",
    "quantity": 2,
    "amount": 50000,
    "status": "success"
  },
  {
    "id": "7",
    "product": "Millet",
    "quantity": 3,
    "amount": 70000,
    "status": "success"
  },
  {
    "id": "8",
    "product": "Sorghum",
    "quantity": 5,
    "amount": 110000,
    "status": "success"
  },
  {
    "id": "9",
    "product": "Cotton",
    "quantity": 8,
    "amount": 180000,
    "status": "success"
  },
  {
    "id": "10",
    "product": "Potatoes",
    "quantity": 7,
    "amount": 160000,
    "status": "success"
  }
]


export type Sales = {
  id: string
  product:string
  amount: number
  quantity:number,
  status: "pending" | "processing" | "success" | "failed"

}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey:"product",
    header:"Product"
  },
  {
    accessorKey:"amount",
    header:"Amount"
  },
  {
    accessorKey:"quantity",
    header:"Quantity"
  },
  {
    accessorKey:"status",
    header:"Status"
  },
]

export function RecentSales() {
  return (
    <div className="w-full">
      <DataTable data={data} columns={columns} ></DataTable>
    </div>
  )
}
