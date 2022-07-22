import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

interface Props {
  children: React.ReactNode;
}

const AllTheProviders: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
