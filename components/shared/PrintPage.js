import React from 'react';
import { Button } from "@/components/ui/button"

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Button variant="destructive" 
      className="p-4"
      onClick={handlePrint}>
      Print Ticket</Button>
    </div>
  );
};

export default PrintButton;