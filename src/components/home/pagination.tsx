"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationBlock() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="text-muted-foreground" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-muted-foreground" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="text-muted-foreground hover:bg-none dark:hover:bg-none" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
