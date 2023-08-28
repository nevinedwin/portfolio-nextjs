import * as React from 'react'

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 512 512'
    {...rest}
    className={`w-full h-auto ${className} bg-light rounded-full dark:bg-dark`}
  >
    <path fill='none' d='M0 0h512v512H0z' />
    <path
      fill='currentColor'
      d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z'
    />
  </svg>
)

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 209'
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill='none' d='M0 0h256v209H0z' />
    <path
      fill='#55acee'
      d='M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45'
    />
  </svg>
)
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 256'
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <g fill='none'>
      <rect width={256} height={256} fill='#fff' rx={60} />
      <rect width={256} height={256} fill='#0A66C2' rx={60} />
      <path
        fill='#fff'
        d='M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z'
      />
    </g>
  </svg>
)

export const LeetCodeIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill='currentColor'
      d='M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z'
    />
  </svg>
)

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <g strokeDasharray='2'>
        <path d='M12 21v1M21 12h1M12 3v-1M3 12h-1'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.2s'
            values='4;2'
          />
        </path>
        <path d='M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.2s'
            dur='0.2s'
            values='4;2'
          />
        </path>
      </g>
      <path
        fill='currentColor'
        d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
        opacity='0'
      >
        <set attributeName='opacity' begin='0.5s' to='1' />
      </path>
    </g>
    <g fill='currentColor' fillOpacity='0'>
      <path d='m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z'>
        <animate
          id='lineMdSunnyFilledLoopToMoonFilledLoopTransition0'
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s'
          dur='0.4s'
          values='0;1'
        />
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <mask id='lineMdSunnyFilledLoopToMoonFilledLoopTransition1'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='22' cy='2' r='3' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='3;12'
        />
      </circle>
      <circle cx='22' cy='2' r='1'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.1s'
          dur='0.4s'
          values='22;18'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.1s'
          dur='0.4s'
          values='2;6'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.1s'
          dur='0.4s'
          values='1;10'
        />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='6'
      fill='currentColor'
      mask='url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)'
    >
      <set attributeName='opacity' begin='0.5s' to='0' />
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.1s'
        dur='0.4s'
        values='6;10'
      />
    </circle>
  </svg>
)

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x='0' y='0' width='24' height='24' fill='rgba(255, 255, 255, 0)' />
    <g
      fill='none'
      stroke='currentColor'
      strokeDasharray='2'
      strokeDashoffset='2'
      strokeLinecap='round'
      strokeWidth='2'
    >
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.2s'
          dur='0.2s'
          values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.2s'
          dur='0.2s'
          values='2;0'
        />
      </path>
      <path d='M0 0'>
        <animate
          fill='freeze'
          attributeName='d'
          begin='1.5s'
          dur='0.2s'
          values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
        />
        <animate
          fill='freeze'
          attributeName='stroke-dashoffset'
          begin='1.5s'
          dur='1.2s'
          values='2;0'
        />
      </path>
      <animateTransform
        attributeName='transform'
        dur='30s'
        repeatCount='indefinite'
        type='rotate'
        values='0 12 12;360 12 12'
      />
    </g>
    <g fill='currentColor'>
      <path d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          dur='0.4s'
          values='1;0'
        />
      </path>
      <path d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='0.2s'
          dur='0.4s'
          values='1;0'
        />
      </path>
    </g>
    <g
      fill='currentColor'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <path d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z' />
      <set attributeName='opacity' begin='0.6s' to='0' />
    </g>
    <mask id='lineMdMoonFilledToSunnyFilledLoopTransition0'>
      <circle cx='12' cy='12' r='12' fill='#fff' />
      <circle cx='18' cy='6' r='12' fill='#fff'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='12;3'
        />
      </circle>
      <circle cx='18' cy='6' r='10'>
        <animate
          fill='freeze'
          attributeName='cx'
          begin='0.6s'
          dur='0.4s'
          values='18;22'
        />
        <animate
          fill='freeze'
          attributeName='cy'
          begin='0.6s'
          dur='0.4s'
          values='6;2'
        />
        <animate
          fill='freeze'
          attributeName='r'
          begin='0.6s'
          dur='0.4s'
          values='10;1'
        />
      </circle>
    </mask>
    <circle
      cx='12'
      cy='12'
      r='10'
      fill='currentColor'
      mask='url(#lineMdMoonFilledToSunnyFilledLoopTransition0)'
      opacity='0'
    >
      <set attributeName='opacity' begin='0.6s' to='1' />
      <animate
        fill='freeze'
        attributeName='r'
        begin='0.6s'
        dur='0.4s'
        values='10;6'
      />
    </circle>
  </svg>
)

export const CircularText = ({ className, ...rest }) => (
  <svg
    version='1.0'
    xmlns='http://www.w3.org/2000/svg'
    width='1080.000000pt'
    height='1080.000000pt'
    viewBox='0 0 1080.000000 1080.000000'
    className={`w-full h-auto ${className} `}
    {...rest}
  >
    <g
      transform='translate(0.000000,1080.000000) scale(0.100000,-0.100000)'
      stroke='none'
    >
      <path
        d='M5200 9216 l0 -366 100 0 100 0 0 100 0 100 58 0 59 0 67 -100 66
        -100 106 0 c58 0 104 3 102 8 -1 4 -35 55 -75 113 l-71 105 46 35 c65 48 94
        108 94 198 0 87 -25 145 -84 195 -71 62 -107 69 -350 74 l-218 4 0 -366z m395
        189 c62 -30 75 -113 26 -167 -29 -32 -31 -33 -125 -36 l-96 -4 0 111 0 111 81
        0 c52 0 92 -5 114 -15z'
      />
      <path
        d='M4706 9505 c-147 -30 -270 -56 -272 -57 -2 -2 28 -164 66 -359 38
        -194 70 -354 70 -355 0 -2 565 109 569 112 1 1 -3 35 -10 73 -11 62 -15 71
        -34 71 -12 0 -97 -15 -189 -34 -116 -23 -169 -30 -171 -22 -13 41 -24 121 -18
        126 5 4 77 19 161 35 83 16 152 31 152 34 -1 17 -28 133 -32 137 -3 2 -71 -9
        -153 -26 -81 -16 -152 -30 -156 -30 -7 0 -29 86 -29 114 0 10 54 24 178 49
        172 33 177 35 174 58 -5 51 -24 129 -30 128 -4 -1 -128 -25 -276 -54z'
      />
      <path
        d='M6060 9554 c0 -3 -100 -455 -149 -675 l-8 -37 84 -17 c47 -9 91 -19
        97 -21 8 -3 24 51 51 173 21 98 41 184 45 192 5 9 48 -65 120 -208 62 -122
        120 -225 129 -230 31 -15 142 -34 150 -25 4 5 40 158 80 339 40 182 74 337 77
        346 3 12 -14 20 -88 36 -51 12 -96 18 -99 15 -4 -4 -23 -83 -43 -177 -21 -93
        -39 -177 -42 -185 -3 -9 -54 80 -119 205 -63 121 -116 223 -117 227 -3 7 -168
        48 -168 42z'
      />
      <path
        d='M4115 9358 c-38 -17 -71 -32 -73 -33 -1 -1 -14 -98 -27 -216 -14
        -118 -28 -229 -31 -247 l-5 -32 -107 74 c-59 41 -151 105 -205 142 l-98 66
        -62 -26 c-34 -15 -68 -30 -76 -35 -10 -7 18 -78 134 -337 80 -181 148 -330
        149 -331 1 -2 40 14 84 34 64 28 81 40 77 53 -3 9 -36 86 -74 171 -38 85 -68
        156 -66 157 2 2 69 -41 148 -97 l145 -100 41 16 c47 18 44 8 67 226 10 86 20
        157 23 157 3 -1 39 -76 80 -168 41 -92 77 -170 80 -173 3 -4 40 8 81 27 41 18
        78 35 83 36 7 3 -276 644 -291 660 -4 4 -38 -7 -77 -24z'
      />
      <path
        d='M7320 9022 c-113 -108 -281 -270 -374 -359 l-169 -162 76 -37 75 -38
        64 59 c95 88 688 658 688 662 0 4 -138 73 -147 73 -5 0 -100 -89 -213 -198z'
      />
      <path
        d='M7793 8452 c-194 -91 -353 -168 -352 -171 0 -3 34 -34 74 -69 l74
        -63 69 35 69 35 114 -100 c63 -54 115 -104 117 -109 2 -5 -6 -40 -19 -77 l-22
        -67 74 -67 c41 -37 77 -64 81 -61 3 4 58 174 121 377 l116 370 -72 67 c-40 37
        -76 67 -82 67 -5 0 -169 -75 -362 -167z m272 -159 c-21 -59 -42 -112 -46 -117
        -8 -9 -139 98 -139 114 0 9 213 121 219 115 2 -2 -14 -53 -34 -112z'
      />
      <path
        d='M3083 8356 l-111 -93 44 -54 c25 -30 49 -53 54 -51 17 4 220 175 220
        184 0 11 -81 108 -89 107 -3 0 -56 -42 -118 -93z'
      />
      <path
        d='M8420 7919 c-124 -154 -230 -288 -237 -297 -10 -14 -3 -31 44 -104
32 -51 62 -88 72 -88 9 0 108 25 220 55 113 31 209 54 214 52 4 -1 -57 -83
-137 -181 -85 -103 -143 -183 -139 -189 8 -15 105 -160 110 -166 6 -7 733 193
733 202 0 17 -96 157 -105 153 -31 -11 -467 -127 -470 -124 -1 2 65 84 147
183 82 99 151 186 155 193 3 7 -14 42 -38 79 -24 36 -47 70 -50 75 -4 6 -105
-17 -234 -51 -126 -34 -233 -60 -238 -58 -5 1 55 81 133 177 79 96 147 181
153 187 7 9 -6 38 -44 98 -30 47 -56 85 -59 85 -3 0 -106 -127 -230 -281z'
      />
      <path
        d='M2507 8071 c-18 -33 -27 -64 -27 -95 0 -48 -9 -57 -30 -31 -7 8 -18
15 -24 15 -10 -1 -89 -92 -109 -126 -5 -8 60 -67 207 -188 118 -97 217 -176
219 -176 1 0 29 32 61 71 68 82 77 61 -77 189 -77 64 -105 95 -114 122 -15 46
-3 91 34 130 14 15 25 29 22 31 -2 2 -32 27 -67 55 -35 29 -64 52 -66 52 -2 0
-15 -22 -29 -49z'
      />
      <path
        d='M2193 7595 c-92 -47 -166 -157 -179 -266 -14 -119 50 -230 164 -286
153 -75 323 -1 413 182 28 58 34 80 34 136 0 37 -2 70 -5 73 -3 3 -36 -2 -73
-10 l-67 -16 0 -37 c0 -52 -44 -136 -84 -161 -33 -20 -96 -28 -96 -11 0 5 45
84 100 177 55 93 99 173 97 179 -2 5 -26 21 -52 35 -37 19 -68 26 -125 28 -65
3 -82 0 -127 -23z m129 -141 c7 -7 -104 -196 -118 -201 -14 -5 -44 51 -44 82
0 63 59 125 120 125 20 0 39 -3 42 -6z'
      />
      <path
        d='M1957 7019 c-126 -30 -210 -131 -211 -254 -1 -33 3 -70 7 -83 8 -20
7 -21 -17 -12 -24 9 -27 6 -39 -23 -21 -50 -49 -138 -46 -141 13 -11 711 -258
715 -253 6 5 64 158 64 168 0 4 -28 16 -62 29 -35 12 -87 31 -116 42 l-54 20
36 30 c80 66 110 204 66 306 -37 85 -121 148 -228 171 -60 12 -62 12 -115 0z
m122 -208 c45 -23 59 -39 71 -80 21 -73 -37 -151 -111 -151 -117 0 -191 99
-144 190 30 59 113 77 184 41z'
      />
      <path
        d='M9147 6966 c-57 -16 -112 -64 -128 -115 -8 -24 -10 -82 -5 -186 7
-165 -1 -195 -48 -195 -29 0 -49 22 -78 85 -18 42 -22 68 -23 156 l0 107 -44
6 c-84 12 -108 8 -115 -16 -10 -40 -6 -141 9 -212 29 -138 102 -253 187 -297
70 -36 192 -17 240 37 44 50 51 90 43 251 -7 169 -2 193 44 193 60 0 102 -87
104 -220 l2 -85 76 -3 77 -3 6 36 c9 49 -11 176 -40 253 -43 115 -111 188
-199 211 -48 13 -47 13 -108 -3z'
      />
      <path
        d='M1725 6307 c-96 -46 -156 -133 -175 -255 -18 -108 13 -207 87 -279
52 -50 115 -73 203 -73 116 0 203 60 259 180 35 75 37 211 5 281 -50 107 -131
160 -254 166 -63 3 -83 0 -125 -20z m156 -178 c74 -25 109 -87 87 -155 -44
-131 -268 -100 -268 38 0 96 83 149 181 117z'
      />
      <path
        d='M9330 5952 c-61 -30 -88 -84 -115 -223 -14 -68 -32 -139 -40 -157
-13 -29 -19 -33 -48 -30 -46 4 -62 42 -62 143 1 56 8 100 24 148 13 38 21 70
20 71 -2 2 -36 15 -75 29 l-72 26 -16 -42 c-29 -79 -39 -149 -33 -256 3 -61
12 -126 21 -152 34 -94 125 -168 206 -169 121 0 183 66 215 231 31 163 36 179
61 196 22 14 26 14 49 -1 14 -10 30 -28 35 -42 21 -54 9 -175 -24 -255 -6 -14
7 -22 69 -42 l76 -26 15 34 c43 103 39 287 -7 395 -22 52 -82 114 -125 130
-41 16 -136 12 -174 -8z'
      />
      <path
        d='M1298 5522 c-2 -53 -4 -98 -3 -99 0 0 174 -4 388 -8 l387 -8 0 96 0
95 -287 6 c-159 3 -331 8 -385 11 l-96 5 -4 -98z'
      />
      <path
        d='M1693 5299 c-68 -26 -137 -101 -158 -172 -45 -151 21 -321 151 -387
72 -37 178 -36 257 3 110 55 164 163 155 312 -6 95 -34 168 -82 214 l-32 31
-42 -49 c-23 -27 -42 -54 -42 -60 0 -5 11 -27 25 -47 20 -30 25 -49 25 -101 0
-61 -2 -67 -35 -100 -20 -20 -38 -34 -40 -32 -2 3 -14 96 -26 207 l-23 202
-40 -1 c-23 0 -64 -9 -93 -20z m60 -216 c4 -27 9 -78 13 -115 7 -66 6 -68 -16
-68 -12 0 -37 15 -56 34 -30 30 -34 40 -34 86 0 44 4 56 29 81 43 42 57 38 64
-18z'
      />
      <path
        d='M9086 5280 c-117 -47 -196 -181 -196 -334 0 -53 24 -137 48 -167 l19
-22 56 42 55 42 -15 37 c-20 49 -14 143 14 180 20 28 70 58 80 49 3 -3 -5 -91
-17 -196 -13 -104 -20 -196 -17 -205 5 -12 21 -16 70 -16 124 0 206 50 259
158 29 58 33 76 33 147 0 93 -28 166 -86 224 -74 73 -207 100 -303 61z m220
-214 c29 -29 34 -41 34 -79 0 -34 -6 -53 -25 -75 -23 -28 -77 -56 -87 -46 -3
2 1 50 8 106 7 57 13 109 14 116 0 21 21 13 56 -22z'
      />
      <path
        d='M8828 4586 c-17 -62 -21 -93 -14 -97 6 -3 73 -23 148 -44 124 -33
141 -41 169 -73 28 -32 31 -40 26 -86 -2 -28 -6 -57 -8 -65 -3 -9 21 -20 78
-36 l82 -23 7 44 c6 40 2 65 -22 142 -6 21 -5 22 21 12 15 -6 30 -9 32 -7 2 2
14 43 27 89 l23 85 -272 75 -273 74 -24 -90z'
      />
      <path
        d='M1598 4531 l26 -88 171 -17 c93 -10 178 -20 188 -22 13 -4 -20 -34
-125 -116 -79 -60 -144 -115 -146 -123 -2 -7 9 -52 23 -99 l26 -85 232 185
c161 129 233 192 234 207 1 12 -10 58 -25 102 l-27 80 -250 27 c-137 14 -273
29 -301 32 l-52 6 26 -89z'
      />
      <path
        d='M8672 4113 c-5 -10 -24 -51 -42 -91 l-32 -74 69 -71 c37 -40 132
-139 210 -220 l143 -149 35 77 c19 43 35 82 35 87 0 6 -56 68 -125 138 -69 71
-125 132 -125 135 0 3 84 5 187 3 l187 -3 36 85 37 85 -176 6 c-349 13 -429
11 -439 -8z'
      />
      <path
        d='M2233 4082 c-3 -9 -15 -39 -25 -66 -10 -27 -17 -49 -16 -50 66 -37
118 -114 118 -175 0 -32 -24 -91 -38 -91 -4 0 -48 81 -97 180 -86 172 -91 181
-115 175 -43 -11 -114 -69 -145 -120 -41 -66 -47 -172 -16 -256 26 -68 86
-139 149 -177 41 -24 57 -27 132 -27 77 0 90 3 140 31 102 57 159 169 146 283
-13 117 -115 271 -196 300 -26 9 -32 8 -37 -7z m-105 -327 c57 -115 56 -124
-11 -111 -78 15 -121 115 -78 184 12 17 24 32 29 32 4 0 31 -47 60 -105z'
      />
      <path
        d='M8514 3646 c-125 -41 -235 -180 -249 -317 -8 -76 -3 -81 78 -67 66
11 67 12 67 42 1 53 42 126 90 159 24 17 100 24 100 10 0 -4 -50 -83 -112
-175 -125 -189 -122 -171 -33 -220 55 -31 182 -32 240 -3 55 27 118 93 152
157 24 46 28 65 28 138 0 99 -16 141 -78 203 -72 72 -193 103 -283 73z m201
-256 c27 -53 20 -98 -24 -141 -30 -30 -46 -39 -72 -39 -65 0 -65 10 6 113 36
54 68 97 70 97 3 0 11 -13 20 -30z'
      />
      <path
        d='M2383 3452 c-140 -50 -237 -168 -250 -307 -7 -77 20 -175 69 -251 62
-95 241 -315 254 -310 7 3 136 102 288 221 176 138 274 221 269 228 -24 40
-226 289 -263 325 -24 24 -74 57 -109 75 -82 40 -178 47 -258 19z m240 -201
c27 -16 114 -115 140 -158 7 -11 -291 -253 -312 -253 -12 0 -92 102 -113 145
-53 103 -10 216 105 275 51 26 130 22 180 -9z'
      />
      <path
        d='M8109 3192 c-19 -20 -49 -53 -66 -72 l-32 -35 109 -99 c60 -54 116
-114 125 -133 22 -45 14 -86 -25 -135 -17 -20 -30 -39 -30 -41 0 -3 27 -28 60
-57 48 -42 63 -50 74 -41 24 20 56 99 56 136 0 40 5 43 34 16 21 -19 21 -19
83 48 l61 68 -208 190 -208 191 -33 -36z'
      />
      <path
        d='M7776 2856 c-38 -34 -67 -67 -65 -72 2 -6 116 -137 253 -291 284
-321 240 -295 345 -201 l51 46 -246 278 c-135 154 -251 284 -257 291 -9 9 -28
-3 -81 -51z'
      />
      <path
        d='M3230 2693 c-56 -20 -138 -101 -170 -168 -35 -70 -35 -170 0 -238 42
-83 134 -146 213 -147 20 0 37 -3 37 -6 0 -4 -31 -51 -70 -105 -38 -54 -70
-100 -70 -103 0 -5 128 -96 146 -103 9 -3 389 518 447 613 4 7 -22 31 -66 62
l-74 51 -21 -22 c-21 -21 -22 -21 -22 -2 0 46 -67 123 -140 160 -48 25 -153
29 -210 8z m190 -178 c63 -33 79 -108 37 -178 -46 -76 -115 -97 -178 -54 -64
43 -76 107 -33 173 46 71 110 92 174 59z'
      />
      <path
        d='M7530 2629 c-105 -21 -231 -115 -270 -201 -11 -24 -20 -48 -20 -55 0
-6 24 -16 53 -23 28 -6 59 -14 68 -16 11 -3 23 7 36 33 31 59 84 96 145 100
38 3 59 0 73 -11 15 -12 17 -18 8 -24 -196 -129 -323 -219 -323 -228 0 -24 73
-105 118 -131 42 -25 57 -28 132 -28 70 0 94 5 135 25 64 31 134 101 164 164
29 59 32 160 7 220 -54 128 -192 203 -326 175z m175 -346 c-9 -49 -65 -93
-119 -93 -28 0 -52 7 -67 19 l-23 18 99 67 c97 64 100 65 108 43 5 -12 6 -36
2 -54z'
      />
      <path
        d='M7063 2355 c-130 -23 -268 -107 -309 -186 -37 -73 -5 -176 66 -211
46 -24 76 -23 199 7 105 26 131 24 131 -10 0 -39 -120 -95 -202 -95 l-38 0 0
-70 0 -70 36 0 c93 0 226 54 299 121 74 69 95 147 56 219 -44 83 -113 97 -266
55 -98 -27 -128 -25 -123 8 6 45 125 97 220 97 l48 0 0 69 c0 54 -4 70 -16 75
-9 3 -19 6 -22 5 -4 0 -40 -7 -79 -14z'
      />
      <path
        d='M3852 2350 c-18 -4 -35 -10 -39 -13 -3 -3 5 -35 17 -72 22 -65 22
-66 54 -59 46 8 110 -12 151 -47 35 -31 64 -95 49 -109 -5 -4 -90 30 -189 76
-99 45 -183 83 -186 83 -4 1 -17 -23 -29 -51 -47 -108 -21 -238 61 -313 67
-60 134 -88 224 -93 75 -4 84 -2 145 30 140 72 195 240 125 379 -62 122 -259
220 -383 189z m92 -355 c104 -48 110 -59 52 -90 -69 -37 -162 12 -173 93 -7
54 -2 54 121 -3z'
      />
      <path
        d='M6453 2135 c-101 -28 -174 -74 -210 -133 -43 -70 -22 -164 47 -210
34 -23 39 -24 166 -18 115 6 132 5 145 -10 12 -14 10 -19 -14 -40 -36 -31 -97
-46 -169 -42 -58 3 -58 3 -63 -27 -3 -16 -7 -48 -8 -70 l-2 -40 80 0 c133 1
242 42 308 114 42 47 51 75 44 136 -6 61 -30 93 -85 118 -45 19 -53 20 -161 8
-98 -11 -116 -11 -128 2 -24 23 0 53 57 72 35 12 75 16 134 13 l84 -3 9 68 c5
37 7 70 4 72 -10 11 -189 3 -238 -10z'
      />
      <path
        d='M4496 2006 c-241 -450 -302 -572 -292 -577 6 -3 47 -12 90 -19 95
-14 78 -31 183 170 96 183 135 252 139 248 3 -4 64 -452 64 -474 0 -9 178 -49
186 -41 1 1 53 97 115 212 123 230 117 220 123 214 2 -2 16 -98 31 -214 38
-298 23 -267 138 -286 85 -14 97 -14 97 -1 0 21 -101 736 -104 740 -3 2 -71
15 -187 36 -25 5 -32 -4 -135 -199 -60 -113 -112 -205 -115 -205 -3 0 -18 100
-34 223 -15 122 -31 225 -35 230 -3 4 -52 15 -108 26 l-102 18 -54 -101z'
      />
      <path
        d='M5780 1779 c-52 -4 -119 -7 -149 -8 l-54 -1 8 -72 c3 -40 8 -74 10
-76 4 -4 287 17 292 22 3 3 1 35 -3 73 l-9 68 -95 -6z'
      />
    </g>
  </svg>
)

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5'
    />
  </svg>
)
