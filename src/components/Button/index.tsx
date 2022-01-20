import { HTMLAttributes } from 'react';

import classNames from 'classnames';

import { ReactComponent as IconCloud } from '~/assets/icons/cloud.svg';
import { ReactComponent as IconHouse } from '~/assets/icons/house.svg';
import { ReactComponent as IconPlay } from '~/assets/icons/play.svg';
import { ReactComponent as IconPlus } from '~/assets/icons/plus.svg';
import { ReactComponent as IconShoppingCart } from '~/assets/icons/shopping-cart.svg';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: 'plus' | 'house' | 'play' | 'cloud' | 'cart';
  size: 'hg' | 'md',
  loading?: boolean;
  appearance?: 'solid' | 'outline',
  label?: string;
  full?: boolean;
  disabled?: boolean;
  submit?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  full = false,
  size,
  className,
  loading = false,
  label,
  icon,
  disabled,
  appearance = 'solid',
  submit,
  ...rest

}) => {
  const styled = classNames(
    'button',
    className,
    `is-${size}`,
    full && 'w-full',
    `is-${appearance}`,
    disabled && 'is-disabled',
    loading && 'is-loading',
  );

  const icons = {
    house: <IconHouse />,
    cloud: <IconCloud />,
    plus: <IconPlus />,
    play: <IconPlay />,
    cart: <IconShoppingCart />,
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      className={styled}
    >
      {icon && icons[icon]}
      {loading}
      {label}
    </button>
  );
};

export default Button;
