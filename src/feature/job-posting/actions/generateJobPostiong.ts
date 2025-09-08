'use server';

export const generateJobPostiongAction = async (
  _prev: string | null,
  formData: FormData
): Promise<any | null> => {
  const jobType = formData.get('jobType');
  const keywords = formData.get('keywords');
  const salary = formData.get('salary');
  const location = formData.get('location');
  const tone = formData.get('tone');

  console.log('通信処理');

  return { jobType, keywords, salary, location, tone };
};
