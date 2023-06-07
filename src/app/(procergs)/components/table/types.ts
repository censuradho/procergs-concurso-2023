import { Data, GroupedByTotal } from "@/services/api/types";

export interface TableProps {
  data: (Data[number] & { classification: number })[]
}