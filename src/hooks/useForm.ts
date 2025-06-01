import { useState, useCallback } from "react";

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
}

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T) => void | Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isValid: true,
  });

  const setValue = useCallback(
    (field: keyof T, value: any) => {
      setState((prev) => {
        const newValues = { ...prev.values, [field]: value };
        const newErrors = validate ? validate(newValues) : {};
        return {
          ...prev,
          values: newValues,
          errors: newErrors,
          isValid: Object.keys(newErrors).length === 0,
        };
      });
    },
    [validate]
  );

  const setFieldTouched = useCallback((field: keyof T) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [field]: true },
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    const errors = validate ? validate(state.values) : {};
    setState((prev) => ({
      ...prev,
      errors,
      touched: Object.keys(prev.values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      ),
      isValid: Object.keys(errors).length === 0,
    }));

    if (Object.keys(errors).length === 0) {
      await onSubmit(state.values);
    }
  }, [state.values, validate, onSubmit]);

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    isValid: state.isValid,
    setValue,
    setFieldTouched,
    handleSubmit,
  };
}
