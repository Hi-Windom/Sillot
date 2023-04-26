import { InternalLottie } from '@affine/component/internal-lottie';
import type { HTMLAttributes } from 'react';
import type React from 'react';
import { cloneElement, useState } from 'react';

import { StyledSwitchItem } from './style';

type HoverAnimateControllerProps = {
  active?: boolean;
  hide?: boolean;
  children: React.ReactElement;
} & HTMLAttributes<HTMLButtonElement>;

const HoverAnimateController = ({
  active,
  hide,
  children,
  ...props
}: HoverAnimateControllerProps) => {
  const [startAnimate, setStartAnimate] = useState(false);
  return (
    <StyledSwitchItem
      hide={hide}
      active={active}
      onMouseEnter={() => {
        setStartAnimate(true);
      }}
      onMouseLeave={() => {
        setStartAnimate(false);
      }}
      {...props}
    >
      {cloneElement(children, {
        isStopped: !startAnimate,
        speed: 5,
        width: 20,
        height: 20,
      })}
    </StyledSwitchItem>
  );
};

export const PageSwitchItem = (
  props: Omit<HoverAnimateControllerProps, 'children'>
) => {
  return (
    <HoverAnimateController {...props}>
      <InternalLottie
        options={{
          loop: false,
          autoplay: false,
          animationData: require('./animation-data/page-hover.json'),
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </HoverAnimateController>
  );
};

export const EdgelessSwitchItem = (
  props: Omit<HoverAnimateControllerProps, 'children'>
) => {
  return (
    <HoverAnimateController {...props}>
      <InternalLottie
        options={{
          loop: false,
          autoplay: false,
          animationData: require('./animation-data/edgeless-hover.json'),
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </HoverAnimateController>
  );
};
