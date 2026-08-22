// Форма записи. Поля задаются в админке: подписи, порядок, обязательность,
// варианты для выпадающих списков.
//
// Стандартные поля (имя, телефон, время, имя и возраст ребёнка, комментарий)
// уходят в соответствующие поля заявки. Все остальные добавляются в текст
// комментария строками вида «Вопрос: ответ» — так их видно в уведомлении,
// и при этом не нужно менять обработчик.

import { useState } from "react";
import { X, Check } from "lucide-react";
import { useContent } from "../content/ContentContext";
import type { FormField } from "../data/defaults";
import { buildLeadPayload, isRequired } from "./leadPayload";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
}

export function CallModal({ isOpen, onClose, programName }: CallModalProps) {
  const { form } = useContent();
  const fields = form.fields.filter((field) => field.enabled);

  const [values, setValues] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const valueOf = (field: FormField) => values[field.id] ?? "";

  // Обязательны отмеченные поля; имя и телефон обязательны всегда.
  const isComplete =
    agreed && fields.every((field) => !isRequired(field) || valueOf(field).trim() !== "");

  const reset = () => {
    setValues({});
    setAgreed(false);
    setSending(false);
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (!isComplete || sending) return;

    setSending(true);

    const payload = buildLeadPayload(fields, values, programName);

    try {
      await fetch("/api/submit-lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.log("Lead submit error", error);
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
