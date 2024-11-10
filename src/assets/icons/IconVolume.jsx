export default function IconVolume({ width = 26, height = 24, fill, ...rest }) {
  return (
    <div>
      <svg
        {...rest}
        width={26}
        height={24}
        viewBox='0 0 26 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.4453 1.5L7.22309 7.5H1.44531V16.5H7.22309L14.4453 22.5V1.5Z'
          stroke='#FFD143'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21.002 6.68994C22.3559 8.0964 23.1165 10.0037 23.1165 11.9924C23.1165 13.9812 22.3559 15.8885 21.002 17.2949'
          stroke='#FFD143'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}
