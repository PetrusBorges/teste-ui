import * as react_jsx_runtime from 'react/jsx-runtime';
import { Metadata } from 'next';

declare const metadata: Metadata;
declare function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>): react_jsx_runtime.JSX.Element;

export { RootLayout as default, metadata };
