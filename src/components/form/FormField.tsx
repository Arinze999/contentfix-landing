'use client';
import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import clsx from 'clsx';
import Image from 'next/image';

/**
 * Props for both fields:
 */
interface BaseFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  /** URL or path to a left-placed icon */
  lpiSrc?: string;
  /** Make the input read-only (text field only) */
  readOnly?: boolean;
  /** Override wrapper styles */
  className?: string;
  required?: boolean;
}

/**
 * Textarea input
 */
export const TextAreaInputField: React.FC<BaseFieldProps> = ({
  label,
  name,
  placeholder,
  lpiSrc,
  readOnly = false,
  className = '',
}) => {
  const [field, meta] = useField<string>({
    name,
    type: 'textarea',
  } as FieldHookConfig<string>);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div className={clsx(className, 'mb-6 w-full')}>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-borderGray/10 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {lpiSrc && (
          <Image
            src={lpiSrc}
            alt="icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            width={20}
            height={20}
          />
        )}
        <textarea
          id={name}
          {...field}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={5}
          className={clsx(
            // base
            'block w-full rounded-md py-3 bg-white/5 text-sm md:text-md',
            'border-purple-800/30 border-2', // ← gives the border a width
            hasError ? '' : 'border-gray-300',
            lpiSrc ? 'pl-10' : 'pl-3',
            'pr-3',
            'resize-y overflow-auto min-h-32 max-h-[70vh]',
            // focus styles
            'focus:outline-none',
            'focus:border-purple-500/10',
            'focus:ring-2 focus:ring-purple-500/10',
            'focus:ring-offset-2 focus:ring-offset-purple-800/10'
          )}
        />
      </div>
      {hasError && <p className="mt-1 text-sm text-red-600">{meta.error}</p>}
    </div>
  );
};
