import React, { ReactNode } from 'react';

function Main({ children }: { children?: ReactNode }) {
  return (
    <main>{children}</main>
  )
}

export default Main;