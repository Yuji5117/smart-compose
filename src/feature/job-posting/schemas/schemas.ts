import z from 'zod';

export const ToneSchema = z.union([
  z.enum([
    'polite',
    'friendly',
    'casual',
    'formal',
    'professional',
    'approachable',
    'passionate',
    'trustworthy',
    'innovative',
    'warm',
  ]),
  z.literal(''),
]);

export const JobFormSchema = z.object({
  role: z.string().trim().min(1, '職種は必須です'),
  keywords: z.array(z.string().trim()).default([]),
  salary: z.string().trim().min(1, "給与は必須です"),
  location: z.array(z.string().trim()).default([]),
  requirements: z.object({
    must: z.array(z.string().trim()).default([]),
    nice: z.array(z.string().trim()).default([]),
  }),
  benefits: z.array(z.string().trim()).default([]),
  sellingPoints: z
    .array(z.string().trim())
    .max(3, '打ち出しポイントは最大3つまでです')
    .default([]),
  tone: ToneSchema,
});

export type JobFormInput = z.infer<typeof JobFormSchema>;
export type JobFormRaw = Omit<JobFormInput, 'tone'> & { tone: string };
