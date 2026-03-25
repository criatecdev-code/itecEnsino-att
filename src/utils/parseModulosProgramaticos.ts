/**
 * Interpreta o campo `modulos` dos cursos: listas simples (profissionalizantes)
 * ou estrutura com semestres e módulos (técnicos).
 */

const RE_SEMESTRE = /^\d+º\s*SEMESTRE$/i;
const RE_MODULO = /^MÓDULO\s+\d+$/i;

export interface ModuloGroup {
  title: string;
  items: string[];
}

export interface SemestreGroup {
  title: string;
  modules: ModuloGroup[];
}

export type ModulosParsed =
  | { kind: 'flat'; items: string[] }
  | { kind: 'structured'; semesters: SemestreGroup[] };

function splitModulos(raw: string): string[] {
  return raw
    .split(';')
    .map((m) => m.trim())
    .filter((m) => m.length > 0);
}

function isSemestre(s: string): boolean {
  return RE_SEMESTRE.test(s);
}

function isModulo(s: string): boolean {
  return RE_MODULO.test(s);
}

export function parseModulosProgramaticos(modulos: string): ModulosParsed {
  const parts = splitModulos(modulos);
  if (parts.length === 0) {
    return { kind: 'flat', items: [] };
  }

  const hasStructure = parts.some((p) => isSemestre(p) || isModulo(p));
  if (!hasStructure) {
    return { kind: 'flat', items: parts };
  }

  const semesters: SemestreGroup[] = [];
  let currentSem: SemestreGroup | null = null;
  let currentMod: ModuloGroup | null = null;

  const ensureSemester = (title: string) => {
    currentSem = { title, modules: [] };
    semesters.push(currentSem);
    currentMod = null;
  };

  const ensureModulo = (title: string) => {
    if (!currentSem) {
      ensureSemester('Conteúdo');
    }
    currentMod = { title, items: [] };
    currentSem!.modules.push(currentMod);
  };

  for (const part of parts) {
    if (isSemestre(part)) {
      ensureSemester(part);
      continue;
    }

    if (isModulo(part)) {
      ensureModulo(part);
      continue;
    }

    if (!currentSem) {
      ensureSemester('Conteúdo');
    }
    if (!currentMod) {
      ensureModulo('Disciplinas');
    }
    currentMod!.items.push(part);
  }

  return { kind: 'structured', semesters };
}
