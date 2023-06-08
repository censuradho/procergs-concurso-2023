import { Data } from "@/services/api/types";

export function sortRules (data: Data) {
  return data.sort((a, b) => {
    const aLegislacao  = Number(a.legislacao)
    const aPortugues  = Number(a.portugues)
    const aEspecificos  = Number(a.conhecimentos_especificos)
    const aTotal = Number(a.total)


    const bLegislacao  = Number(a.legislacao)
    const bPortugues  = Number(a.portugues)
    const bEspecificos  = Number(a.conhecimentos_especificos)
    const bTotal = Number(b.total)

    if (aTotal !== bTotal) {
      return bTotal - aTotal;
    } else if (Number(aEspecificos) !== Number(bEspecificos)) {
      return Number(bEspecificos) - Number(aEspecificos);
    } else if (Number(aPortugues) !== Number(bPortugues)) {
      return Number(bPortugues) - Number(aPortugues);
    } else {
      return Number(bLegislacao) - Number(aLegislacao);
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
