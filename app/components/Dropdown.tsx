"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { farmData } from '../data/products'; // Update the path as needed

export function Dropdown() {
  const [selectedProduct, setSelectedProduct] = React.useState<string | undefined>(undefined);

  const handleProductChange = (value: string | undefined) => {
    setSelectedProduct(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" >Products</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Products</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedProduct} onValueChange={handleProductChange}>
          {farmData.map(product => (
            <DropdownMenuRadioItem key={product.id} value={String(product.id)}>
              {product.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
