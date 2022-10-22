import qs from 'qs';

export const query = ({ eager = false, id }: { eager: boolean; id: string }) => {
  const queryString = qs.stringify(
    {
      eager,
      selection: [],
    },
    { arrayFormat: 'repeat' },
  );
  return {
    method: 'GET',
    url: `notifications/${id}?${queryString}`,
  };
};
