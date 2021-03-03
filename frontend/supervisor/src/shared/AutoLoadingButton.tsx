import { ButtonProps, Button } from 'antd';
import { useState } from 'react';
// import type * as React from 'react';
import React from 'react';
import useIsMountedRef from '../utils/useIsMountedRef';

export function AutoLoadingButton({
  onLoadingClick,
  ...props
}: Omit<ButtonProps, 'loading' | 'onClick'> & {
  readonly onLoadingClick?: (
    finish: () => void,
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}) {
  const [loading, setLoading] = useState(false);

  const isMountedRef = useIsMountedRef();

  return (
    <Button
      {...props}
      loading={loading}
      onClick={event => {
        if (onLoadingClick) {
          setLoading(true);
          onLoadingClick(() => {
            if (isMountedRef.current) {
              setLoading(false);
            }
          }, event);
        }
      }}
    />
  );
}
