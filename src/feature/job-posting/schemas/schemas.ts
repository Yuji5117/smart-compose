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
  jobType: z.string().trim(),
  keywords: z.string().trim(),
  salary: z.string().trim(),
  location: z.string().trim(),
  tone: ToneSchema,
});

export type JobFormInput = z.infer<typeof JobFormSchema>;
export type JobFormRaw = Omit<JobFormInput, 'tone'> & { tone: string };
