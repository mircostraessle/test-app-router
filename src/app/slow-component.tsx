export const SlowComponent = async ({ message }: { message: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>{message}</div>;
};
