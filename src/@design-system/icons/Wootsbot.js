import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wootsbot = forwardRef(function Wootsbot(props, ref) {
  const { color = '#fff', size = 500, ...others } = props;

  return (
    <svg
      ref={ref}
      fill="none"
      height={size}
      viewBox="0 0 500 500"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <defs>
        <linearGradient id="logo-a" x1="44.839%" x2="50.568%" y1="36.583%" y2="64.707%">
          <stop offset="0%" stopColor="#0E003D" />
          <stop offset="99.799%" stopColor="#392C72" />
          <stop offset="100%" stopColor="#392C72" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect width="500" height="500" />
        <g transform="translate(2 69)">
          <path
            fill="url(#logo-a)"
            d="M130.61048,-1.96 C145.40064,-1.96 160.1908,-1.96 174.98096,-1.96 C174.98096,105.6048 174.98096,213.1696 174.98096,320.7344 C174.98096,345.239539 155.115619,365.10488 130.61048,365.10488 C106.105341,365.10488 86.24,345.239539 86.24,320.7344 L86.24,42.41048 C86.24,17.9053406 106.105341,-1.96 130.61048,-1.96 Z"
            transform="rotate(-30 130.61 181.572)"
          />
          <path
            fill="#5842C3"
            d="M412.862077,67.0133662 C425.114647,45.7912929 452.251207,38.5200737 473.47328,50.7726434 C494.695353,63.0252131 501.966573,90.1617729 489.714003,111.383846 L489.714003,111.383846 L369.712023,319.233373 C358.021718,339.481574 332.78212,347.02994 312.057791,337.038087 C304.065452,333.326037 297.096583,327.203392 292.355887,318.992267 C245.800497,238.355966 199.245107,157.719665 152.689717,77.0833645 C165.498371,69.6882845 178.307026,62.2932045 191.11568,54.8981245 C212.337753,42.6455548 239.474313,49.9167741 251.726883,71.1388474 L331.103717,208.622717 Z"
          />
        </g>
      </g>
    </svg>
  );
});

Wootsbot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wootsbot.displayName = 'Wootsbot';

export default Wootsbot;
