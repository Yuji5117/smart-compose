export const getString = (formData: FormData, key: string) => {
  const val = formData.get(key);
  return typeof val === 'string' ? val : '';
};

export const getStringArray = (formData: FormData, key: string): string[] => {
  return formData
    .getAll(key)
    .map((v) => (typeof v === 'string' ? v.trim() : ''))
    .filter(Boolean);
};
