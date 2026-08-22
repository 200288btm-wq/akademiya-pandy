// Сборка данных заявки из заполненной формы.
//
// Стандартные поля уходят в свои поля заявки, остальные добавляются
// в комментарий строками «Подпись: ответ» — так их видно в уведомлении,
// и обработчик заявок менять не требуется.

import type { FormField } from "../data/defaults";

export const STANDARD_TARGETS = ["name", "phone", "time", "childName", "childAge", "comment"];

export function isRequired(field: FormField): boolean {
  return field.required || field.target === "name" || field.target === "phone";
}

export function buildLeadPayload(
  fields: FormField[],
  values: Record<string, string>,
  programName?: string
): Record<string, string | null> {
  const payload: Record<string, string | null> = {
    name: null,
    phone: null,
    time: null,
    childName: null,
    childAge: null,
    programName: programName || null,
  };

  const extras: string[] = [];
  let comment = "";

  fields
    .filter((field) => field.enabled)
    .forEach((field) => {
      const value = (values[field.id] ?? "").trim();
      if (value === "") return;

      if (field.target === "comment") {
        comment = value;
      } else if (STANDARD_TARGETS.includes(field.target)) {
        payload[field.target] = value;
      } else {
        extras.push(`${field.label}: ${value}`);
      }
    });

  payload.comment = [comment, ...extras].filter(Boolean).join("\n") || null;

  return payload;
}
