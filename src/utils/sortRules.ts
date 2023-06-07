import { Data } from "@/services/api/types";

export function sortRules (data: Data) {
  return data.sort((a, b) => {
    if (Number(a.total) !== Number(b.total)) {
      return Number(b.total) - Number(a.total);
    } else if (Number(a.conhecimentos_especificos) !== Number(b.conhecimentos_especificos)) {
      return Number(b.conhecimentos_especificos) - Number(a.conhecimentos_especificos);
    } else if (Number(a.portugues) !== Number(b.portugues)) {
      return Number(b.portugues) - Number(a.portugues);
    } else {
      return Number(b.legislacao) - Number(a.legislacao);
    }
  })
}

export const groupBy = <T, K extends keyof T>(value: T[], key: K) => {
  
  return value.reduce<Record<string, T[]>>(
    (prev, curr) => {
      const target =  curr[key as keyof typeof curr] as string

      return  ({
        ...prev,
        [target]: [...(prev?.[target] || []), curr],
      })
    },
    {},
  );
}
