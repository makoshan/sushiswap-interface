import React, { FC } from 'react'

import { classNames } from '../functions/styling'

const Empty: FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '' }) => (
  <div className={classNames('flex flex-col justify-center items-center py-4 px-3 rounded', className)}>{children}</div>
)

export default Empty
