export const propsOrSource = (field: string, props: any, source: any) => {
  return props[field] || source[field];
};
