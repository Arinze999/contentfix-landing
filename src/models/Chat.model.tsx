import * as Yup from 'yup';

const TONE_IDS = [
  'professional',
  'conversational',
  'playful',
  'persuasive',
  'empathetic',
] as const;
const EMOJI_LEVELS = ['none', 'low', 'moderate'] as const;

export const PromptSchema = Yup.object({
  message: Yup.string().trim().required('Message can not be empty'),
  tones: Yup.array()
    .of(Yup.string().oneOf(TONE_IDS as unknown as string[]))
    .min(1, 'Select at least 1 tone')
    .max(2, 'Select up to 2 tones')
    .required('Select up to 2 tones'),
  // platforms: Yup.array()
  //   .of(Yup.string())
  //   .min(1, 'Choose at least one platform'),
  linkedin: Yup.boolean().nullable(),
  twitter: Yup.boolean().nullable(),
  threads: Yup.boolean().nullable(),
  official: Yup.boolean().nullable(),
  // personality: Yup.string().trim().optional(),
  emojiLevel: Yup.string()
    .oneOf(EMOJI_LEVELS as unknown as string[])
    .optional(), // default handled in initial values
});

export type PromptDataType = Yup.InferType<typeof PromptSchema>;

export const PromptInitialValues: PromptDataType = {
  message: '',
  tones: [],
  // platforms: [],
  linkedin: false,
  twitter: false,
  threads: false,
  official: false,
  // personality: '',
  emojiLevel: 'none',
};
