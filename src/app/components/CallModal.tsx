// Форма записи. Поля задаются в админке: подписи, порядок, обязательность,
// варианты для выпадающих списков.
//
// Стандартные поля (имя, телефон, время, имя и возраст ребёнка, комментарий)
// уходят в соответствующие поля заявки. Все остальные добавляются в текст
// комментария строками вида «Вопрос: ответ» — так их видно в уведомлении,
// и при этом не нужно менять обработчик.
//
// «Спасибо» показывается ТОЛЬКО после ответа сервера «принято» (С-03).
// Раньше экран успеха выходил при любом исходе — даже когда заявка
// не дошла никуда, — и родитель ждал звонка, которого не будет.
// При сбое форма остаётся заполненной, рядом телефон студии.

import { useState } from "react";
import { X, Check } from "lucide-react";
import { phoneHref, useContent } from "../content/ContentContext";
import type { FormField } from "../data/defaults";
import { buildLeadPayload, isRequired } from "./leadPayload";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
}

export function CallModal({ isOpen, onClose, programName }: CallModalProps) {
  const { form, contacts } = useContent();
  const fields = form.fields.filter((field) => field.enabled);

  const [values, setValues] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  // Ошибка отправки: текст для родителя. null — ошибки нет
  const [failure, setFailure] = useState<string | null>(null);
  // Скрытое поле-ловушка для ботов (С-09). Человек его не видит и не заполняет
  const [trap, setTrap] = useState("");

  const valueOf = (field: FormField) => values[field.id] ?? "";

  // Обязательны отмеченные поля; имя и телефон обязательны всегда.
  const isComplete =
    agreed && fields.every((field) => !isRequired(field) || valueOf(field).trim() !== "");

  const reset = () => {
    setValues({});
    setAgreed(false);
    setSending(false);
    setFailure(null);
    setTrap("");
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!isComplete || sending) return;

    setSending(true);
    setFailure(null);

    const payload = { ...buildLeadPayload(fields, values, programName), website: trap || null };

    let accepted = false;
    let invalid = false;
    try {
      const response = await fetch("/api/submit-lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null);
      accepted = response.ok && data?.ok === true;
      invalid = response.status === 400 && data?.error === "validation";
    } catch (error) {
      console.error("Lead submit error", error);
    }

    if (!accepted) {
      setSending(false);
      setFailure(
        invalid
          ? "Проверьте, пожалуйста, имя и номер телефона."
          : "Не получилось отправить заявку — это ошибка на нашей стороне."
      );
      return;
    }

    setSent(true);
    setTimeout(() => {
      onClose();
      setSent(false);
      reset();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#7BAF8E] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-white" />
            </div>
            <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#3D3D3D] mb-2">
              {form.successTitle}
            </h3>
            <p className="font-['Nunito_Sans',sans-serif] text-[#4a4a4a]">{form.successText}</p>
          </div>
        ) : (
          <>
            <h3 className="font-['Nunito',sans-serif] font-bold text-2xl text-[#3D3D3D] mb-2">
              {form.title}
            </h3>
            {form.subtitle && (
              <p className="font-['Nunito_Sans',sans-serif] text-[#4a4a4a] mb-6">{form.subtitle}</p>
            )}

            <div className="space-y-4">
              {fields.map((field) => (
                <Field
                  key={field.id}
                  field={field}
                  value={valueOf(field)}
                  onChange={(value) => setValues((prev) => ({ ...prev, [field.id]: value }))}
                />
              ))}

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors cursor-pointer ${
                    agreed ? "bg-[#7BAF8E] border-[#7BAF8E]" : "border-gray-300"
                  }`}
                >
                  {agreed && <Check size={12} className="text-white" />}
                </div>
                <span className="font-['Nunito_Sans',sans-serif] text-sm text-[#4a4a4a]">
                  {form.privacyText}{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7BAF8E] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {form.privacyLinkText}
                  </a>
                </span>
              </label>

              {/* Ловушка для ботов: нулевой высоты, без фокуса, без автозаполнения.
                  Не сдвигаем за край экрана — у окна есть прокрутка, и сбоку
                  появилась бы лишняя горизонтальная полоса */}
              <div aria-hidden="true" style={{ height: 0, overflow: "hidden" }}>
                <input
                  type="text"
                  name="website"
                  value={trap}
                  onChange={(e) => setTrap(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {failure && (
                <div
                  role="alert"
                  className="rounded-lg bg-[#fde8e8] text-[#b42318] px-4 py-3 font-['Nunito_Sans',sans-serif] text-sm"
                >
                  {failure}
                  {contacts.phone && (
                    <>
                      {" "}Позвоните нам:{" "}
                      <a href={phoneHref(contacts.phone)} className="font-semibold underline whitespace-nowrap">
                        {contacts.phone}
                      </a>
                      {" "}— или попробуйте ещё раз.
                    </>
                  )}
                </div>
              )}

              <button
                onClick={(e) => handleSubmit(e)}
                disabled={!isComplete || sending}
                className={`w-full py-4 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-all ${
                  isComplete && !sending
                    ? "bg-[#F2A65A] hover:bg-[#e89542] text-white transform hover:scale-105 shadow-lg cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {sending ? "Отправляем…" : form.buttonText}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputClass =
    "w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#7BAF8E] focus:outline-none font-['Nunito_Sans',sans-serif] transition-colors";

  const mustFill = isRequired(field);

  return (
    <div>
      <label className="font-['Nunito_Sans',sans-serif] font-semibold text-[#3D3D3D] mb-1 block text-sm">
        {field.label}
        {mustFill && <span className="text-[#F2A65A]"> *</span>}
      </label>

      {field.type === "select" ? (
        <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
          <option value="">{field.placeholder || "Выберите"}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          type={field.type === "tel" ? "tel" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}
